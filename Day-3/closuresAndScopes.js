// We want to create a function, which returns an array of functions, which return their index in the array.
//  For better understanding, here an example:

// var callbacks = createFunctions(5); // create an array, containing 5 functions

// callbacks[0](); // must return 0
// callbacks[3](); // must return 3

function createFunctions(n) {
    cosnt callbacks = [];
  
    for (let i=0; i<n; i++) {
      callbacks.push(()=>i);
    }
    
    return callbacks;
  }
 var functions= createFunctions(5);
  console.log(functions[1]());
  console.log(functions[2]());
