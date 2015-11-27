
$(document).on("scroll", function(){
    $("nav").toggleClass("navDisplay", $(document).scrollTop() > 700);
});