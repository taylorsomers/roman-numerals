// Business Logic

function convertNumerals(input) {
  if (Number.isInteger(input)) {
    return "true";
  } else {
    return "false";
  }
}

// End Business Logic

// UI Logic

$(document).ready(function() {
  $("button#submit").click(function() {
  (event).preventDefault();
  const toConvert = parseInt($("#user-input").val());
  const output = convertNumerals(toConvert);

  $("#output").text(output);
  });
});

// End UI Logic