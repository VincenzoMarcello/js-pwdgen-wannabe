alert("Ciao!");

let nameinput = prompt("Mi diresti il tuo nome?");

let surnameinput = prompt("Grande :) mi diresti il tuo cognome?");

let yourcolor = prompt("Qual'è il tuo colore preferito?");

const numberblock = "21";

const userinfo = nameinput + surnameinput + yourcolor + numberblock;

const welcomeMessage = `
<h2>Benvenuto ${userinfo}</h2>`;

document.getElementById("welcome").innerHTML = welcomeMessage;
