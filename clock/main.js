"use strict"

//sacamos el html que vamos a modificar
let secondHand = document.querySelector('.second-hand');
let minsHand = document.querySelector('.min-hand');
let hoursHand =document.querySelector('.hour-hand');

function setDate() {
  //Creamos las variables de las horas, los minutos y los segundos.
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours =now.getMinutes();
  

  // Vinculamos los segundos con los grados, por eso la siguiente división.
  let secondsDegrees =((seconds / 60) * 360 )+ 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // hacemos lo mismo con los minutos.
  let minsDegrees =((mins / 60) * 360 ) +90;
  minsHand.style.transform =`rotate(${minsDegrees}deg)`;

  // y de nuevo, lo mismo con las horas ¡¡¡recuerda que son 12 horas!!!
  let hoursDegrees = ((hours / 12) * 360) + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000);