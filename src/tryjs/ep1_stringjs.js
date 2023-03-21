let value = "asdadasd"
let value2 = "12312321"
console.log(value+value2)
console.log(`${value}${value2}`)
console.log(value.concat(value2));

// string declarations
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