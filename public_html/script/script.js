$(function(){
   
   $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        var h = $("div.banner").height();
        if (scroll > h-1) {
            $('#headerNav nav').css({"position":"fixed","top":"0","width": "100%", "z-index": "999"});
        } else {
            $('#headerNav nav').css({"position":"static","top":"auto"});
        }
    });
});

//$(document).ready(function(){
//  $(document).scroll(function(){
//    if($(window).scrollTop() >= $('header').height()){
//      $("nav").css("position", "fixed");
//      $("nav").css("top", "0");
//    }else{
//      $("nav").css("position", "");
//      $("nav").css("top", "auto");
//    }
//  });
//})
