'use strict'
const semaforo = document.getElementById('semaoro');
const btnVermlho = document.getElementById('btnVermelho');
btnVermlho.addEventListener('click', vermelho);
const btnAmarelo = document.getElementById('btnAmarelo');
btnAmarelo.addEventListener('click', amarelo);
const btnVerde = document.getElementById('btnVerde');
btnVerde.addEventListener('click', verde);
const btnAutomatico = document.getElementById('btnAutomatico');
btnAutomatico.addEventListener('click', mudarCor);

function vermelho(){
  semaforo.src = './2.png';
}

function amarelo(){
  semaforo.src = './3.png';
}

function verde(){
  semaforo.src = './4.png'
}

function mudarCor(){
  let imagem = 1;
  let interval = setInterval(function(){
    imagem++;
    semaforo.src = './'+imagem+'.png';
    if(imagem == 4){
      imagem = 1;
    }
  }, 600);
}