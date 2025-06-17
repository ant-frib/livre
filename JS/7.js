window.addEventListener("DOMContentLoaded", () => {
  let combatDiv = document.createElement("div");
  combatDiv.id = "combat";
  combatDiv.style.border = "1px solid #ccc";
  combatDiv.style.padding = "1em";
  combatDiv.style.margin = "1em 0";

  let vieJoueurP = document.createElement("p");
  vieJoueurP.innerHTML = "<strong>Votre vie :</strong> <span id='vie-joueur'>100</span>";

  let vieMonstreP = document.createElement("p");
  vieMonstreP.innerHTML = "<strong>Vie du monstre :</strong> <span id='vie-monstre'>100</span>";

  let btnAttaquer = document.createElement("button");
  btnAttaquer.id = "btn-attaquer";
  btnAttaquer.textContent = "Attaquer le monstre";

 
  let messageCombat = document.createElement("p");
  messageCombat.id = "message-combat";

  
  combatDiv.appendChild(vieJoueurP);
  combatDiv.appendChild(vieMonstreP);
  combatDiv.appendChild(btnAttaquer);
  combatDiv.appendChild(messageCombat);

  let choix = document.querySelector("p.choice");
  if (choix) {
    choix.parentNode.insertBefore(combatDiv, choix);
  } else {
    
    document.body.appendChild(combatDiv);
  }

  let vieJoueur = 100;
  let vieMonstre = 100;

  let vieJoueurSpan = document.getElementById("vie-joueur");
  let vieMonstreSpan = document.getElementById("vie-monstre");

  function attaquer() {
    const degatsJoueur = Math.floor(Math.random() * 20) + 5;
    const degatsMonstre = Math.floor(Math.random() * 20) + 5;

    vieMonstre -= degatsJoueur;
    vieJoueur -= degatsMonstre;

    vieJoueurSpan.textContent = vieJoueur > 0 ? vieJoueur : 0;
    vieMonstreSpan.textContent = vieMonstre > 0 ? vieMonstre : 0;

    messageCombat.textContent = `Vous infligez ${degatsJoueur} dégâts au monstre. Il vous inflige ${degatsMonstre} dégâts.`;

    if (vieMonstre <= 0 && vieJoueur > 0) {
      messageCombat.textContent = "Bravo ! Vous avez vaincu le monstre !";
      btnAttaquer.disabled = true;
      window.location.href = "8.html";
    } else if (vieJoueur <= 0) {
      messageCombat.textContent = "Vous avez été vaincu par le monstre...";
      btnAttaquer.disabled = true;
      window.location.href = "9.html";
    }
  }

  btnAttaquer.addEventListener("click", attaquer);
});
