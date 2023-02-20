/*We want to create a function, which returns an array of functions, which return their index in the array.
 For better understanding, here an example:

var callbacks = createFunctions(5); // create an array, containing 5 functions

callbacks[0](); // must return 0
callbacks[3](); // must return 3
*/

const createFunctions = (n) => {
  const listOfFunctions = [];
  let index = 0;
  while (index < n) {
    let value = index;
    listOfFunctions.push(() => value);
    index += 1;
  }
  return listOfFunctions;
}
const getfunctions = createFunctions(5);
console.log(getfunctions[1]());  //1
console.log(getfunctions[2]());  //2
