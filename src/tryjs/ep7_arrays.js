// https://github.com/munetracker/html_css_js_basics

// array
    // set of values
        // const cars = [];
        const cars = new Array();
    
    // adding to set of array/s
        cars.push("BMW");
        cars.push("Honda");
        cars.push("Ferari");
        cars.push("Izuzu");
        cars.push("Ferari");
        cars.push("Ferari");
        cars.push("Mazda");

    // insert to index zero
        cars.unshift("Suzuki");

    // remove last index value
        // cars.pop()
        // cars.pop()

    // add in specific index onwards
    // optional remove starting from last index to declared integer value in 2nd parameter
        // splice(start_index, deleteCount, item1[, item2[, ...]]]]
            cars.splice(2, 0, 'Kia', 'Kia', 'Kia');
            // cars.splice(2, 5, 'Kia', 'Kia', 'Kia');

    // remove on specific index
        // console.log("original remove_index_result", cars);
        // case sensitive
        const remove_index = cars.indexOf("Kia");
        if (remove_index > -1) { // only splice array when item is found
            cars.splice(remove_index, 1); // 2nd parameter means remove one item only
        }
        // console.log("remove_index_result", cars);

    // update value from certain index
        // cars[1] = "Toyota";
    
    // basic array
        // display value
            // console.log(cars)
            // console.log(cars[0])
            // console.log(cars[5])
        
        // length of array
            // console.log(cars.length)
        
        // check value is array
            export const carsIsArray = Array.isArray(cars);
            // console.log(Array.isArray(cars));

        // constructor
            // console.log(cars)
            // let text = cars.constructor;
            // console.log(text)

    import { fruits, numbers, things } from './ep6_loops_data.js'; // https://github.com/munetracker/html_css_js_basics/blob/master/src/tryjs/ep6_loops_data.js
    // other array manipulations
        // sort 
            // for string sort, because js thinks numbers are strings
                // console.log(cars)
                // console.log(cars.sort())
                // console.log(numbers, " - original");        
                // console.log(numbers.sort(), " - wrong sort");
                // algorithm
                // numbers.sort((a, b) => {
                //     return a - b;
                // });
                // console.log(numbers, " - correct after modified sort above");

        // array to string
            // console.log(numbers.join())

        // concat two arrays, can combined as many as you want
            // console.log(cars.concat(numbers, fruits));

        // filter - many returns na value
            export const result_filter = things.filter((data)=>{
                return data.size === "big";
            });
            // console.log("filter", result_filter)

        // find
            const result_find = things.find((data)=>{
                return data.size === "big";
            });
            // console.log("find", result_find)

        // findIndex
            export const result_findindex = things.findIndex((data)=>{
                return data.size === "big";
            });
            console.log("findindex", result_findindex)
 
        // reverse
            // console.log(cars.reverse())


        // map - array mapping
            // console.log(numbers)
            // const newArr = numbers.map(myFunction)
            // function myFunction(num) {
            //     return num * 10;
            // }
            // console.log(newArr)

        //  fill the array (value, start_index, number_of_fills)
            // console.log(fruits)
            // fruits.fill("Kiwi");
            // fruits.fill("Kiwi", 1);
            // fruits.fill("Kiwi", 0, 1);
            // console.log(fruits)

        // copyWithin (targetIndexToPaste, startIndexToCopy, endIndexToCopy)
            // console.log(fruits)
            // fruits.copyWithin(3);
            // fruits.copyWithin(3, 1);
            // fruits.copyWithin(2, 0, 3);
            // console.log(fruits)

        

// array references
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
    // https://www.w3schools.com/jsref/jsref_obj_array.asp

