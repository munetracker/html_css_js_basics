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

    // add in specific index onwards
    // optional remove starting from last index to declared integer value in 2nd parameter
        // splice(start_index, deleteCount, item1[, item2[, ...]]]]
            cars.splice(2, 0, 'Kia', 'Kia', 'Kia');
            // cars.splice(2, 5, 'Kia', 'Kia', 'Kia');

    // remove last index value
        // cars.pop()
        // cars.pop()

    // remove on specific index
        console.log("original remove_index_result", cars);
        // case sensitive
        const remove_index = cars.indexOf("Kia");
        if (remove_index > -1) { // only splice array when item is found
            cars.splice(remove_index, 1); // 2nd parameter means remove one item only
        }
        console.log("remove_index_result", cars);

    // update value from certain index
        // cars[1] = "Toyota";
    
    // display value
        // console.log(cars)
        // console.log(cars[0])
        // console.log(cars[5])
    
    // length of array
        // console.log(cars.length)

    import { fruits, numbers } from './ep6_loops_data.js';
    // other array manipulations
        // sort 
            // for string sort, because js thinks numbers are strings
                // console.log(cars.sort())
                // console.log(numbers, " - original");        
                // console.log(numbers.sort(), " - wrong sort");
                numbers.sort((a, b) => {
                    return a - b;
                });
                // console.log(numbers, " - correct after modified sort above");

        // array to string
            // console.log(numbers.join())

        // concat two arrays, can combined as many as you want
            // console.log(cars.concat(numbers, fruits));


// array references
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript


