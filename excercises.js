/**
 *
 */
// ANSWERED
// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------
// - Someone can go into console, input two numbers max(9, 8), and will get the largest back
// - if/ then/ else

function max(numb1, numb2){
  
  if (numb1 > numb2) {
    return numb1;

  } else if (numb2 > numb1) {
    return numb2;

  } else {
    return "They Are The Same";
  }
}


// ANSWERED
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them. (Accept three param and return the largest)
// ---------------------
// - Someone can go into console, input three numbers max(9, 8, 6), and will get the largest back
// - if/ then/ else


function maxOfThree(numb1, numb2, numb3){
     if (numb1 > numb2 && numb1 > numb3) {
    return numb1;

  } else if (numb2 > numb1 && numb2 > numb3) {
    return numb2;

  } else if (numb3 > numb1 && numb3 > numb2) {
    return numb3;    

  } else {
    return "They Are All The Same";
  }
}

// ANSWERED
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
/* need to give it something to compare to - an array of vowels
                  
                  var vowels = "aeiou".split("");

                  hasVowel = false;

                  vowels.forEach(function(currentVowel) {
                    if (char === currentVowel) {
                      hasVowel = true;
                    }
                    return hasVowel;
                  });   

                  /*   WHAT THE HECK IS CHAR???  Returns char undefined, I know char needs to be the value I type, 
                  but I don't know how to get it in here.

Use a switch statement instead - this seems like an easier route when you are only looking for
a small number of matches */

function isVowel(myChar) {

  switch(myChar) {
      case "a":
          return true;
          break;
      case "e":
          return true;
          break;
      case "i":
          return true;
          break;
      case "o":
          return true;
      case "u":
          return true;
          break;
      default:
          return "This is not a Vowel";
          break;
  }
};

// ANSWERED
// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------


function sumAll(myArray) {

  var sum = 0;
  var index;

  for (index = 0; index < myArray.length; index++) {
    
    sum += myArray[index];
  }
  return sum;
};

ex. sumAll([1,2,3,4]) = 10



function multAll(myArray) {

  var mult = 1; //this would not work with 0 so I tried 1. Why is it 1 !?
  var index;

  for (index = 0; index < myArray.length; index++) {
    
    mult *= myArray[index];
  }
  return mult;
};

ex. multAll([3,5]) = 15



// ANSWERED
// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------


function reverse(str){
    return str.split("").reverse().join("");
}


// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------
///   have a string, we want to see a frequency listing
///   we want to transform it from  a string object into an array object "str".split(" ")

str;

[convert to array of chars]
[chars]
[empty map object - maps chars to frequency]
[loop over chars]
  [get current char]
  [does map object have property for the current char]
    [true]
      [increment that property]
    [false]
      [add that property]
      [give it the value of 1]

      ends with the answer

     {
      "a" :7,
      "b" :2,
    } 





function charFreq(string){
    //...
}
