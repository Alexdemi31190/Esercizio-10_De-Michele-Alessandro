// Traccia uno

let num1 = 22;
let num2 = 48;
let num3 = 68;
let num4 = 9;
let num5 = 11;
let somma = num1 + num2 + num3 + num4 + num5;
let media = somma / 5;
console.log('la somma dei numeri equivale a ', somma , 'la media equivale a' , media );

//Traccia due 

let annoCorrente = 2024;
let annoNascita = 1990 ;
let age = annoCorrente - annoNascita;
let cento100 = 100 - age ;
console.log('year corrente equivale a ',annoCorrente,' year di nascita equivale a',annoNascita ,'anni che mancano ai cento equivale a', cento100 );

//Traccia tre

let numero1 = parseInt(prompt("Scegli il primo valore"));
let numero2 = parseInt(prompt("Scegli il secondo valore"));
let somm = (numero1 + numero2);
let sott = (numero1 - numero2);
let molt = (numero1 * numero2);
let pot = (numero1 / numero2);
console.log('Con i numeri da te scelti, i risultati delle varie operazioni sono: somma=',somm,'sottrazione=',sott ,'moltiplicazione=',molt ,'potenza=',pot );


//Traccia quattro

let array_1 = [
    ['un', 'per', 'incatenarli.'],
    ['Anello', 'trovarli,'],
    ['ghermirli', 'e'],
    ['gondor', 'mark'],
];

let array_2 = [
    [['trovarli,']],
    ['tu,', 'sciocchi'],
    ['tu,', 'sciocchi', ['padron', 'Sauron']],
    ['nel', ['fuggite', 'gandalf']],
    [['domarli,', 'passare'], 'buio']
];

console.log(array_1[0][0] + ' ' +  array_1[1][0] + ' ' +  array_1[0][1] + ' ' +  array_2[4][0][0] + ' ' + array_1[0][0]+ ' ' + array_1[1][0]+ ' ' + array_1[0][1]+ ' ' + array_2[0][0]+ ' ' + array_1[0][0] + array_1[1][0] + ' ' + array_1[0][1]+ ' ' + array_1[2][0] + ' ' + array_1[2][1] + ' ' + array_2[3][0] + ' ' +  array_2[4][1]) + ' ' + array_1[0][2];






// Un Anello per domarli
// un Anello per trovarli, 
// un Anello per ghermirli e 
// nel buio incatenarli










