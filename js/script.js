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


/*
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
*/
/*
3. verificare se nell'array di frutta c'è il cocomero:
- se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
- se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"

let watermelon = false;
for (i = 0; i < fridge.length; i++) {
    if ( fridge[i] == 'cocomero') {
        watermelon = true
    }
};
if (watermelon) {
    console.log('Trovato! Devo solo preparare il cocktail.')
} else {
    console.log('Oh no, devo uscire a comprare il cocomero!')
};

//se io avessi voluto prendere gli ultimi 3 elementi della lista fridge ?
for( let i = fruits.length - 1; i > fruits.length - 4; i--) {
    console.log(fruits[i])
}
//ad i corrisponde l'ultimo elemento dell'array, ripeti finche i è maggiore del quinto elemento, ad ogni ciclo i scala di un valore 
//parti dal fondo e risali fino al quinto elemento dell'array
//poi stampami tutti gli elementi selezionati



//ricordati che se non riesci a capire il motivo del tuo errore, fare un console log può aiutarti a sbloccare la situazione

console.log(fridge[i], watermelon)
/*



/*
2. La coda dell'Array
Cartella: array_tail
Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e 
generando tanti numeri casuali da 1 a 100 per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array
Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare
Suggerimenti:
Probabilmente conviene controllare che il numero di elementi della coda
non sia più grande del numero di elementi totali dell'array
*/

const text = document.getElementById('data');

const btn = document.querySelector('.btn');

console.log(text, btn);

const result = document.getElementById('result');



btn.addEventListener('click', function() {
    let arrnumber = parseInt(text.value);
    //creo una let array in cui inserirò i valori generati dal for
    let list = [];
    console.log(arrnumber, list);
    //creo un ciclo che cicli tanto quanto il valore inserito nell'input
    //in questo modo però il sistema mi tirerà fuori un solo valore cioè l'ultimo generato
    for(let i = 0; i < arrnumber; i++) {
        //pertento voglio che per ogni valore generato pushi un numero a caso estratto dal rng in un array dichiarato prima 
        list.push(getRndInteger(1, 101));
    };
    /*
    //creo una let che mi estragga gli ultimi 5 elementi della array creata
    //in questo diciamo: lastfive è uguale ad un array composto dagli elementi -5 di list, -4 di list, -3 di list...
    let lastfive = [
        (list[list.length - 5]),
        (list[list.length - 4]),
        (list[list.length - 3]),
        (list[list.length - 2]),
        (list[list.length - 1]),
    ];
    */
   let lastfive = [];
   for(let i = list.length - 1; i > list.length - 6; i --) {
        lastfive.push(list[i]);
   }

   console.log(lastfive);

    if (arrnumber <= 5 ) {
        result.innerHTML =`Ecco gli ultimi valori: ${list}.` 
    } else {
        result.innerHTML =`Ecco gli ultimi 5 valori: ${lastfive}.`
    }
    
    let howmany = document.getElementById('howmany').value;
    let howmanyresult =[];
    for(let i = howmany; i >= 1 ; i--) {
        howmanyresult.push(list[list.length - i]);
    }
    console.log(howmanyresult);
    
});


//contatore randomico
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}













