export default function handlerScrollingNavigation() {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('header').height() + $('nav').height()*2) {
            $('nav').addClass('navigation-is-scroll shadow-sm');
        } else {
            $('nav').removeClass('navigation-is-scroll shadow-sm');
        }
    });
}