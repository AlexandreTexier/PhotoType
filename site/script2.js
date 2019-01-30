// ===== GLOBAL VARIABLES ====== //
var variableWeight;
var position = "type-A";


// ===== DOM READY ====== //
$(document).ready(function() {

  console.log("ready");

  //next-page
  $(".next-page").click(function() {
    console.log("click on next-page");

    switch (position) {
      case "type-A":
        // code block
        console.log("next, from A to B");
        $("#specimen").removeClass("posA");
        $("#specimen").addClass("posB");
        position = "type-B";
        break;
      case "type-B":
        // code block
        console.log("next, from B to C");
        $("#specimen").removeClass("posB");
        $("#specimen").addClass("posC");
        position = "type-C";
        break;
      case "type-C":
        // code block
        console.log("already at max");
        break;
      default:
        // code block
    }

  });

  // previous-page
  $(".previous-page").click(function() {
    console.log("click on previous-page");

    switch (position) {
      case "type-C":
        // code block
        console.log("previous, from C to B");
        $("#specimen").removeClass("posC");
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
