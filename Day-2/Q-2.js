// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"


var getMiddle=(s)
{
  let length=s.length;
  let middle=length/2;
  if(length%2==0){
    
    return s.substring(middle-1,middle+1);
  }
  return s.substring(middle,middle+1);
  
}

var string="Javascript";
var middleCharacter=getMiddle(string);
console.log("mid character is ",middleCharacter);
