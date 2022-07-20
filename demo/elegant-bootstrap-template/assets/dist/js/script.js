$(document).ready(function () {
    $(window).scroll(function () {
        var y = $(window).scrollTop();
        if (y > 0) {
            $("#navbar").addClass('shadow-lg');
            $("#navbar").css('opacity', 0.8);
        } else {
            $("#navbar").removeClass('shadow-lg');
            $("#navbar").css('opacity', 1);
        }
    });
});