// DESCRIPTION:
// We want to create a function that will add numbers together when called in succession.

// add(1)(2); // == 3
// We also want to be able to continue to add numbers to our chain.

// add(1)(2)(3); // == 6
// add(1)(2)(3)(4); //  == 10
// add(1)(2)(3)(4)(5); // == 15
// var addTwo = add(2);
// addTwo; // == 2
// addTwo + 5; // == 7
// addTwo(3); // == 5
// addTwo(3)(5); // == 10

function add(n) {
    // Let the curryig begin!
  
    function resultFn(y) {
        if(y!=undefined)
        return add(n + y);
        // else return n;
    }
    resultFn.valueOf = function () {
        return n;
    };
    return resultFn;
}

console.log(add(add(1)(2)(3))(3).valueOf());

