// Creación de variables player 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg = "dice" + randomNumber1 + ".png";
var randomImgSource = "images/" + randomDiceImg;

// Cambio de imágenes player 1
var image1 = document.querySelectorAll("img") [0];
image1.setAttribute("src", randomImgSource);

//Creación de variables player 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImgSource2 = "images/dice" + randomNumber2 + ".png";

//Cambio de imágenes player 2
var image2 = document.querySelectorAll("img") [1];
image2.setAttribute("src" , randomImgSource2);

// WINNER OR LOSSER

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "👈 GANA EL JUGADOR 1!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "GANA EL JUGADOR 2! 👉";
}

else {
  document.querySelector("h1").innerHTML = "EMPATE 😓 ";
  document.querySelector("h2").innerHTML = "¡A TIRAR DE NUEVO!"
}
