$(document).ready(() => {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    $toggleCollapse.click(() => {
        $nav.toggleClass('collapse');
    });

    AOS.init();
})