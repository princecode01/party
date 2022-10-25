/// <reference path="../typings/globals/jquery/index.d.ts" />

$('.event-content span').click(function () {

    if ($(".event-aside").width() == "250") {
        closeNav();
    } else {
        $(".event-aside").width("250px");
        $(".event-content").css("margin-left", "250px");
    }
})

$('.event-aside .closeBtn').click(closeNav);

function closeNav() {
    $(".event-aside").width("0px");
    $(".event-content").css("margin-left", "0px");
}

$("a").click(function () {
    let sectionId = $(this).attr("href");

    if ($(sectionId).offset() != undefined) {
        let positionOfSection = $(sectionId).offset().top;

        $("body").animate({
            scrollTop: positionOfSection
        }, 1000);
    }

})


$(document).ready(function () {
    $("#singers .singer:first p").css("display", "block");
    $("#singers .singer h3").click(function () {
        $(this).next().slideToggle(500);
        $("#singers .singer p").not($(this).next()).slideUp(500);
    });
});


// ---------------------------------------------------------------

function countdown() {
    let now = new Date();
    let eventDate = new Date(2022, 12, 28);

    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();

    let remTime = eventTime - currentTime;

    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    $('#days').html(`<h3>${d} D</h3>`);
    $('#hours').html(`<h3>${h} h</h3>`);
    $('#minutes').html(`<h3>${m} m</h3>`);
    $('#seconds').html(`<h3>${s} s</h3>`);

    setTimeout(countdown, 1000);
}

countdown();

// --------------------------------------------------------

(function () {
    let maxChar = 100;
    $("textarea").keyup(function () {
        let length = $(this).val().length;
        let character = maxChar - length;

        // console.log(character)

        if (character <= 0) {
            $("#char").text("your available character finished");
        } else {
            $("#char").text(character);
        }
    });
})();