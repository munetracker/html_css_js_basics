// arithmetic
    // console.log(10+10);
    // console.log(10-10);

    // console.log(10*10);
    // console.log(10**3);

    // // quotient
    // console.log(15/6);
    // // remainder
    // console.log(15%6);

// increment - decrement
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

// string
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
// backtick
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

// dom manipulation
// document.getElementById("demo").innerHTML = word3;
// document.getElementById("demo222").innerHTML = word4;


// string manipulation
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

// console.log(winner_number)


        // console.log("total", total_numbers)
// conditional
let n1 = 4;
// store_variable   condition ? true->assign value      : false->assign value
// let conditional_result = n1 > 10 ? "n1 is greater than 10" : "n1 is less than 10";

let age = 40;
let sex = "male";
let sunday_class = "";
let specific_class = "";
if(age < 12){
sunday_class = "Primary";
// boys
if(sex == "male"){
    specific_class = "boys";
}else{
    specific_class = "girls";
}
// 12-17
}else if (age > 11 && age < 18){
sunday_class = "Youth";
specific_class = sex == "male"? "YM": "YW";
}else{
//  eq rs
sunday_class = "Adult";
specific_class = sex == "male"? "EQ": "RS";
}
// console.log(sunday_class, specific_class);

// let age2 = 12;
// switch (age2) {
//     case 12:
//         console.log("you are a young man/woman")            
//         // break;
//     case 18:
//         console.log("you are on debut")            
//         // break;
//     case 60:
//         console.log("you are retired")            
//         // break;
//     default:
//         console.log("age bracket not mention")  
//         break;
// }