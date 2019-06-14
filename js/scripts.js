// --------------------- Back-end Logic -------------------------
var wordOne = "Beep!";
var wordTwo = "Boop!";
var wordThree = "I'm sorry, Dave. I'm afraid I can't do that.";

var beepboop = function(number) {
  var numberArray = [];
  for (var i = 0; i <= number; i++) {
    numberArray[i] = i;
  }

  var wordArray = [];
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === 1) {
      wordArray[i] = wordOne;
    }

    else if (numberArray[i] === 2) {
      wordArray[i] = wordTwo;
    }

    else if (numberArray[i] === 3) {
      wordArray[i] = wordThree;
    }
    else {
      wordArray[i] = i;
    }
  }
  return wordArray;
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
