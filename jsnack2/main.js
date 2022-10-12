console.log("hello");

/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */



// L’utente inserisce due parole in successione, con due prompt.

const firstWord = prompt("Inserisci la tua prima parola")
const secondtWord = prompt("Inserisci la tua seconda parola")

const short = document.querySelector("h1")
const long = document.querySelector("h2")

if (firstWord.length < secondtWord.length){
    console.log(firstWord);
    console.log(secondtWord);
    short.innerHTML = firstWord + " " + secondtWord
    short.style.color = "green"
} else if (firstWord.length > secondtWord.length){
    console.log(secondtWord);
    console.log(firstWord);
    short.innerHTML = secondtWord + " " + firstWord
    short.style.color = "red"
} else {
    console.log("stessa lunghezza");
    short.innerHTML = secondtWord + " " + firstWord + " " + "hanno la stessa lunghezza"
    short.style.color = "pink"
}

// Il software stampa prima la parola più corta, poi la parola più lunga.

 // .lenght