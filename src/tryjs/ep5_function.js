// https://github.com/munetracker/html_css_js_basics

function old_fashion_function (value, index, array_value) {
    console.log(value, index, array_value);
}

const variable_function = (value, index, array_value) => {
    console.log(value, index, array_value);
}

// export but can use old fashion coding style function
// function display_function (value, index, array_value) {
export const display_function = (value, index, array_value) => {
    console.log(value);
    console.log(index);
    console.log(array_value);
}

export const reverseInteger = (integer_number) => {
    let reversed = 0;
    while (integer_number !== 0){
        reversed = reversed * 10 + (integer_number % 10);
        integer_number = Math.trunc(integer_number/10)
    }
    return reversed;
}
console.log(reverseInteger(912123));


