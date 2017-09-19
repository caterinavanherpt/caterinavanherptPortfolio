$(function() {

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


