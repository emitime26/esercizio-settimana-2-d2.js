/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
// Definizionisco i numeri:
let numero1 = 25;
let numero2 = 42;

// faccio un confronto
let numeroPiùGrande;

if (numero1 > numero2) {
    numeroPiùGrande = numero1;
} else {
    numeroPiùGrande = numero2;
}
console.log("Il numero più grande tra " + numero1 + " e " + numero2 + " è: " + numeroPiùGrande);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
// Numero 
let numeroFornito = 7;

// Verifico se il numero è diverso da 5
if (numeroFornito !== 5) {
    console.log("not equal");
} else {
    console.log("Il numero è uguale a 5");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
// Numero 
let numeroFornito = 20;

// Verifica se il numero è perfettamente divisibile per 5
if (numeroFornito % 5 === 0) {
    console.log("divisibile per 5");
} else {
    console.log("non divisibile per 5");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
// Due numeri
let numero1 = 5;
let numero2 = 3;

// Verifica se uno dei numeri è 8 o se la loro somma/sottrazione è uguale a 8
if (numero1 === 8 || numero2 === 8 || numero1 + numero2 === 8 || Math.abs(numero1 - numero2) === 8) {
    console.log("Condizione soddisfatta: Uno dei numeri è 8 o la somma/sottrazione è 8");
} else {
    console.log("Condizione non soddisfatta");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
// Saldo totale del carrello esempio ipotetico
let totalShoppingCart = 51;

// Costo fisso di spedizione
const costoSpedizioneFisso = 10;


const spedizioneGratuita = totalShoppingCart > 50;

// Calcolo l'importo totale da addebitare all'utente
const importoTotale = spedizioneGratuita ? totalShoppingCart : totalShoppingCart + costoSpedizioneFisso;

// Stampa il risultato
console.log("Totale carrello: $" + totalShoppingCart);
console.log(spedizioneGratuita ? "Spedizione: Gratuita" : "Spedizione: $" + costoSpedizioneFisso);
console.log("Totale da addebitare: $" + importoTotale);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
// Saldo dentro carrello
let totalShoppingCart = 51;

// Costo fisso di spedizione
const costoSpedizioneFisso = 10;

// Determina se l'utente ha diritto alla spedizione gratuita
const spedizioneGratuita = totalShoppingCart > 50;

// Calcola l'importo scontato del carrello con il 20% di sconto per il Black Friday
const importoScontato = totalShoppingCart * 0.8; // 20% di sconto

// Calcola l'importo totale da addebitare all'utente, tenendo conto della spedizione gratuita
const importoTotale = spedizioneGratuita ? importoScontato : importoScontato + costoSpedizioneFisso;

// Stampa del risultato
console.log("Totale carrello: $" + totalShoppingCart);
console.log("Importo scontato (20% di sconto): $" + importoScontato);
console.log(spedizioneGratuita ? "Spedizione: Gratuita" : "Spedizione: $" + costoSpedizioneFisso);
console.log("Totale da addebitare: $" + importoTotale);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale if, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
// Tre variabili con valori numerici
let numero1 = 25;
let numero2 = 10;
let numero3 = 35;

if (numero1 >= numero2 && numero1 >= numero3) {
    if (numero2 >= numero3) {
        console.log("Ordine decrescente: " + numero1 + ", " + numero2 + ", " + numero3);
    } else {
        console.log("Ordine decrescente: " + numero1 + ", " + numero3 + ", " + numero2);
    }
} else if (numero2 >= numero1 && numero2 >= numero3) {
    if (numero1 >= numero3) {
        console.log("Ordine decrescente: " + numero2 + ", " + numero1 + ", " + numero3);
    } else {
        console.log("Ordine decrescente: " + numero2 + ", " + numero3 + ", " + numero1);
    }
} else {
    if (numero1 >= numero2) {
        console.log("Ordine decrescente: " + numero3 + ", " + numero1 + ", " + numero2);
    } else {
        console.log("Ordine decrescente: " + numero3 + ", " + numero2 + ", " + numero1);
    }
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
// Valore fornito
let valoreFornito = "42";


if (typeof valoreFornito === "number") {
    console.log("Il valore fornito è un numero.");
} else {
    console.log("Il valore fornito NON è un numero.");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let numeroFornito = 8;

if (numeroFornito % 2 === 0) {
    console.log(numeroFornito + " è un numero pari.");
} else {
    console.log(numeroFornito + " è un numero dispari.");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;

if (val < 5) {
    console.log("Meno di 5");
} else if (val < 10) {
    console.log("Meno di 10");
} else {
    console.log("Uguale a 10 o maggiore");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto "me", scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto". oggetto con dentro array
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};
 // "city"
me.city = 'Toronto';


console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

//  "lastName" tolta

delete me.lastName;

// Stampa oggetto nuovo
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

//  "skills" rimossa
me.skills.pop();

// Stampa oggetto aggiornatoo
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
// Credo...
let numeriArray = [];


for (let i = 1; i <= 10; i++) {
    numeriArray.push(i);
}


console.log(numeriArray);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

let numeriArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


numeriArray[numeriArray.length - 1] = 100;


console.log(numeriArray);

/* SCRIVI QUI LA TUA RISPOSTA */
