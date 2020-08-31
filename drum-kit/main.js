'use strict';

function playSound (e){
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  let key = document.querySelector(`div[data-key="${e.keyCode}"]`)
  if(!audio) return;
  // hacemos que, cada vez que se pulse una tecla se reinicie el sonido (si no, no vuelve a sonar hasta que haya terminado la animación).
  audio.currentTime = 0;
  // hacemos que suene.
  key.classList.add('playing');
  audio.play();
  //añadimos las clases para hacerlo diferente.
  console.log(audio);
}

function stopTransform (e){
  let keys = document.querySelectorAll('.playing');
  for (let key of keys) {
    key.classList.remove('playing');
  }
}

//listeners

window.addEventListener("keydown", playSound);
window.addEventListener("keyup", stopTransform);

// let keys = document.querySelectorAll(`.key`);
// for (let key of keys) {
//   key.addEventListener("keyUp", stopTransform);
// }