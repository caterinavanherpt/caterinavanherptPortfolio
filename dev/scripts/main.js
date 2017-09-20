$(function() {

	//smooth scroll to different parts of page
	$('#portfolio__link').on('click', function() {
		$('html, body').animate({
			scrollTop: $('.portfolio').offset().top
		}, 1000);
	});

	$('#blog__link').on('click', function() {
		$('html, body').animate({
			scrollTop: $('.blog__wrapper').offset().top
		}, 1000);
	});

	$('#contact__link, .header__contact_blurb').on('click', function() {
		$('html, body').animate({
			scrollTop: $('.contactForm').offset().top
		}, 1000);
	});

	//form handling 
	let submitted = false;

	$('form').on('submit', () => {
		submitted = true;
	});

	$('iframe').on('load', () => {
		if (submitted) { 
			window.location='index.html';
		}
	});

	$('textarea').on('keyup', () => {
		const textarea = document.getElementsByClassName('textarea');
		textarea[0].style.height = (textarea[0].scrollHeight)+"px";
	});

	// $('input, textarea').on('click', () => {
		
	// });

});


