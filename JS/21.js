window.addEventListener("DOMContentLoaded", () => {
  
  let premierChoix = document.querySelector(".choice");

  let lien = premierChoix.querySelector("a");

  lien.addEventListener("click", (e) => {
    e.preventDefault();
    let numeroChapitre = Math.floor(Math.random() * 20) + 1;
    let url = `${numeroChapitre}.html`;

    console.log(`Redirection vers ${url}`);
    window.location.href = url;
  });
});
