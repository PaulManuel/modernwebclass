function displayName(name) {
    console.log(`Hello, ${name}!`);
}
displayName('Paul');

function f2c(temp){return (temp -32) * 5/9};
function c2f(temp){return (temp * 9/5) + 32};

let tempF = 212;
let tempC = 60;
console.log(`${tempF}F equals ${f2c(tempF)}C`) ;
console.log(`${tempC}C equals ${c2f(tempC)}F`) ;