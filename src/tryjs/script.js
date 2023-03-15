
// variables
    var global_changeable_variable = 5;
    var global_changeable_variable_decimal = 5.3234;
    var global_changeable_variable_boolean = false;
    var global_changeable_variable_string = "this is a string";
    let local_changeable_variable = 3;
    const constant_variable = 10;

// datatypes
// https://www.facebook.com/Ghilasigh0554/photos/a.117604104558617/145225955129765/
    // boolean - false, true, 0, 1
    // int/float/long - numbers
    // string/char - words, characters
    let myName = null;
    // array
    // objects
    // console.log("consoledata",myName);
    // use Typeof

// manipulate 
    global_changeable_variable_decimal = "i change it";
    // constant_variable = "i change it";

// output
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

// arrays
    const cars = [
        "Saab", 
        "Volvo", 
        "BMW"
    ];

// objects
    const thing = {
        name:"apple",
        color:"red",
        type:"fruit",
        size:"small",
        edible:true
    }

// combined arrays, objects and datatypes
    const things = [
        {
            name:"apple",
            color:"red",
            type:"fruit",
            size:"small",
            weight:5,
            edible:true
        },
        {
            name:"squash",
            color:"yellowgreen",
            type:"vegetable",
            size:"medium",
            weight:10,
            edible:true
        },
        {
            name:"car",
            color:"anycolor",
            type:"solid",
            size:"big",
            weight:500,
            edible:false
        },
        {
            name:"helicopter",
            color:"anycolor",
            type:"solid",
            size:"big",
            weight:500,
            edible:false
        }
        ,
        {
            name:"house",
            color:"anycolor",
            type:"solid",
            size:"big",
            weight:500,
            edible:false
        }
    ]

// datatypes
    // console.log(things);

    // console.log(typeof 0)
    // console.log(typeof "aasdasd")
    // console.log(typeof things)

// loops
    // forloop
        // initial value
        // condition
        for (let i = 0; i < 5; i++) {
            // execute
            // console.log("for ",i);
        }
        // increment/decrement

    // while loop
        // initial value (optional)
        let ii = 0;
        // condition
        while (ii < 5) {
            // execute
            // console.log("while ",ii);
            // increment/decrement (optional)
            ii++;
        }

    // do while loop
        // initial value (optional)
        let iii = 0;
        do{
            // execute
            // console.log("dowhile ",iii);
            // increment/decrement (optional)
            iii++;
            // condition
        }while (iii < 5);


        // console.log(things);
        // console.log(things[8]);

    // for in
        for (index in things) {
            // if(index > 0 && index < 4){
            //     console.log(things[index]);
            // }
            if(things[index].edible){
                // console.log(things[index]);
                // console.log(things[index].name);
            }
        }


        const numbers = [45, 4, 9, 16, 25];
        // console.log("numbers_legth", numbers.length)

        let total_numbers = 0
        // declare
        // condition
        // increment
        for (let index = 0; index < numbers.length; index++) {
            // console.log(`index ${index}`, numbers[index]);
        }
        // console.log("-------")
        numbers.forEach(
            (n) => {
                // console.log( n);
            }
        );
        // console.log("-------")
        numbers.every(
            (nn, index333)=>{
                // console.log(`index ${index333}`, nn);
                return true;
            }
        );

// functions
        // (v) => {
        //     if (v > 3) {
        //       return false;
        //     }
          
        //     console.log(v);
        //     // Make sure you return true. If you don't return a value, `every()` will stop.
        //     return true;
        // }

        // numbers.forEach(
        //     (n) => {
        //         total_numbers += n;
        //         // 0+45
        //         // 45+4
        //         // 49+9
        //         // 58+16
        //         // 74+25
        //         // 99
        //     }
        // );
        // numbers.forEach(
        //     function(n){
        //         total_numbers += n;
        //     }
        // );

        const myCreatedFunc = (value) => {
            total_numbers += value;
        }
        // function myCreatedFunc(value) {
        //     total_numbers += value;
        // }

        // (value_sa_current_index, current_index, anything )=>{}
        // (value_sa_current_index) => {}
        // (value_sa_current_index, current_index) => {}

        numbers.forEach(myCreatedFunc);

    names = ["hanna", "jed", "fred"]
    // for of
        for (let x of names) {
            // console.log(x)
        }
        // console.log("---------------");
        for (let index444 = 0; index444 < names.length; index444++) {
            // console.log(names[index444]);
        }
        // console.log("---------------");
        names.forEach((name_value)=>{
            // console.log(name_value)
        })



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

    const things222 = [
        {
            name:"apple",
            color:"red",
            type:"fruit",
            size:"small",
            weight:5,
            edible:true
        },
        {
            name:"squash",
            color:"yellowgreen",
            type:"vegetable",
            size:"medium",
            weight:10,
            edible:true
        },
        {
            name:"car",
            color:"anycolor",
            type:"solid",
            size:"big",
            weight:500,
            edible:false
        },
        {
            name:"helicopter",
            color:"anycolor",
            type:"solid",
            size:"big",
            weight:500,
            edible:false
        },
        {
            name:"house",
            color:"anycolor",
            type:"solid",
            size:"big",
            weight:500,
            edible:false
        }
    ]
    for (let i = 0; i < things222.length; i++) {
        if (things222[i].type === "vegetable") { break; }
        console.log(things222[i]);
        // text += "The number is " + i + "<br>";
    }
    
 