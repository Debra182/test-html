/*$(".btn").click(function() {

	var options = {
	  direction: "right"
	};
	var effect = 'slide';
	var duration = 800;
  
	$(".nav-bar").toggle(effect, options, duration);
  
  });
  
  $(".btn").click(function() {
	$(this).toggleClass("active");
  });


  
$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});


const menuButton = document.querySelector('#toggle');
const body = document.body;
const menu = document.querySelector('.overlay-menu');

menuButton.addEventListener('click', function() {
  if (menu.classList.contains('open')) {
	menu.classList.remove('open');
	body.classList.remove('no-scroll');
  } else {
	menu.classList.add('open');
	body.classList.add('no-scroll');
  }
});*/

$(document).ready(function() {
	$('#toggle').click(function() {
	  $(this).toggleClass('active');
	  $('#overlay').toggleClass('open');
	  // You may want to add/remove no-scroll class here too
	  $('body').toggleClass('no-scroll', $('#overlay').hasClass('open'));
	});
  });
