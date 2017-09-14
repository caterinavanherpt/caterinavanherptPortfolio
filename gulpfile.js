const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('babelify')
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const browserify = require('browserify');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');


//a task to compile our sass 
gulp.task('styles', () => {
	//** folder structure is called globbing
	return gulp.src('./dev/styles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./public/styles/'))
});

//a task to compile our javascript 
gulp.task('js', () => {
    browserify('dev/scripts/main.js', {debug: true})
        .transform('babelify', {
            sourceMaps: true,
            presets: ['es2015']
        })
        .bundle()
        .on('error',notify.onError({
            message: "Error: <%= error.message %>",
            title: 'Error in JS 💀'
        }))
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gulp.dest('public/scripts'))
        .pipe(reload({stream:true}));
});

//a task to reload html on save
gulp.task('html', () => {
  return gulp.src('*.html')
   .pipe(browserSync.reload({
    stream: true
   }))
});

//browser sync
gulp.task('bs', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

//a task to watch all of my other tasks 
//to exit out of the watch task use ctl + c
gulp.task('default', ['js','bs', 'styles','html'], () => {
    gulp.watch('dev/**/*.js',['js']);
    gulp.watch('dev/**/*.scss',['styles']);
    gulp.watch('*.html', ['html']);
    gulp.watch('./public/styles/style.css',reload);
});
