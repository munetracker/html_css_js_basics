
// variables
var global_changeable_variable = 5;
var global_changeable_variable_decimal = 5.3234;
var global_changeable_variable_boolean = false;
var global_changeable_variable_string = "this is a string";
let local_changeable_variable = 3;
const constant_variable = 10;

// boolean - false, true, 0, 1
// int/float/long - numbers
// string/char - words, characters

global_changeable_variable_decimal = "i change it";
// constant_variable = "i change it";

// console.log(global_changeable_variable);
// console.log(global_changeable_variable_decimal);
// console.log(global_changeable_variable_boolean);
// console.log(global_changeable_variable_string);
// console.log(local_changeable_variable);
// console.log(constant_variable);

// arithmetic
// console.log(10+10);
// console.log(10-10);

// console.log(10*10);
// console.log(10**3);

// // quotient
// console.log(15/6);
// // remainder
// console.log(15%6);

let a = 10;
let b = 5;
// ++a;
// a--;

// a += b;
a = a + b;
// console.log(a);

// console.log("this is a", a);
// console.log(10++);
// console.log(++10);
// console.log(10--);
// console.log(--10);

// let word1 = "first word";
// // let word2 = "second word";
// let number = 10;
// let this_is_bool = true;

// console.log(word1+" "+number);
// console.log(number)
// console.log(this_is_bool)


let word1 = "in double quote";
let word2 = 'single';
let number = 11231;
let word3 = `
    ${word1} multiple ${number}
    ${word2} line
`;
let word4 = ""+number+
    word1 + " multiple " + 
    word2 + " line ";

// // console.log(word1);
// // console.log(word2);
// console.log(word3);
// console.log(word4);
document.getElementById("demo").innerHTML = word3;
document.getElementById("demo222").innerHTML = word4;



// let firstnumber = 10;
// let secondnumber = 24;
// let secondnumber = 10;
// let secondnumber = "10";

// !=
// not equal

// console.log( firstnumber == secondnumber );
// console.log( firstnumber === secondnumber );
// console.log( firstnumber != secondnumber );
// console.log( firstnumber !== secondnumber );
// console.log( firstnumber > secondnumber );
// console.log( firstnumber < secondnumber );
// console.log( firstnumber >= secondnumber );
// console.log( firstnumber <= secondnumber );

let firstnumber = 1;
let secondnumber = 10;

// let winner_number = firstnumber > secondnumber ? "firstnumber is winner" : "secondnunber";
let winner_number = "";
if( firstnumber > secondnumber ){
    winner_number = "firstnumber is winner";
}else{
    winner_number = "secondnunber";
}

console.log(winner_number)







