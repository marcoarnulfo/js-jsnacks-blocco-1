console.log("hello");


/*
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

// Il software deve chiedere per 10 volte all’utente di inserire un numero.



// const firstNumber = Number(prompt("Inserisci un numero casuale"))
// const secondNumber = Number(prompt("Inserisci un numero casuale"))
// const thirdNumber = Number(prompt("Inserisci un numero casuale"))
// const fourthNumber = Number(prompt("Inserisci un numero casuale"))
// const fifthNumber = Number(prompt("Inserisci un numero casuale"))
// const sixthNumber = Number(prompt("Inserisci un numero casuale"))
// const seventhNumber = Number(prompt("Inserisci un numero casuale"))
// const eighthNumber = Number(prompt("Inserisci un numero casuale"))
// const ninthNumber = Number(prompt("Inserisci un numero casuale"))
// const tenthNumber = Number(prompt("Inserisci un numero casuale"))

// const somma = firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber + sixthNumber + seventhNumber + eighthNumber + ninthNumber + tenthNumber

// console.log(somma);

// result.innerHTML = "la somma dei tuoi numeri è = " + somma


const result = document.querySelector("h1")

let numbers = 0

let index = 0

while (index < 10) {
    const userNumber = Number(prompt('inserisci numero'))
    numbers += userNumber
    index++
}

result.innerHTML = "la somma dei tuoi numeri è = " + numbers
console.log(numbers);