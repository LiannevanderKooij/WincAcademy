//eerste bericht: Welkom! Wat is je naam? prompt: naam invoeren

let name = prompt('Welkom! Wat is je naam?');

//Na invoeren bericht terug: Hey [naam]
//Na de begroeting bericht: Voer een nummer in van 0 tot 25 om te beginnen met raden...

// let guess = prompt(`Hey ${name}! Voer een nummer in van 0 tot 25 om te beginnen met raden...`)

let min = parseInt(prompt(`Hey ${name}! Wat is het kleinste getal dat je wil raden?`))
let max = parseInt(prompt('Wat is het grootste getal dat je wil raden?'))


// random getal tussen min en max

let number = (Math.ceil(Math.random() * (max - min))) + min; 


console.log(number);


let guess = prompt(`Raad een getal tussen de ${min} en ${max}...`)




// Bij verkeerd nummer: bericht: Dat is niet correct, raad opnieuw

// while(number != guess){
//     guess = prompt('Dat is niet correct, raad opnieuw...');
// }'

for (i = 0; i < 4; i++) {
    if (number != guess) {
        guess = prompt(`Dat is niet correct, raad opnieuw, je mag het nog ${4 - i} keer proberen...`);
    } else {
        alert(`Gefeliciteerd! Je hebt gewonnen! Dag ${name}, tot de volgende keer!`);
        i = 4;

    }
}

if (number != guess) {
    alert('Helaas, je hebt het niet geraden')
}
//Goed geraden: Gefeliciteerd je hebt gewonnen. Dag [naam], tot de volgende keer


//Bonus 1 maximaal 5 keer raden met elke keer bericht hoeveel keer nog over

// Bonus 2 speler kiest zelf range