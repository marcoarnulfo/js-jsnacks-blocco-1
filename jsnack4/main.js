console.log("hello");

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


// creo un array con i nomi degli invitati

const invitati = [
    "Marco",
    "Mario",
    "Andrea",
    "Giovanni",
    "Federico",
    "Jhonny",
]

// chiedo all'utente il suo nome (prompt)

const userName = prompt("Benvenuto! dimmi il tuo nome =) Mi raccomando, con la prima lettera maiuscola!")

const advice = document.querySelector("h1")
// controllo se il suo nome è all'interno della lista degli invitati (ciclo )

// let seiInvitato = false

// for (let index = 0; index < invitati.length; index++) {
//     const element = invitati[index];
//     console.log(element);
//     if (userName === element) {
//         seiInvitato = true;
//     } 
// }

function generateRandomColor()
{
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    return randomColor;
}



let index = 0

let seiInvitato = false

while (index < invitati.length){
    const element = invitati[index];
    console.log(element);
    if (userName === element) {
        seiInvitato = true;
    } 
    index++
}

if (seiInvitato === true) {
    advice.innerHTML = "Benvenuto" + " " + userName + " =)"
    advice.style.color = generateRandomColor()
} else {
    advice.innerHTML = "Il tuo nome non risulta sull'elenco degli invitati =("
    advice.style.color = generateRandomColor()
}





// gli comunico se può partecipare o no alla festa (if else)