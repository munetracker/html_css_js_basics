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
        