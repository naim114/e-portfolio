/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/

$(document).ready(function () {
    $("#icon_github").click(function () {
        window.open('https://github.com/naim114', '_blank');
        // navigator.clipboard.writeText("https://github.com/naim114");
        // alert("Github copy to clipboard!");
    });

    $("#icon_phone").click(function () {
        window.open('http://wa.me//+601133669657', '_blank');
        // navigator.clipboard.writeText("+60 11-3366 9657");
        // alert("Phone numebr copy to clipboard!");
    });

    $("#icon_email").click(function () {
        window.open('mailto:webmaster@example.com');
        // navigator.clipboard.writeText("naim.muhammad99@gmail.com");
        // alert("Email copy to clipboard!");
    });

    $(window).scroll(function () {
        var y = $(window).scrollTop();
        if (y > 0) {
            $("#navbar").addClass('shadow-lg');
            $("#navbar").css('opacity', 0.8);
        } else {
            $("#navbar").removeClass('shadow-lg');
            $("#navbar").css('opacity', 1);
        }

        // navbar active
        if (y <= 421) {
            $("#nav-about").removeClass('active');
            $("#nav-e-e").removeClass('active');
            $("#nav-work").removeClass('active');
            $("#nav-contact").removeClass('active');
        }
        else if (y >= 422 && y <= 950) {
            $("#nav-about").addClass('active');
            $("#_about").addClass('animation-fade-in-100');

            $("#nav-e-e").removeClass('active');
            $("#nav-work").removeClass('active');
            $("#nav-contact").removeClass('active');
        }
        else if (y >= 951 && y <= 1700) {
            $("#nav-e-e").addClass('active');
            $("#_experience_education").addClass('animation-fade-in-100');

            $("#nav-about").removeClass('active');
            $("#nav-work").removeClass('active');
            $("#nav-contact").removeClass('active');
        }
        else if (y >= 1701 && y <= 2000) {
            $("#nav-work").addClass('active');
            $("#_work").addClass('animation-fade-in-100');

            $("#nav-e-e").removeClass('active');
            $("#nav-about").removeClass('active');
            $("#nav-contact").removeClass('active');
        } else if (y >= 2000) {
            $("#nav-contact").addClass('active');
            $("#_contact").addClass('animation-fade-in-100');

            $("#nav-work").removeClass('active');
            $("#nav-e-e").removeClass('active');
            $("#nav-about").removeClass('active');
        }
    });

    $("#about").scroll(function () {
        console.log('here');
    });
})

document.addEventListener("DOMContentLoaded", function () {
    el_autohide = document.querySelector('#navbar');

    // add padding-top to bady (if necessary)
    // navbar_height = document.querySelector('.navbar').offsetHeight;
    // document.body.style.paddingTop = navbar_height + 'px';

    if (el_autohide) {
        var last_scroll_top = 0;
        window.addEventListener('scroll', function () {
            let scroll_top = window.scrollY;
            if (scroll_top < last_scroll_top) {
                // scrolling up
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            } else {
                // scrolling down
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
        });
    }
}); 