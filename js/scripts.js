// --------------------- Back-end Logic -------------------------
var words = ["Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that."];

var beepboop = function(number) {
  // These 4 lines make an empty array and put number from 0 to the number of user input
  var numberArray = [];
  for (var i = 0; i <= number; i++) {
    numberArray[i] = i;
    // console.log(typeof numberArray[i]);
  }

  // These 17 lines make an empty array for word and number. It rewrite number itself but
  // replace it with each wordOne, wordTwo, and wordThree, respectively.

  var wordArray = [];
  for (var i = 0; i < numberArray.length; i++) {
    var singleNumber = numberArray[i].toString();
    console.log("the length of singleNumber is " + singleNumber.length);
    console.log("singleNumber is " + singleNumber);

    var numberChar = [];
    for (var j = 0; j < singleNumber.length; j++) {
      numberChar.push(singleNumber.slice(j, j + 1));
      // console.log("numberChar is " + numberChar);
      if (numberChar.includes("3") === true) {
        wordArray[i] = words[2];
      }
      else if (numberChar.includes("3") != true && numberChar.includes("2") === true) {
        wordArray[i] = words[1];
      }
      else if (numberChar.includes("3") != true && numberChar.includes("2") !== true && numberChar.includes("1") === true) {
        wordArray[i] = words[0];
      }
      else {
        wordArray[i] = i;
      }

    }

    // if (numberArray[i] === 1) {
    //   wordArray[i] = words[0];
    // }
    //
    // else if (numberArray[i] === 2) {
    //   wordArray[i] = words[1];
    // }
    //
    // else if (numberArray[i] === 3) {
    //   wordArray[i] = words[2];
    // }
    // else {
    //   wordArray[i] = i;
    // }

  }

  // This 1 line return the wordArray which is translated from numberArray to fron-end logic.
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
