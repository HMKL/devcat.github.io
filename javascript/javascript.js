// <!-- Menu Toggle Script -->
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  // Change icon when button is press
  $(function(){
    $("#menu-toggle").click(function () {
      if ($(this).find('.fa-angle-double-left').length>0) {
        $(this).html("<i class='fas fa-angle-double-right'></i>");
      } else {
        $(this).html("<i class='fas fa-angle-double-left'></i>");
      }  
    });
  });

  $('.skills').hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100 && $(this).scrollTop() < 1500) {
      $('.skills').fadeIn(1500);
    } else {
      $('.skills').fadeOut(1000);
    }
  }); 

 



//  test function
$(function () {
  $(".allweb").click(function () {
    if ($(this).find("#mmm, #zzz")) {
      $("#mmm, #zzz").toggle(1500);
    }
  });
  $(".allweb").click(function () {
    if ($(this).find("#aaa")) {
      $("#aaa").css("color", "red");
    }
  });
});
