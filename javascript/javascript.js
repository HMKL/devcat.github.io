// <!-- Menu Toggle Script -->
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

  // Change icon when button is press
  $(function(){
    $("#menu-toggle").click(function () {
      if ($(this).find('.fa-grip-lines').length>0) {
        $(this).html("<i class='fas fa-grip-lines-vertical'></i>");
      } else {
        $(this).html("<i class='fas fa-grip-lines'></i>");
      }  
    });
  });




      // $(() => {
      //   $("#menu-toggle").click(() => {
      //       if ($(this).find('.fa-grip-lines').length > 0) {
      //           $(this).html("<i class='fas fa-grip-lines-vertical'></i>");
      //       } else {
      //           $(this).html("<i class='fas fa-grip-lines'></i>");
      //       }  
      //   });
      // });
    

