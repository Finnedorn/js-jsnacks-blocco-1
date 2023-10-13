/*
1. TuttiFrutti
Cartella array-lista
Descrizione:
Abbiamo un frigorifero pieno di frutta:
'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
Fasi
1. creare l'array con la frutta del frigorifero
2. aggiungere la pesca all'array della frutta
3. verificare se nell'array di frutta c'è il cocomero:
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
Suggerimenti/Indicazioni:
Sì, lo sappiamo che esiste la funzione includes() ma non non la vogliamo utilizzare per cercare nel frigorifero.
*/

//1. creare l'array con la frutta del frigorifero
const fridge = [
    'banana',
    'mela',
    'pera', 
    'ciliegia',
    'arancia',
    'mandarino',
    'cocomero',
    'limone',
    'fragola'
];
//2. aggiungere la pesca all'array della frutta
fridge.push('pesca');
/*
3. verificare se nell'array di frutta c'è il cocomero:
- se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
- se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
*/
let watermelon = false;

for (i = 0; i <= fridge.length; i++) {
    if ( fridge[i] == 'cocomero') {
        watermelon = true
    }
};

if (watermelon) {
    console.log('Trovato! Devo solo preparare il cocktail.')
} else {
    console.log('Oh no, devo uscire a comprare il cocomero!')
};
















