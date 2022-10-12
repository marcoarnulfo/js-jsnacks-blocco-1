console.log("hello");

//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore.

const firstNumber = prompt("Inserisci il tuo primo numero")
const secondNumber = prompt("Inserisci il tuo secondo numero")

const result = document.querySelector("h1")

if (firstNumber > secondNumber){
    console.log(firstNumber);
    result.innerHTML = firstNumber
    result.style.color = "green"
} else if (secondNumber > firstNumber){
    console.log(secondNumber)
    result.innerHTML = secondNumber
    result.style.color = "red"
} else {
    console.log("both");
    result.innerHTML = "both"
    result.style.color = "pink"
}