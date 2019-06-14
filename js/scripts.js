// --------------------- Back-end Logic -------------------------

var beepboop = function(number) {
    return number;
};



// --------------------- Front-end Logic -------------------------
$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();
    var number = $("input#number").val();
    var result = beepboop(number);
    $("#result").text(result);
  });
});
