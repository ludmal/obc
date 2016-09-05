$(document).ready(function () {
    var $scrollingDiv = $("#nav");
    $(window).scroll(function () {
        $scrollingDiv.css("background-color", (($(window).scrollTop() / $(document).height()) > 0.15) ? "#48b740" : "");
    });
});