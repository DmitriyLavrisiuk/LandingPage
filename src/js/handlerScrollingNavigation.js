export default function handlerScrollingNavigation() {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('header').height() + $('nav').height()*2) {
            $('nav').addClass('modulePage__item_background-color-white shadow-sm');
        } else {
            $('nav').removeClass('modulePage__item_background-color-white shadow-sm');
        }
    });
}