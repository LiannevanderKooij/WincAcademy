const age = 18;

if (age >= 18) {
    console.log('je mag naar binnen');

}else {
    console.log('je bent helaas te jong, je mag niet naar binnen');
}

const isFemale = true;

if (isFemale) {
    console.log('je mag een kaartje voor ladiesnight kopen');
} else {
    console.log('je mag helaas niet naar ladiesnight');
}

const driverStatus = 'b0b';

if (driverStatus == 'bob') {
    console.log('je mag naar huis rijden');

}else {
    console.log('je mag niet zelf naar huis rijden');
}

if (age >= 18 && age <=25) {
    console.log('Je krijgt 50% korting!')
} else {
    console.log('Helaas, je krijgt geen korting.')
}

const name = 'Bram';

if (name === 'Bram' || name ==='Sarah' ){
    console.log('Gefeliciteerd, je krijgt een gratis biertje!')
} else {
    console.log('Je naam is helaas niet Sarah of Bram')
}

const totalAmount = 75;

if (totalAmount >= 25){
    console.log('Je krijgt gratis bitterballen!')
} else if (totalAmount >= 50) {
    console.log('Je krijgt gratis nachos!')
} else if (totalAmount >= 100) {
    console.log('Je krijgt een fles champagne!')
} else {
    console.log('Als je meer uitgeeft, krijg je gratis eten!')
}
