// --------------------- Back-end Logic ----------------------------------------
var words = ["Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that!"];

// --------------------- Beep-Boop application ---------------------------------
var beepboop = function(number, name) {
  var numberArray = [];
  for (var i = 0; i <= number; i++) {
    numberArray[i] = i;
  }
  // From 12 to 43 lines of code make an empty array for word and number. It rewrite number itself but
  // replace it with each wordOne, wordTwo, and wordThree, respectively. We start to make empty array in
  // order to store each numbers and words after manipulation.
  var wordArray = [];
  for (var i = 0; i < numberArray.length; i++) {
    var singleNumber = numberArray[i].toString();
    var numberChar = [];
    for (var j = 0; j < singleNumber.length; j++) {
      numberChar.push(singleNumber.slice(j, j + 1));
      // console.log("numberChar is " + numberChar);
      if (numberArray[i] % 3 === 0 && numberArray[i] != 0) {
        wordArray[i] = words[2].toString().replace(/Dave/, name);
      }
      else if (numberChar.includes("3") === true) {
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
  }
  // This 1 line return the wordArray which is translated from numberArray to fron-end logic.
  return wordArray;
};

// --------------------- Reverse Beep-Boop application -------------------------
var reverse = function() {

}
// ---------------------------- Front-end Logic --------------------------------
$(document).ready(function() {
  // This is for the beep-boop action
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();
    var number = $("input#number").val();
    var name = $("input#name").val();
    var result = beepboop(number, name);
    $("#result").text(result);
  });
  // This is for the reverse beep-boop action
  // $("form#reverse-string").submit(function(event) {
  //   event.preventDefault();
  //   var string = $("input#string").val();
  //   var resultThree = reverse(string);
  //   $("#resultTwo").text(resultThree);
  // });
});
