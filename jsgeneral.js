
document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio('../musiquedouce.mp3');
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

  const pagesAutorisees = ["1.html"];

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
    let lien = document.getElementById("1");

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
    pourSpan.style.display = "inline";
  } else {
    pourSpan.style.display = "none";
  }
});
