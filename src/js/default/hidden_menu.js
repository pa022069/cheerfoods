$(function () {
    scrollboolean = true;
    $(".wrap").on('scroll', function () {
        if (scrollboolean) {
            var scrollTop = $(".wrap").scrollTop();
            if (scrollTop > $(".wrap").height()/2) {
                $(".header__bar").addClass("header__bar--active");
            } else {
                $(".header__bar").removeClass("header__bar--active");

             }
        }
    });
});