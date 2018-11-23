$(document).ready(function(){
// var module = document.querySelector(".article__content");

// $clamp(module, {clamp: 5,
//                 truncationHTML: '<a href="#">more...</a>'

//                 });

$('.article__more').on('click', function() {
    $(this).siblings('div.article__content').toggleClass('active');
    // console.log();
	});

var location = window.location.href;
    var cur_url = location.split('/').pop();
    console.log('location = ' + location);
    console.log('cur_url = ' + cur_url);

$('.nav-link').each(function() {
    var link = $(this).attr('href');
 	console.log('link=' + link);
 	console.log('this=' + this);
        if (cur_url == link)
        {
            $(this).find('.nav-link').addClass('active');

        }
	});
	 
});

