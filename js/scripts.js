// --------------------- Back-end Logic -------------------------

// We define "words" array for each message to replace 1, 2, 3 numbers from the user input, respectively.
// The index[0] of words array is for number 1 and index[1] is for number 3 and index[2] is for number 3.
var words = ["Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that!"];
// The beepboop function is core of back-end logic. This function communicates with the front-end logic.
// with the line of "var result = beepboop(number)".
var beepboop = function(number) {
  // These 4 lines make an empty array and put a series of number from 0 to the number of user input
  var numberArray = [];
  for (var i = 0; i <= number; i++) {
    numberArray[i] = i;
    // console.log(typeof numberArray[i]); --> The type of each element of numberArray is "number".
  }
  // From 12 to 43 lines of code make an empty array for word and number. It rewrite number itself but
  // replace it with each wordOne, wordTwo, and wordThree, respectively. We start to make empty array in
  // order to store each numbers and words after manipulation.
  var wordArray = [];
  for (var i = 0; i < numberArray.length; i++) {
    var singleNumber = numberArray[i].toString();
    // console.log("the length of singleNumber is " + singleNumber.length);
    // console.log("singleNumber is " + singleNumber);
    var numberChar = [];
    for (var j = 0; j < singleNumber.length; j++) {
      numberChar.push(singleNumber.slice(j, j + 1));
      // console.log("numberChar is " + numberChar);
      if (numberChar.includes("3") === true) {
        wordArray[i] = words[2] + "...";
      }
      else if (numberChar.includes("3") != true && numberChar.includes("2") === true) {
        wordArray[i] = words[1] + "~";
      }
      else if (numberChar.includes("3") != true && numberChar.includes("2") !== true && numberChar.includes("1") === true) {
        wordArray[i] = words[0] + "~";
      }
      else {
        wordArray[i] = i + "...";
      }
    }
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
