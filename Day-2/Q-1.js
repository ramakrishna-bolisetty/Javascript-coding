// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3


function evaluate(operator, value1, value2) {
    switch (operator) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return Math.floor(value1 / value2);
    }
}
function zero() {
    let size = arguments.length;
    if (size == 0) return 0;
    let operator = arguments[0][0];
    let value1 = 0;
    let value2 = arguments[0][1];

    let answer = evaluate(operator, value1, value2);
    return answer;


}
function one() {
    let size = arguments.length;
    if (size == 0) return 1;
    let operator = arguments[0][0];

    let value1 = 1;
    let value2 = arguments[0][1];

    let answer = evaluate(operator, value1, value2);
    return answer;
}
function two() {
    let size = arguments.length;
    if (size == 0) return 2;
    let operator = arguments[0][0];

    let value1 = 2;
    let value2 = arguments[0][1];

    let answer = evaluate(operator, value1, value2);
    return answer;
}
function three() {
    let size = arguments.length;
    if (size == 0) return 3;
    let operator = arguments[0][0];

    let value1 = 3;
    let value2 = arguments[0][1];

    let answer = evaluate(operator, value1, value2);
    return answer;
}
function four() {
    let size = arguments.length;
    if (size == 0) return 4;
    let operator = arguments[0][0];

    let value1 = 4;
    let value2 = arguments[0][1];

    let answer = evaluate(operator, value1, value2);
    return answer;
}
function five() {
    let size = arguments.length;
    if (size == 0) return 5;
    let operator = arguments[0][0];

    let value1 = 5;
    let value2 = arguments[0][1];

    let answer = evaluate(operator, value1, value2);
    return answer;
}
function six() {
    let size = arguments.length;
    if (size == 0) return 6;
    let operator = arguments[0][0];

    let value1 = 6;
    let value2 = arguments[0][1];

    let answer = evaluate(operator, value1, value2);
    return answer;
}
function seven() {
    let size = arguments.length;
    if (size == 0) return 7;
    let operator = arguments[0][0];
    let value1 = 7;
    let value2 = arguments[0][1];

    let answer = evaluate(operator, value1, value2);
    return answer;
}
function eight() {
    let size = arguments.length;
    if (size == 0) return 8;
    let operator = arguments[0][0];
    let value = arguments[0][1];
    let value1 = 8;
    let value2 = arguments[0][1];

    let answer = evaluate(operator, value1, value2);
    return answer;
}
function nine() {
    let size = arguments.length;
    if (size == 0) return 9;
    let operator = arguments[0][0];

    let value1 = 9;
    let value2 = arguments[0][1];

    let answer = evaluate(operator, value1, value2);
    return answer;
}

function plus() { return ["+", arguments[0]]; }
function minus() { return ["-", arguments[0]]; }
function times() { return ["*", arguments[0]]; }
function dividedBy() { return ["/", arguments[0]]; }

console.log(seven(times(five())));
