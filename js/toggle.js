// Change if you CLICK the toggle
$(".switch").click(function() {
  changeVisual();
  changeRadio();
})

// Change if you use the actual RADIO buttons
$('input[type=radio][name=billing]').change(function() {
  changeVisual();
});

// Change radio button state
// (Included this to try and maintain accessibility of original radio group
// but unsure how successful OR relevant it is in this case...)
function changeRadio() {
  if ($("#annually").prop("checked")) {
    $("#annually").prop("checked", false);
    $("#monthly").prop("checked", true);
  } else {
    $("#annually").prop("checked", true);
    $("#monthly").prop("checked", false);
  }
}

// Change visible prices and toggle state
function changeVisual() {
  $(".monthly").toggleClass("hide");
  $(".annually").toggleClass("hide");
  $(".switch").toggleClass("moveit");
}

// Change on keypress when toggle is focussed
function keypress(event) {
  if (event.keyCode == '13' || // Enter
      event.keyCode == '32' || // Space
      event.keyCode == '37' || // Left
      event.keyCode == '38' || // Up
      event.keyCode == '39' || // Right
      event.keyCode == '40' ) { // Down
    changeVisual();
    changeRadio();
    event.preventDefault();
  }
}
