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
