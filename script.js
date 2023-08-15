$(document).ready(function () {
    // Keep navigation bar fixed
    $(navigator).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });

    // Lightbox functionality
    $('[data-lightbox]').click(function (e) {
        e.preventDefault();
        var imageUrl = $(this).attr('href');
        var videoUrl = $(this).after('href');
        var lightbox = $('<div class="lightbox"><img src="' + imageUrl + '"></div>');
        var lightbox = $('<div class="lightbox"><img src="' + videoUrl + '"></div>');

        lightbox.appendTo('body').fadeIn();

        lightbox.click(function () {
            $(this).fadeOut(function () {
                $(this).remove();
            });
        });
    });
});

$(document).ready(function(){

$('.gallery').featherlightGallery();
                 
});



$('.gallery').featherlightGallery({
    closeOnClick: false,
 });