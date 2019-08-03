/*****Global JS*****/

//Import Header and Footer content
$("#header").load("header.html", function () {
    changeActiveNavLink();
});

$("#footer").load("footer.html");


function changeActiveNavLink() {
    var path = window.location.pathname;
    var page = path.split("/").pop();

    switch (page) {
        case "index.html":
            $("#main-nav-home-link").addClass("active");
            break;
        case "learn.html":
            $("#main-nav-learn-link").addClass("active");
            break;
        case "explore.html":
            $("#main-nav-explore-link").addClass("active");
            break;
        case "contact.html":
            $("#main-nav-contact-link").addClass("active");
            break;
    }
}


$(document).ready(function () {
    var windowWidth = $(window).width();
    if (windowWidth <= 700) {
        $('nav').removeClass("fixed-top");
    } else {
        $('nav').addClass("fixed-top");
    }
});













