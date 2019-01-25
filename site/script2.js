// ===== GLOBAL VARIABLES ====== //
var variableWeight;


// ===== DOM READY ====== //
$(document).ready(function() {

  console.log("ready");

  //menu fixation
  var windowHeight = $(window).height() - 50;
  $(window).on("scroll", function () {
        if ( $(this).scrollTop() > windowHeight ) {
            $("#menu").addClass("top");
        }
        else{
          $("#menu").removeClass("top");
        }
      });

  // variable font control
  $("#variable-font-slider").on("input change", function() {

    variableWeight = $("#variable-font-slider").val();
    $("#variable-font-slider").attr("value", variableWeight);
    $(":root").attr("style", "--variable-weight:" + variableWeight + "");
    console.log(variableWeight);

  });

  //next-page
  $(".next-page").click(function(){
    console.log("click on next-page");
    var parent = $(this).parent().attr('id');
    console.log("wanting to go after "+parent);
  });

  //previous-page
  $(".previous-page").click(function(){
    console.log("click on previous-page");
    var parent = $(this).parent().attr('id');
    console.log("wanting to go before "+parent);
  });

});
// ===== FUNCTIONS ====== //
