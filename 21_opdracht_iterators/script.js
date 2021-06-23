const colors = ['yellow', 'blue', 'red', 'orange'];

let num = 0;

while (num < colors.length){
    console.log(colors[num]);
    num++;
}

for (i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

colors.forEach(color => console.log(color));

/*Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
for loop: 3 regels, while loop: 4 regels.
Hoeveel regels neemt mijn forEach method in beslag?
1 regel.
Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
Minder foutgevoelig, minder kans op endless loops. Makkelijker leesbaar.
Kun je een array method gebruiken op een object? Het antwoord is nee.
Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?
Zie onder, ja. 
*/

const person = {
    name: 'Chloe',
    age: 27,
    married: true,
    kids: 2,
    hobbies: ['piano', 'dancing']
}

for (let feature in person){
    console.log(`${feature}: ${person[feature]}`)
}