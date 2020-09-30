// 1. Radio selection changes price displayed (master)
//      Move switch
//      Change radio button selection
//      Change prices shown


// 2. Radio selection can be changed by:
//      Clicking toggle switch
//      Hitting enter on toggle switch
//      Changing radio selection with keyboard (??)

// Q. Should toggle be a radio group, checkbox, or button semantically?


$('input[type=radio][name=billing]').change(function() {
  changeBilling();
});

$(".switch").click(function() {
  if ($("#annually").prop("checked")) {
    // Change to monthly
    $("#annually").prop("checked", false);
    $("#monthly").prop("checked", true);
    changeBilling();
  } else {
    // Change to yearly
    $("#annually").prop("checked", true);
    $("#monthly").prop("checked", false);
    changeBilling();
  }
    // $("#monthly").prop("checked", true);
  // } else {
    // $("#annually").prop("checked", true);
  // }

})


function changeBilling() {
  $(".monthly").toggleClass("hide");
  $(".annually").toggleClass("hide");
  $(".switch").toggleClass("moveit");

  if ( $(this).attr('value') == 'annually') {

  } else if ( $(this).attr('value') == 'monthly') {

  }
}
