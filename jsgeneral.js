const elements = Array.from(document.body.children);
const speed = 20; 
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
console.log("dsgdgegezgegegegegegeg")
playAll();
