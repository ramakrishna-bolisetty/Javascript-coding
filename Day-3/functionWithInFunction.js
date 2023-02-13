// Given an input n, write a function always that returns a function which returns n. 

// var three = always(3);
// three(); // returns 3

var three=function always (n) {
    var fun=()=>n;
    return fun();
  }

  console.log(three(3));
  