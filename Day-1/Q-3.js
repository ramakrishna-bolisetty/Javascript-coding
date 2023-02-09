// DESCRIPTION:
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function calculate(operator,value1,value2){

    switch(operator){

        case "+": return value1+value2;
        case "-": return value1-value2;
        case "*": return value1*value2;
        case "/": return value1/value2;
    }

}
var number1=1;
var number2=2;

console.log("value of "+number1+"+"+number2+" is "+calculate("+",number1,number2));
console.log("value of "+number1+"-"+number2+" is "+calculate("-",number1,number2));
console.log("value of "+number1+"*"+number2+" is "+calculate("*",number1,number2));
console.log("value of "+number1+"/"+number2+" is "+calculate("/",number1,number2));
