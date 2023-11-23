/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
  console.log(i);
}
// 1 crea un ciclo
// 2 non sono presenti errori di sintassi
// 3 i non può essere maggiore di 5 perchè i vale a 0

// // ESERCIZIO 2
// function addIfEven(num) {
//   if (num % 2 === 0) {
//     return num + 5;
//   }
//   return num;
// }

// // even or odd
// function isEven(num) {
//   return num % 2 === 0;
// }

// 1 crea una funzione pari
// 2 non sono presenti errori di sintassi
// 3 il + 5 errore logico perchè non è pari

// // ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

// // ESERCIZIO 3 corretto
// function loopToFive() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }
// 1 crea un ciclo fino a 5
// 2 sono presenti errori di sintassi perchè invece della , ci vuole ;
// 3 non sono presenti errori logici

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}
console.log(displayEvenNumbers()); // dovrebbe restituire [2,4,6,8]

// 1 mostra solo numeri pari
// 2 sono presenti errori di sintassi come il ; dopo i++ e un solo uguale nella condizione if,
// 3

// // ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//   let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

//   let evenNumbers = [];

//   for (let i = 0; i < numbers.length - 1; i++) {
//     if (numbers % 2 === 0) {
//       evenNumbers.push(i);
//     }

//     return evenNumbers;
//   }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// console.log(displayEvenNumbers());
