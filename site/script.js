// ===== GLOBAL VARIABLES ====== //
var variableWeight;
var weight



// ===== DOM READY ====== //
$(document).ready(function() {

  console.log("ready");

$("#variable-font-slider").on("input change", function() {
  variableWeight = $("#variable-font-slider").val();
  $("#variable-font-slider").attr("value", variableWeight);
  weight= $("#variable-font-slider").attr("value");
  console.log("changing value : "+variableWeight+" et :"+weight);
  $(":root").css("--variable-weight", variableWeight.toString() );
});
  // Getter
// variableWeight = $( ".selector" ).slider( "option", "value" );
// console.log(variableWeight);

// Setter
// $( "#variable-font-slider" ).slider( "option", "value", 10 );

});
// ===== FUNCTIONS ====== //
