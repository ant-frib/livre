

    lien.addEventListener("click", (e) => {
      if (Math.floor(Math.random() * 11) >= rand1) {
        e.preventDefault();
        console.log("Redirection vers 9.html");
        window.location.href = "9.html";
      } else {
        console.log("Redirection vers 2.html");
        window.location.href = "2.html";
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