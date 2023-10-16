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
/*
const text = document.getElementById('data');

const btn = document.querySelector('.btn');

console.log(text, btn);

const result = document.getElementById('result');
*/

/*
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
   /*
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
*/



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

fridge.push('pesca');
/*
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
*/

/*

//come lo traduco in un ciclo while ?

let contatore = 0;
while(contatore < fruits.lenght) {
    const element = fruits[contatore];
    console.log(element);
    contatore ++ ;
}


//voglio che mi cerchi come nella task l'elemento cocomero

let checkcocomero = false;
let contatore = 0;

//ripeti finchè checkcocomero non diventa true, siccome attualmente è false, scrivero !checkcocomero ovvero finche checkcocomero non è false cioè true!!!
//oppure avrei potuto scrivere checkcocomero === false, cioè fintanto che  checkcocomero è false tu cicla 

while(!checkcocomero) {
    const element = fruits[contatore];
    console.log(element);
    if(element === 'cocomero') {
        checkcocomero = true;
    }
    contatore ++ ;
}


//devo però assicurarmi di avere una condizione che non mi mandi in loop il ciclo quindi potrei mettere che cicli finche checkcocomero non passi a true ma in ogni caso si ferma appena termina di scorrere la lista

while(!checkcocomero && contatore < fruits.lenght) {
    const element = fruits[contatore];
    console.log(element);
    if(element === 'cocomero') {
        checkcocomero = true;
    }
    contatore ++ ;
}

*/

//chiedo all'utente di quanti elementi vuole che sia composto questo array di soli numeri pari

const btn = document.querySelector('button');
const usernumberEl = document.getElementById('data');

btn.addEventListener('click', function() {
    const numelinarray = parseInt(usernumberEl.value);
    console.log(numelinarray);

    let evennumber = [];

    //con ciclo for
    //non utile in questo caso perchè non so quanti rng ci vorranno per avere una lista di 10 numeri pari 

    /*
    for(let i = 0; i < numelinarray; i++) {
        const num = getRndInteger(1,100);
        if(num % 2 === 0) {
            evennumber.push(num);
        }
    }
    */

   //con ciclo while
   //cicla finche il valore espresso dall'utente non è maggiore alla lunghezza dell'array che si genererà dall'estrazione dei numeri
   while(evennumber.length < numelinarray) {
    const num = getRndInteger(1,100);
    //pusha in array se il numero è pari e NON è già incluso in num, quindi niente doppioni
    if(num % 2 === 0 && !evennumber.includes(num)) {
        evennumber.push(num);
    }
   }

});


//contatore randomico
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//switch


//hai tanti casi di if ?
let color = 'blue';

if( color === 'red') {
    console.log('passione');
} else if (color === 'green') {
    console.log('speranza');
} else if ( color === 'blue') {
    console.log('mare');
} else {
    console.log('non conosco questo colore');
}

//meglio usare il switch!

let color = 'blue';

switch(color) {
    case 'red':
        console.log('passione');
        break;
    case 'green':
        console.log('speranza');
        break;
    case 'blue':
        console.log('mare');
        break;
    default: 
        console.log('non conosco questo colore');
}

//è importante inserire un break dopo ogni case per comunicare al sisteema di uscire dalla funzione se la situazione si realizza


//if con valore terziario

//arrnumber = [array generato random sulla base di un  input]
//ammettiamo che ho un caso come questo 
if (arrnumber <= 5 ) {
    result.innerHTML =`Ecco gli ultimi valori: ${list}.` 
} else {
    result.innerHTML =`Ecco gli ultimi 5 valori: ${lastfive}.`
}

//potrei scriverla come: 

result = (arrnumber <= 5) ? resultlist : resultlastfive;

resultlist.innerHTML = `Ecco gli ultimi valori.`

resultlastfive. innerHTML = `Ecco gli ultimi 5 valori.`

//cioè:

variabile = (condizione) ? valore1 : valore2




//esercizio in classe !!!

//in una array sono contenuti i nomi degli invitati alla festa di gatsby, chiedi all'utente il suo nome, e comunicagli se può entrare oppure no


const btn = document.querySelector('button');
const inputEl = document.getElementById('data');
const result = document.querySelector('.alert');

const nomi = [
    'pippo',
    'pluto',
    'paperino',
    'diocene'
]

btn.addEventListener('click', function(){
    result.classList.add('d-none');
    let check = false;
    let username = data.value;
    let i = 0;
    while(!check && i < nomi.length) {
        if( username === nomi[i]) {
            check = true;
        }
        i++
    };

    /*
    if (check) {
        result.innerHTML = 'Sei in lista! Puoi entrare'
    } else {
        result.innerHTML = 'Alt! il suo nome non è nella lista, mi spiace non può entrare'
    }
    */
   
    //oppure potrei scriverlo così
    result.innerHTML = msg;
    msg = (check) ? 'Sei in lista! Puoi entrare' : 'Alt! il suo nome non è nella lista, mi spiace non può entrare'
    result.classList.remove('d-none');
});


