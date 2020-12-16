// Definisco array iniziale
var listaCognomi = ['Verdi','Bianchi','Rossi','Balsano','Egg','Moon','Bastet','Duzioni','Ragnarsson'];
console.log(listaCognomi);
// Definisco array iniziale

// recupero elementi da html
var listOutput = document.getElementsByTagName('ul')[0];
var indiceOutput = document.getElementsByTagName('div')[0];
// recupero elementi da html

// chiedo il fatidico prompt per il cognome
var cognomeUtente = prompt('Ciao tu! come ti chiami di cognome?');
// chiedo il fatidico prompt per il cognome

// aggiungo il cognome dell'utente e ordino la lista alfabeticamente
listaCognomi.push(cognomeUtente);
listaCognomi.sort();
console.log(listaCognomi);
// aggiungo il cognome dell'utente e ordino la lista alfabeticamente

// creo una variabile che mi dia la posizione del cognome comprensibile
var where = listaCognomi.indexOf(cognomeUtente) + 1;
// creo una variabile che mi dia la posizione del cognome comprensibile

// creo un ciclo for,che mi stampi in li gli elementi dell'array
for (var i = 0; i < listaCognomi.length; i++) {
  var elementoPrecedente = listOutput.innerHTML;
  listOutput.innerHTML = elementoPrecedente + '<li>' + listaCognomi[i] + '</li>';
}
// creo un ciclo for,che mi stampi in li gli elementi dell'array

// Concludo l'esercizio mettendo un messaggio che indichi la posizione del cognome utente
indiceOutput.innerHTML = '<h1>Gentilissimo/a sig/ra ' + cognomeUtente + ' la sua posizione in lista è la numero ' + where + '</h1>';
// Concludo l'esercizio mettendo un messaggio che indichi la posizione del cognome utente
