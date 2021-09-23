$(document).ready(() => {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    $toggleCollapse.click(() => {
        $nav.toggleClass('collapse');
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $("nav").addClass("scrolled");
            $("nav").removeClass("unscrolled")
        } else {
            $("nav").removeClass("scrolled");
            $("nav").addClass("unscrolled");
        }
    });

    AOS.init();

    $(window).resize(function () {
        var ww = $(window).width();
        if (ww < 450) {
            $('#gameplay').attr({ 'width': 350, 'height': 220 });
        }
        else if (ww < 550) {
            $('#gameplay').attr({ 'width': 400, 'height': 270 });
        }
        else if (ww < 650) {
            $('#gameplay').attr({ 'width': 500, 'height': 350 });
        }
        else if (ww < 800) {
            $('#gameplay').attr({ 'width': 600, 'height': 450 });
        }
        else if (ww > 800) {
            $('#gameplay').attr({ 'width': 760, 'height': 500 });
        }
    });
})