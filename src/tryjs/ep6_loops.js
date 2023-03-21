// https://github.com/munetracker/html_css_js_basics

// basic loops
    // for_loop
        // initial value
        // condition
        for (let i = 0; i < 5; i++) {
            // execute
            // console.log("for ",i);
        }
        // increment/decrement

    // while_loop
        // initial value (optional)
        let ii = 0;
        // condition
        while (ii < 5) {
            // execute
            // console.log("while ",ii);
            // increment/decrement (optional)
            ii++;
        }

    // do_while_loop
        // initial value (optional)
        let iii = 0;
        do{
            // execute
            // console.log("dowhile ",iii);
            // increment/decrement (optional)
            iii++;
            // condition
        }while (iii < 5);

// other loops
    // https://github.com/munetracker/html_css_js_basics/blob/master/src/tryjs/ep6_loops_data.js
    import { cars } from './ep6_loops_data.js';
    // https://github.com/munetracker/html_css_js_basics/blob/master/src/tryjs/ep5_function.js
    import { display_function } from './ep5_function.js';

    // for in
        for (let index in cars) {
            // console.log(index)
            // console.log(cars[index]);
        }

    // for of
        for (let value of cars) {
            // console.log(value)
        }

    // forEach
        cars.forEach( display_function );

    // every
        // cars.every(
        //     (value, index, array_value) => {
        //         console.log(value, index, array_value);
        //         // dont forget to put return true or loop will stop
        //         return true;
        //     }
        // );


        