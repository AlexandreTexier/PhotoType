// ===== GLOBAL VARIABLES ======
var firstScroll=false;


// ===== DOM READY ======
$( document ).ready(function(){
  // test script
  console.log("test");

  //auto scroll landing page
  $(document).scroll(function(event){
    console.log("scroll prevented");

    if(firstScroll==false){
      // event.preventDefault();
      $('#landing-page').css('background-color','yellow');
      $('html, body').animate({
        scrollTop: $('#intro').offset().top
        // $('#landing-page').css('height','50px');
      }, 1500, function(){
        $('#menu-bar').addClass('active');
        // $('#title').hide();
        // $('#landing-page').css('height','50px');
      });

      firstScroll=true;
    }
    else{
      //do nothing
    }

  });

});


// ===== FUNCTIONS ======
