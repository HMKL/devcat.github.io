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

  $('#foo').hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100 && $(this).scrollTop() < 1500) {
      $('#foo').fadeIn();
    } else {
      $('#foo').fadeOut();
    }
  });  


