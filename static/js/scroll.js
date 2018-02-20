$(document).ready(function() {
	// scroll to data-id
	$('#kontakt').on('click', function(event) {
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 600);
	});
	// close twitter navbar on click
  $('#kontakt').on('click',function() {
    if ($('.navbar-toggler').attr('aria-expanded')) {
      $('.navbar-collapse').collapse('hide');
    }
  });
});
// scroll function
function scrollToID(id, speed) {
	var offSet = 50;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}
