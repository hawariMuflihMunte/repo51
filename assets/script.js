$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $("div#navbar-fixed.navigation-bar").removeClass("not-scroll-down-nav");
        } else {
            $("div#navbar-fixed.navigation-bar").addClass("not-scroll-down-nav");
        }
    });

    $('.dropdown-trigger').dropdown();
    $('.scrollspy').scrollSpy();
});