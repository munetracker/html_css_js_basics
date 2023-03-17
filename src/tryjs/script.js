// 58. array
// set of values
// const cars = [];
const cars = new Array();
// adding to set of array/s
cars.push("BMW");
cars.push("Honda");
cars.push("Ferari");
cars.push("Ferari111");
cars.push("Izuzu");
cars.push("Mazda");

// insert to index zero
    // cars.unshift("Suzuki");

// add in specific
    // splice(start_index, deleteCount, item1[, item2[, ...]]]]
    // cars.splice(2, 0, 'Kia', 'UM', 'tao');

// 
    // cars.pop()
    // cars.pop()
// cars[1] = "Toyota";
// console.log(cars)
// console.log(cars[0])
// console.log(cars.length)
// console.log(cars.sort())

const array_numbers = [4, 100, -37, 50, 3, 1];
// array_numbers.sort((a, b) => {
//     return a - b;
// });
// cars.sort((a, b) => {
//     return a - b;
// });
// console.log(array_numbers)
// console.log(cars)
// console.log(cars.join())
// console.log(cars[1])

// console.log(cars.concat(array_numbers));

const index = cars.indexOf(5);
if (index > -1) { // only splice array when item is found
    cars.splice(index, 1); // 2nd parameter means remove one item only
}
console.log("result", cars)



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript




// 59. set
// set of unique values
const months = new Set();
months.add("Jan");
months.add("Feb");
months.add("Mar");
months.add("Feb");
// console.log(months)



// 60. map
// 61. garbage collection
// 62. weakmap











