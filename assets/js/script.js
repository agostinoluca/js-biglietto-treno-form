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

// Funzione per leggere i dati dopo il click dell'utente
document.getElementById("invio_dati").addEventListener("click", function(){

    // Tramite degli input in pagina, chiediamo all'utente quanti km vuole fare e la sua età
    const kmViaggio = parseFloat(document.querySelector(".km_viaggio").value);
    const etaUtente = parseInt(document.querySelector(".eta_utente").value);

    // Costo del biglietto
    let prezzoBase = 0.21 * kmViaggio;
    let sconto = 0;

    // Calcolo sconto
    if (etaUtente < 18) {
        sconto = 0.2;
    } else if (etaUtente >= 65) {
        sconto = 0.4;
    }

    // Calcolo il prezzo finale
    let prezzoFinale = prezzoBase - (prezzoBase * sconto);

    // Stampo il prezzo del biglietto in console
    console.log("Il prezzo del biglietto è: " + prezzoFinale.toFixed(2) + " €");
});




