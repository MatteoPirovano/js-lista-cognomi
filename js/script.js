var cognomi = ['Pesce', 'Castenetto', 'Passaro', 'Grimaldi', 'Rossi', 'Verdi', 'Bianchi' ];
for (var i = 0; i < 1; i++) {
  var cognomeUtente = prompt('Inserisci il tuo cognome')
  cognomi.push(cognomeUtente);
};
cognomi.sort();
document.getElementById("lista_cognomi").innerHTML = cognomi;
var position = cognomi.indexOf(cognomeUtente)+1;
document.getElementById("posizione_cognome").innerHTML = 'Posizione numero: ' + position;
