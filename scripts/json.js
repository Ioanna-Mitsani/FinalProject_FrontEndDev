'use strict'

const title1 = document.getElementById('title1');
const para1 = document.getElementById('text1');
const title2 = document.getElementById('title2');
const para2 = document.getElementById('text2');

fetch('/scripts/about.json')
    .then(response => response.json())
    .then(data => {
        for(const e of data.about){
            title1.innerText = e.about1.title;
            para1.innerText = e.about1.text;
            title2.innerText = e.about2.title;
            para2.innerText = e.about2.text;
        }


    });