// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// Stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.
// Consigli del giorno:
// Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.
var cognomi = ['Pesce', 'Castenetto', 'Passaro', 'Grimaldi', 'Rossi', 'Verdi', 'Bianchi' ];
for (var i = 0; i < 1; i++) {
  var cognomeUtente = prompt('Inserisci il tuo cognome')
  cognomi.push(cognomeUtente);
};
cognomi.sort();
document.getElementById("lista_cognomi").innerHTML = cognomi;
