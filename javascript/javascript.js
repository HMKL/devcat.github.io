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



  var app = document.getElementById('app');

  var typewriter = new Typewriter(app, {
      loop: true
  });
  
  typewriter.typeString('Hello World!')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Strings can be removed')
      .pauseFor(2500)
      .deleteChars(7)
      .typeString('<strong>altered!</strong>')
      .pauseFor(2500)
      .start();
  
  
  


      // $(() => {
      //   $("#menu-toggle").click(() => {
      //       if ($(this).find('.fa-grip-lines').length > 0) {
      //           $(this).html("<i class='fas fa-grip-lines-vertical'></i>");
      //       } else {
      //           $(this).html("<i class='fas fa-grip-lines'></i>");
      //       }  
      //   });
      // });
    

