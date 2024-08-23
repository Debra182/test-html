$(document).ready(function() {
	$('#toggle').click(function() {
	  $(this).toggleClass('active');
	  $('#overlay').toggleClass('open');
	  // You may want to add/remove no-scroll class here too
	  $('body').toggleClass('no-scroll', $('#overlay').hasClass('open'));
	});
  });
