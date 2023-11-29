// esta es la eleccion de la computadora
function getComputerChoice() {
 let random = Math.floor(Math.random() *3) +1;
  switch (random) {
    case 1:
      return "Rock"
    case 2: 
      return "Paper"
    case 3:
      return "Siccors"    
  }
}
//conversion de strin a minuscula y despues la primer letra a MAYUSCULA
let str1 = prompt("what's your choice: Rock, Paper or Siccors");
let str2 = str1.toLowerCase()
let str3 = str2.charAt(0).toUpperCase() + str2.slice(1);

// esta es la eleccion del jugador y de la computadora
let playerSelection = str3;
let computerSelection = getComputerChoice();

//este es el juego
function playRound() {
  if (playerSelection === "Rock" && computerSelection === "Siccors") {
    alert("You Win! Rock beats Siccors");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
      alert("You Win! Paper beats Rock");
    } else if (playerSelection === "Siccors" && computerSelection === "Paper") {
      alert("You Win! Siccors beats Paper");
    } else if (computerSelection === "Rock" && playerSelection === "Siccors") {
      alert("You Lose! Rock beats Siccors");
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
      alert("You Lose! Paper beats Rock");
    } else if (computerSelection === "Siccors" && playerSelection === "Paper") {
      alert("You Lose! Siccors beats Paper");
    } else if (playerSelection === computerSelection) {
      alert("This is a tie!")
    } else {
      alert("Invalid option!")
    }
 }
  


