$(document).ready(function() {
    $(".humbericon").on("click", function() {
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
    });
});