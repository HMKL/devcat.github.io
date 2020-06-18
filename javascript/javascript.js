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
  $(".objects").click(function () {
    if ($(this).find("#o1, #o4, #o7, #o8")) {
      $("#o1,#o4, #o7, #o8").toggle(1500);
    }
  });
  $(".allthings").click(function () {
    if ($(this).find(".all")) {
      $(".all").show(2000);
    } 
  });
  $('.oils').click(function () {
    if ($(this).find("#o2, #o3, #o5")) {
      $("#o2, #o3, #o5").toggle(1500);
    }
  });
});


$(document).ready(function () {
  $(".image-frame").hover(
    function () {
      $(".image-caption", this).slideToggle("slow");
    },
    function () {
      $(".image-caption", this).slideToggle("slow");
    }
  );
});
