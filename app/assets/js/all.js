$(document).ready(function () {
    $(".btn-hamburger").click(function (e) {
        e.preventDefault();
        $(".menu").toggleClass("active");
    });
});
