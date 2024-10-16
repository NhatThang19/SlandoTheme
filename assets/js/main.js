$(document).ready(function () {

    let offset = { offset: "80%" }

    $(".container").waypoint(function () {
        $(".container").addClass("animate__animated animate__fadeIn");
    }, offset);

    $(".excellent").waypoint(function () {
        $(".excellent").addClass("animate__animated animate__fadeIn");
    }, offset);

    $(".testimoninal").waypoint(function () {
        $(".testimoninal").addClass("animate__animated animate__fadeIn");
    }, offset);

    $("#section-7").waypoint(function () {
        $("#section-7").addClass("animate__animated animate__fadeIn");
    }, offset);

    $("#section-5").waypoint(function () {
        $("#section-5").addClass("animate__animated animate__fadeIn");
    }, offset);

    $("#section-6").waypoint(function () {
        $("#section-6").addClass("animate__animated animate__fadeIn");
    }, offset);

    $("#section-9").waypoint(function () {
        $("#section-9").addClass("animate__animated animate__fadeIn");
    }, offset);

    $("#section-10").waypoint(function () {
        $("#section-10").addClass("animate__animated animate__fadeIn");
    }, offset);


    $(".services").waypoint(function () {
        $(".services .services-wrapper").addClass("animate__animated animate__fadeInRight animate__slow");
    }, offset);

    $(".services").waypoint(function () {
        $(".services .service-item").addClass("animate__animated animate__fadeInLeft animate__slow");
    }, offset);

    $("#section-4").waypoint(function () {
        $("#section-4 .section-title").addClass("animate__animated animate__fadeInLeft animate__slow");
    }, offset);

    $("#section-4").waypoint(function () {
        $("#section-4 .section-content-box").addClass("animate__animated animate__fadeInUp animate__slow");
    }, offset);

    $("#section-4").waypoint(function () {
        $("#section-4 .section-content-bottom").addClass("animate__animated animate__fadeInUp animate__slow");
    }, offset);

    $("#section-5").waypoint(function () {
        $("#section-5 .video-icon .video-popup").addClass("animate__animated animate__zoomIn animate__slow");
    }, offset);

    $("#section-5").waypoint(function () {
        $("#section-5 .section-content").addClass("animate__animated animate__fadeInRight animate__slow");
    }, offset);

    $("#section-6").waypoint(function () {
        $("#section-6 .sec-title").addClass("animate__animated animate__fadeInRight animate__slow");
    }, offset);

    $("#section-6").waypoint(function () {
        $("#section-6 .work-one__single").addClass("animate__animated animate__fadeInLeft animate__slow");
    }, offset);

    $("#section-7").waypoint(function () {
        $("#section-7 .sec-title").addClass("animate__animated animate__fadeInRight animate__slow");
    }, offset);

    $("#section-7").waypoint(function () {
        $("#section-7 .section-content").addClass("animate__animated animate__fadeInLeft animate__slow");
    }, offset);

    $("#section-7 .projects-one__bottom").waypoint(function () {
        $("#section-7 .projects-one__bottom").addClass("animate__animated animate__fadeInUp animate__slow");
    }, offset);

    $("#section-9").waypoint(function () {
        $("#section-9 .section-img").addClass("animate__animated animate__fadeIn animate__slow");
    }, offset);

    $("#section-9").waypoint(function () {
        $("#section-9 .overlay-img").addClass("animate__animated animate__zoomIn animate__slow");
    }, offset);


    $("#section-9").waypoint(function () {
        $("#section-9 .section-content").addClass("animate__animated animate__fadeInRight animate__slow");
    }, offset);

    $("#section-10").waypoint(function () {
        $("#section-10 .sec-title").addClass("animate__animated animate__fadeInRight animate__slow");
    }, offset);

    $("#section-10").waypoint(function () {
        $("#section-10 .row").addClass("animate__animated animate__fadeInUp animate__slow");
    }, offset);


    $("footer").waypoint(function () {
        $("footer .footer-content").addClass("animate__animated animate__slideInRight animate__slow");
    }, offset);








    $('#section-7').waypoint(function () {
        $('.count').each(function () {
            $(this).addClass('countup');
        });
        runAnimations();
    }, offset);

    $("#section-4").waypoint(function () {
        $("#section-4").addClass("animate__animated animate__fadeIn");
    }, offset);

    $('#section-4').waypoint(function () {
        $('.count').each(function () {
            $(this).addClass('countup');
        });
        runAnimations();
    }, offset);

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    var splide = new Splide('#image-carousel', {
        type: 'loop',
        rewind: true,
        perPage: 3,
        autoplay: true,
        interval: 5000,
        speed: 1000,
        arrows: false,
        pagination: false,
        breakpoints: {
            768: {
                perPage: 1
            },
            1199: {
                perPage: 2
            }
        }
    }).mount();

    var splide = new Splide('#image-carousel-2', {
        type: 'loop',
        rewind: true,
        perPage: 3,
        autoplay: true,
        interval: 5000,
        speed: 1000,
        arrows: false,
        pagination: false,
        gap: '20px',
        breakpoints: {
            768: {
                perPage: 1
            },
            1199: {
                perPage: 2
            }
        }
    }).mount();

    var splide1 = new Splide('#splide1', {
        type: 'fade',
        rewind: true,
        perPage: 1,
        autoplay: true,
        easing: 'ease-in-out',
        pagination: false,
        arrows: false
    }).mount();

});


function onBtnSubmitClick() {
    "use strict";
    var vObject = {
        username: "",
        email: "",
        text: ""
    };

    getDataFromInput(vObject);
    console.log(vObject);
    var vCheck = validateData(vObject);
    console.log(vCheck);

    if (vCheck == true) {
    }
}

function getDataFromInput(paramObject) {
    "use strict";

    paramObject.username = $('#inp_username').val().trim();
    paramObject.email = $('#inp_email').val().trim();
    paramObject.text = $('#int_text').val().trim();
}

function validateData(paramObject) {
    "use strict";

    var vUsername = paramObject.username;
    var vEmail = paramObject.email;
    var vText = paramObject.text;
    var vResult = true;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (vUsername === "") {
        $('#inp_username').addClass('is-invalid');
        vResult = false;
    } else {
        $('#inp_username').removeClass('is-invalid');
    }

    if (!emailPattern.test(vEmail)) {
        $('#inp_email').addClass('is-invalid');
        vResult = false;
    } else {
        $('#inp_email').removeClass('is-invalid');
    }

    if (vText === "") {
        $('#int_text').addClass('is-invalid');
        vResult = false;
    } else {
        $('#int_text').removeClass('is-invalid');
    }
    return vResult;
}


const animationDuration = 2000;

const frameDuration = 1000 / 60;

const totalFrames = Math.round(animationDuration / frameDuration);

const easeOutQuad = t => t * (2 - t);

const animateCountUp = $el => {
    let frame = 0;
    const countTo = parseInt($el.text(), 10);

    const counter = setInterval(() => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        const currentCount = Math.round(countTo * progress);

        if (parseInt($el.text(), 10) !== currentCount) {
            $el.text(currentCount);
        }

        if (frame === totalFrames) {
            clearInterval(counter);
        }
    }, frameDuration);
};

const runAnimations = () => {
    $('.countup').each(function () {
        animateCountUp($(this));
    });
};
