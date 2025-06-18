document.addEventListener("DOMContentLoaded", () => {
  let liens = document.querySelectorAll("a[href='8.html']");
  liens.forEach(lien => {
    lien.addEventListener("click", (e) => {
      e.preventDefault(); 
      let code = prompt("Mince la porte est fermé par un code \n Entrez le code secret pour accéder au chapitre 8 :");
      if (code === "gobelindu44") { 
        window.location.href = "8.html"; 
      } else {
        alert("Code incorrect. Accès refusé.");
      }
    });
  });
});
