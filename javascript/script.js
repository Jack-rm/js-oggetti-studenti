/**
 * 
 * 
 * 
 * Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
 * Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
 * Creare un array di oggetti di studenti.
 * Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
 * Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
 * 
 * 
 * 
 */


let studente = {

    "nome" : "Nome",
    "cognome" : "Cognome",
    "eta" : "Età",

}

for ( let key in studente ) {
    console.log(studente[key]);
}


// Creo un array di oggetti di studenti

let gruppoStudenti = [
    
    {  
        "nome" : "Jacopo",
        "cognome" : "Censori",
        "eta" : 27,
    },
    {  
        "nome" : "Paolo",
        "cognome" : "Rossi",
        "eta" : 180,
    },
    {  
        "nome" : "Jimmy",
        "cognome" : "Furfante",
        "eta" : 30,
    },
    {  
        "nome" : "Pablo",
        "cognome" : "Baretto",
        "eta" : 55,
    },
    {  
        "nome" : "Alfonso",
        "cognome" : "Della Torre",
        "eta" : 20,
    },
    {  
        "nome" : "Marco",
        "cognome" : "Ponticelli",
        "eta" : 29,
    },
    {  
        "nome" : "Gigi",
        "cognome" : "D'Alessio",
        "eta" : 60,
    }
];

for ( let i = 0; i < gruppoStudenti.length; i++){

    let singoloStudente = gruppoStudenti[i];

    let nomeStudente = singoloStudente["nome"];
    let cognomeStudente = singoloStudente["cognome"];
    let etaStudente = singoloStudente["eta"];

    console.log(nomeStudente);
    console.log(cognomeStudente);
    console.log(etaStudente);

}

let nuovoStudente = {

    "nome" : undefined,
    "cognome" : undefined,
    "eta" : undefined,

}


for ( let j = 0; j < 1; j++) {

    nuovoStudente.nome = prompt("Inserisci nome nuovo studente")
    nuovoStudente.cognome = prompt("Inserisci cognome nuovo studente");
    nuovoStudente.eta = parseInt(prompt("Inserisci eta nuovo studente"));

    gruppoStudenti.push(nuovoStudente);

}


for ( let key in gruppoStudenti ) {
    
    console.log(gruppoStudenti[key]);
    
}