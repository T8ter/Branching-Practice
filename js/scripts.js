



$(document).ready(function() {
  $("form#age").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("input#age-input").val());
    if (age === 18) {
      $("#of-age").show();
      $("#underage").hide();
    } else {
      $("#underage").show();
      $("#of-age").hide();
    };
  });
});
