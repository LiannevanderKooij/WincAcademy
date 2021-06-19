const biggerThanHundred = function(number){
    if (number > 100){
        return true;
    };
    return false;
};

const result = biggerThanHundred(101);
console.log(result);

const clubBouncer = function(age, maxNumber, currentNumber){
    if (age >= 18 && currentNumber < maxNumber) {
        return 'come in'
    } else if (age < 18){
        return 'this is a club for adults'
    } 
    return `it's too busy now, come back later`
}

const answerBrenda = clubBouncer(19, 20, 20);
console.log(answerBrenda);

const calcAverage = function(num1,num2,num3,num4,num5){
    const average = Math.round((num1+num2+num3+num4+num5)/5);
    return average;
}

outcome = calcAverage(1,2,3,4,5);
console.log(outcome);