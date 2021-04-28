// Navbar Open / Close js

$(document).ready(function () {
    $(".menutab").click(function () {
        $("#navbar").animate({
            width: "210px"
        }, 650);
    });

    $(".closebtn").click(function () {
        $("#navbar").animate({
            width: "0",
        }, 500);
    });
});