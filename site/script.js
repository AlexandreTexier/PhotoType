// ===== GLOBAL VARIABLES ====== //
var variableWeight;
var position = "type-Pres"


// ===== DOM READY ====== //
$(document).ready(function() {

  console.log("ready");

  //menu fixation
  var windowHeight = $(window).height() - 50;
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > windowHeight) {
      $("#menu").addClass("top");
    } else {
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
  $(".next-page").click(function() {
    console.log("click on next-page");

    switch (position) {
      case "type-A":
        console.log("next, from A to B");
        $("#specimen").removeClass("posA");
        $("#specimen").addClass("posB");
        position = "type-B";
        break;
      case "type-B":
        console.log("next, from B to Pres");
        $("#specimen").removeClass("posB");
        $("#specimen").addClass("posPres");
        position = "type-Pres";
        break;
      case "type-Pres":
        console.log("next, from Pres to C");
        $("#specimen").removeClass("posPres");
        $("#specimen").addClass("posC");
        position = "type-C";
        break;
      case "type-C":
        console.log("next, from C to D");
        $("#specimen").removeClass("posC");
        $("#specimen").addClass("posD");
        position = "type-D";
        break;
      case "type-D":
        console.log("already at max");
        break;
        // default:
        // code block
    }

  });

  //previous-page
  $(".previous-page").click(function() {
    console.log("click on previous-page");

    switch (position) {
      case "type-D":
        // code block
        console.log("previous, from D to C");
        $("#specimen").removeClass("posD");
        $("#specimen").addClass("posC");
        position = "type-C";
        break;
      case "type-C":
        // code block
        console.log("previous, from C to Pres");
        $("#specimen").removeClass("posC");
        $("#specimen").addClass("posPres");
        position = "type-Pres";
        break;
      case "type-Pres":
        // code block
        console.log("previous, from Pres to B");
        $("#specimen").removeClass("posPres");
        $("#specimen").addClass("posB");
        position = "type-B";
        break;
      case "type-B":
        // code block
        console.log("previous, from B to A");
        $("#specimen").removeClass("posB");
        $("#specimen").addClass("posA");
        position = "type-A";
        break;
      case "type-A":
        // code block
        console.log("already at min");
        break;
      default:
        // code block
    }

  });

});
// ===== FUNCTIONS ====== //
