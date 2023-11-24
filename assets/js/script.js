/* 
Scrivere un programma che chieda all’utente:
-Il numero di chilometri da percorrere;
-Età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km);
-va applicato uno sconto del 20% per i minorenni;
-va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TOOLS:
-console.log
-let/const
-parseInt / parseFloat
-if/else if
-.tofixed(2)
-> / < / *
-document.getElementById / document.querySelector
*/

// Generatore carrozza del treno
function generaCarrozzaCasuale() {
    return Math.floor(Math.random() * 10) + 1;
}

// Generatore codice CP
function generaCodiceCp() {
    return Math.floor(Math.random() * 100000) + 1;
}

// Funzione per leggere i dati dopo il click dell'utente
document.getElementById("invio_dati").addEventListener("click", function(){

    
    // Tramite degli input in pagina, chiediamo all'utente quanti km vuole fare e la sua età
    const kmViaggio = parseFloat(document.getElementById("km_viaggio").value);
    const etaUtente = (document.getElementById("eta_utente").value);
    const nominativo = (document.getElementById("inputName").value);
    
    // chiediamo all'utente di inserire solamente valori numerici
    if (isNaN(kmViaggio)) {
        alert('ERRORE. Per favore, inserisci solo valori numerici.');
    } else {

        // Costo del biglietto
        let prezzoBase = 0.21 * kmViaggio;    

        // Calcolo sconto
        if (etaUtente === 'minorenne') {
            sconto = 0.2;
        } else if (etaUtente === 'over65') {
            sconto = 0.4;
        } else {
            sconto = 0;
        }
        
        // Genero il numero della carrozza del treno
        let carrozza = generaCarrozzaCasuale();
        
        // Genero il codice CP del biglietto
        let codiceCp = generaCodiceCp();

        // Calcolo il prezzo finale
        let prezzoFinale = prezzoBase - (prezzoBase * sconto);

        // Stampo il nome del viaggiatore sul biglietto
        document.getElementById('ticket_name').innerHTML = nominativo;

        // Stampo il prezzo del biglietto in pagina
        document.getElementById('ticket_price').innerHTML = `Prezzo € ${prezzoFinale.toFixed(2)}`;

        // Stampo il numero della carrozza
        document.getElementById('n_carrozza').innerHTML = `Carrozza numero: ${carrozza}`;

        // Stampo il codice CP del biglietto
        document.getElementById('codice_cp').innerHTML = `Codice CP: ${codiceCp}`;

        // Stampo il tipo di offerta applicata
        let offerta = document.getElementById('sconto_applicato');
        if (sconto === 0.2) {
            offerta.innerHTML = 'Tariffa Junior';
        } else if (sconto === 0.4) {
            offerta.innerHTML = 'Tariffa Senior';
        } else {
            offerta.innerHTML = 'Tariffa Standard';
        }
        
    }

});




