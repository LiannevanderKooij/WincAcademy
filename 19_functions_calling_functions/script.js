const isAdult = age => {
    if(age >= 18) {
        return true;
    };
    return false;
};

const greeting = age => {
    if(isAdult(age)){
        return 'Hello there'
    };
    return 'Hey kiddo'
};

console.log(greeting(17));

const calcVAT = (basePrice,VATPercentage) => {
    let VAT = basePrice * VATPercentage * 0.01;
    return VAT;
};

const calcFullPrice = (basePrice, VATPercentage) => {
    let VAT = calcVAT(basePrice, VATPercentage);
    return VAT+basePrice
}

console.log(calcFullPrice(2,9));

const calcBasePrice = (VATPercentage,fullPrice) => {
    let basePrice = fullPrice/(1+(VATPercentage/100))
    return basePrice;
};

const basePriceAndVAT = (VATPercentage, fullPrice) => {
    let basePrice = calcBasePrice(VATPercentage, fullPrice)
    return [basePrice, fullPrice-basePrice]
};

console.log(basePriceAndVAT(9,1.09));