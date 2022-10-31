"use strict";
var num1 = Math.floor(Math.random() * (9 - 0));
var num2 = Math.floor(Math.random() * (9 - 0));
var num3 = num1 + num2;
var capchaUser = document.querySelector("#capchaUser");
var botonEnviar = document.querySelector("#botonEnviar");

botonEnviar.addEventListener("click", enviarCapcha);

function capcha() {
  var capchap = document.querySelector("#capchaRandom");
  num1 = Math.floor(Math.random() * (9 - 0));
  num2 = Math.floor(Math.random() * (9 - 0));
  num3 = num1 + num2;
  capchap.innerHTML = num1 + " + " + num2 + " = ";
}

capcha();

function enviarCapcha() {
  if (capchaUser.value == num3) {
    document.querySelector("#respuestaCapcha").innerHTML =
      "Lo contactaremos a la brevedad!";
  } else {
    document.querySelector("#respuestaCapcha").innerHTML =
      "Respuesta erronea, por favor intente nuevamente";
    capcha();
  }
}