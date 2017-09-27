
/*function changeBanner(){
	if(window.pageYOffset > 100 &&window.pageYOffset){
		var float_banner = document.getElementc("float_banner");
		float_banner.style.backgroundColor = "#000";
	}else(document.documentElement.scrollTop > 100 && document.documentElement){
		var float_banner = document.getElementc("float_banner");
		float_banner.style.backgroundColor = "#000";
	}
}*/
flag = 0;
/*
$(window).scroll(function(){
	if(window.pageYOffset>100){
		$("#header").addClass("float_banner");
		if(flag = 0){
			$("#header").animate({top: '+=13px'}, "slow");
			flag = 1;
		}
	}else{
		$("#header").removeClass("float_banner");
		if(flag = 1){
			$("#header").animate({top: '+=13px'}, "slow");
			flag = 0;
		}
	}
})*/

$(window).on('scroll', function() {

		var y = $(window).scrollTop(),
		    topBar = $('header');
	   if (y > 1) {
	      topBar.addClass('float_banner');
	   }
      else {
         topBar.removeClass('float_banner');
      }
	});
	
	
/*plugins.js*/
var sections = $("section"),
	navigation_links = $("#main-nav-wrap li a");	

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');			

            navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		}, 

		offset: '25%'

	});