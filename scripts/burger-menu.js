'use strict'

const mainMenu = document.getElementById('nav-mobile');
const closeMenu = document.getElementById('closeMenu');
const openMenu = document.getElementById('openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    mainMenu.style.display='block';
    mainMenu.style.top='0';
    mainMenu.style.left ='0';
}

function close(){
    mainMenu.style.left = '-100%';
}