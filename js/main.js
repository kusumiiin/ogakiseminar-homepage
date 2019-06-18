$(function(){
$("#nav-open").on("click", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $("#nav-content").removeClass("open").fadeOut(100);
      } else {
        $(this).addClass("active");
        $("#nav-content").fadeIn(100).addClass("open");
      }
    });
  if ($('.activity').css('width') != '100%') {
    $('.activity').addClass('move');
    $(window).scroll(function(){
      $(".activities").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $(this).find(".activity").removeClass('move');
        } else {
          $(this).find(".activity").addClass('move');
        }
      });
    });
  }
});
