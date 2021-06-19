function calculate1(num1,num2){
    let square1 = num1*num1;
    let square2 = num2*num2;
    let sum = square1+square2;
    let sumsquare = sum*sum;
    return sumsquare;
};


const calculate2 = function(num1,num2){
    let square1 = num1*num1;
    let square2 = num2*num2;
    let sum = square1+square2;
    let sumsquare = sum*sum;
    return sumsquare;
};

const calculate3 = (num1,num2) => {
    let square1 = num1*num1;
    let square2 = num2*num2;
    let sum = square1+square2;
    let sumsquare = sum*sum;
    return sumsquare;
};

console.log(calculate1(2,3))
console.log(calculate2(2,3))
console.log(calculate3(2,3))
