$(document).ready(function(){

// делаем разворачивающуюся статью
$('.article__more').on('click', function() {
    $(this).siblings('div.article__content').toggleClass('active');
    // console.log();
	});
// делаем раcкрывающийся фильтр
$('#filter-open').on('click', function() {
    $(this).siblings().find('.filter__list').toggleClass('active');
    // console.log();
	});

//делаем активное меню
var location = window.location.href;
var cur_url = location.split('/').pop();
    // console.log('location = ' + location);
    // console.log('cur_url = ' + cur_url);

$('#nav_menu .nav-link').each(function() {
    var link = $(this).attr('href');
 	// console.log('link=' + link);
 	// console.log('this=' + this);
        if (cur_url == link)
        {
            $(this).addClass('active');
            // console.log('addClass');
        }
	});
// меняем container 
$(window).resize(function(e){
     if ($(window).width() < 992) { //1169
        $(".wrapper > .container").removeClass("container").addClass("container-fluid");
    }
    else if($(window).width() > 992) { // 1169
        $(".wrapper > .container-fluid").removeClass("container-fluid").addClass("container");
    }
});

// masonry
var isotope2 = $('.masonry').isotope({
				itemSelector: '.masonry-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.col-lg-6',
					
					
				}
			});	

});

