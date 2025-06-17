
document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio('./assets/musiquedouce.mp3');
    audio.loop = true; 
    document.body.addEventListener('click', () => {
        audio.play();
    }, { once: true });
});


let pour = document.getElementById("pour");


document.addEventListener("DOMContentLoaded", () => {
  const pourSpan = document.getElementById("pour");

  const chemin = window.location.pathname;
  const pageActuelle = chemin.substring(chemin.lastIndexOf("/") + 1);

  const pagesAutorisees = ["17.html"];

  if (pagesAutorisees.includes(pageActuelle)) {
    let rand1 =
      Math.floor(Math.random() * 2) +
      Math.floor(Math.random() * 2) +
      Math.floor(Math.random() * 2) +
      Math.floor(Math.random() * 2) +
      Math.floor(Math.random() * 2) +
      Math.floor(Math.random() * 2) +
      Math.floor(Math.random() * 2) +
      Math.floor(Math.random() * 2) +
      Math.floor(Math.random() * 2) +
      Math.floor(Math.random() * 2);
    pour.innerHTML = "Vous avez "+ rand1 +" chances sur 10 de vous en sortir";
    let lien = document.getElementById("17");

    lien.addEventListener("click", (e) => {
      if (Math.floor(Math.random() * 11) >= rand1) {
        e.preventDefault();
        console.log("Redirection vers 9.html");
        window.location.href = "9.html";
      } else {
        console.log("Redirection vers 2.html");
        window.location.href = "20.html";
      }
    });
    pourSpan.style.display = "inline";
  } else {
    pourSpan.style.display = "none";
  }
});





















/*
const elements = Array.from(document.body.children);
const speed = 0.1; // ms par caractère
let current = 0;

function typeWriter(el, callback) {
  const clone = el.cloneNode(true); // copie exacte avec HTML complet
  const content = clone.innerHTML;
  el.innerHTML = "";
  el.style.visibility = "visible";

  let i = 0;
  function type() {
    if (i < content.length) {
      el.innerHTML += content.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      el.innerHTML = content; // assure que le HTML complet est bien mis à la fin
      callback();
    }
  }

  type();
}

function playAll() {
  if (current >= elements.length) return;
  typeWriter(elements[current], () => {
    current++;
    playAll();
  });
}

playAll();
*/