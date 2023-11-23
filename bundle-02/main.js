/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

// // ESERCIZIO 1
// function checkAge() {
//   const myAge = 32;
//   const message = '';

//   if (myAge < 18) {
//     message = `Sei troppo giovane! Hai ${myAge} anni!`;
//   } else {
//     message = 'Hai più di 18 anni!';
//   }
// }
// checkAge();

// 1 funzione che verifica se si è maggiorenni
// 2 message dovrebbe avere let invece che const
// 3 myAge non dovrebbe avere un età predefinita

// // ESERCIZIO 1
// function checkAge() {
//   const myAge = 32;
//   const message = '';

//   if (myAge < 18) {
//     let messaggio = message;
//     messaggio = `Sei troppo giovane! Hai ${myAge} anni!`;
//   } else {
//     messaggio = 'Hai più di 18 anni!';
//   }
// }
// checkAge();

// // ESERCIZIO 2
// function printColorsNumber() {
//   const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//   console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();

// 1 funzione che conta quanti colori ci sono nell'array
// 2 errore color.lenght , creo variabile apposta
// 3 non sono presenti errori logici

// ESERCIZIO 2
function printColorsNumber() {
  const colors = ['blue', 'red', 'yellow', 'green', 'black'];
  const lunghezzaColori = colors.length;

  console.log(colors);
  console.log(`Nella mia palette ci sono ${lunghezzaColori} colori!`);
}
printColorsNumber();

// // ESERCIZIO 3
// function addNumbers() {
//   const userNumber = prompt('Inserisci un numero');
//   const total = userNumber + 12;

//   console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// 1 funzione che serve per sommare numero prompt + 12 indicato
// 2 non presenta errori di sintassi
// 3 convertire dato prompt in numero e creare variabile con parseint in modo che diventi numero

// // ESERCIZIO 3
// function addNumbers() {
//   const userNumber = prompt('Inserisci un numero', '0');
//   const valueNumber = parseInt(userNumber);
//   const total = valueNumber + 12;

//   console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();

// // ESERCIZIO 4
// function checkAccess() {
//   const addresses = [
//     'mymail@mail.com',
//     'yourmail@mail.com',
//     'hermail@mail.com',
//     'hismail@mail.com',
//   ];
//   const userEmail = prompt('Inserisci il tuo indirizzo email');

//   let grantAccess = 'false';

//   if (addresses.includes(userEmail)) {
//     grantAccess = 'true';
//   }

//   if (grantAccess === true) {
//     console.log('Accesso consentito!');
//   } else {
//     console.log('Accesso negato!');
//   }
// }
// checkAccess();

// 1 funzione per verificare mail che hanno accesso
// 2 presenta errori di sintassi nei valori booleani come true e false
// 3 non presenta errori di logica

// // ESERCIZIO 4
// function checkAccess() {
//   const addresses = [
//     'mymail@mail.com',
//     'yourmail@mail.com',
//     'hermail@mail.com',
//     'hismail@mail.com',
//   ];
//   const userEmail = prompt('Inserisci il tuo indirizzo email');

//   let grantAccess = false;

//   if (addresses.includes(userEmail)) {
//     grantAccess = true;
//   }

//   if (grantAccess === true) {
//     console.log('Accesso consentito!');
//   } else {
//     console.log('Accesso negato!');
//   }
// }
// checkAccess();

// // ESERCIZIO 5 (suggerimento: c'è un solo errore)
// function checkAccessImproved() {
//   const addresses = [
//     'mymail@mail.com',
//     'yourmail@mail.com',
//     'hermail@mail.com',
//     'hismail@mail.com',
//   ];

//   const userEmail = prompt('Inserisci il tuo indirizzo email');

//   let grantAccess = 'false';

//   for (let i = 0; i < addresses.length; i++) {
//     const email = addresses[i];

//     if (userEmail.length > 5) {
//       if (email === userEmail) {
//         grantAccess = 'true';
//       }
//     }

//     if (grantAccess) {
//       console.log('Accesso consentito!');
//     } else {
//       console.log('Accesso negato!');
//     }
//   }
// }
// checkAccessImproved();

// 1 funzione per verificare mail che hanno accesso
// 2 presenta errori di sintassi cioè la graffa alla fine e i valori booleani
// 3  non presenta errori di logica

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
  const addresses = [
    'mymail@mail.com',
    'yourmail@mail.com',
    'hermail@mail.com',
    'hismail@mail.com',
  ];

  const userEmail = prompt('Inserisci il tuo indirizzo email');

  let grantAccess = false;

  for (let i = 0; i < addresses.length; i++) {
    const email = addresses[i];

    if (userEmail.length > 5) {
      if (email === userEmail) {
        grantAccess = true;
      }
    }

    if (grantAccess) {
      console.log('Accesso consentito!');
    } else {
      console.log('Accesso negato!');
    }
  }
}
checkAccessImproved();
