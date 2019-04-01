/*****Global JS*****/

$(document).ready(function ()
{
    //Import header.html
    $("#header").load("header.html");

    //import footer.html
    $("#footer").load("footer.html");

    changeNavbarColorOnScroll();

    changeActiveNavLink();

    setTimeout(changeActiveNavLink, 1000);

    setTimeout(removeFixedNavBar, 1000);

    setTimeout(fixAnchorLinks, 500);
});


/*****Header JS*****/
function changeActiveNavLink()
{
    var path = window.location.pathname;
    var page = path.split("/").pop();

    switch (page)
    {
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

//Change navbar color when scrolling
function changeNavbarColorOnScroll()
{
    $(window).scroll(function ()
    {
        var scroll = $(window).scrollTop();
        var windowWidth = $(window).width();
        if (scroll > 50)
        {
            $("#nav").css("background", "#60bae3");
        } else if (scroll < 50 && windowWidth < 992)
        {

            $("#nav").css("background", "#60bae3");
        } else
        {
            $("#nav").css("background", "transparent");
        }

    });
}

//Remove fixed navbar on devices with screen sizes less than 700px
function removeFixedNavBar()
{
    var windowWidth = $(window).width();
    if (windowWidth <= 700)
    {
        $('nav').removeClass("fixed-top");
    }

    $(window).resize(function ()
    {
        var windowWidth = $(window).width();
        if (windowWidth <= 700)
        {
            $('nav').removeClass("fixed-top");
        } else
        {
            $('nav').addClass("fixed-top");
        }
    });
}

//Fixes problem with incorrect position of anchor links
function fixAnchorLinks()
{
    $('html,body').animate({
        scrollTop: $(window.location.hash).offset().top
    });
}












