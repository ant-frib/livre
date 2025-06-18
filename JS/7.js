window.addEventListener("DOMContentLoaded", () => {
  let combatDiv = document.createElement("div");
  combatDiv.id = "combat";
  combatDiv.style.border = "1px solid #ccc";
  combatDiv.style.padding = "1em";
  combatDiv.style.margin = "1em auto";
  combatDiv.style.maxWidth = "600px";
  combatDiv.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  combatDiv.style.borderRadius = "10px";
  combatDiv.style.textAlign = "center";

  let vieJoueurP = document.createElement("p");
  vieJoueurP.innerHTML = "<strong>Votre vie :</strong> <span id='vie-joueur'>100</span>";

  let vieMonstreP = document.createElement("p");
  vieMonstreP.innerHTML = "<strong>Vie du monstre :</strong> <span id='vie-monstre'>100</span>";

  let btnAttaquer = document.createElement("button");
  btnAttaquer.id = "btn-attaquer";
  btnAttaquer.textContent = "Attaquer le monstre";
  btnAttaquer.style.margin = "1em 1em";

  let btnDefendre = document.createElement("button");
  btnDefendre.id = "btn-action";
  btnDefendre.textContent = "Jeter du sable";
  btnDefendre.style.margin = "1em 1em";

  let messageCombat = document.createElement("p");
  messageCombat.id = "message-combat";

  combatDiv.appendChild(vieJoueurP);
  combatDiv.appendChild(vieMonstreP);
  combatDiv.appendChild(btnAttaquer);
  combatDiv.appendChild(btnDefendre);
  combatDiv.appendChild(messageCombat);

  // Crée la div contenant le monstre
  const MonstreCombat = document.createElement("div");
  MonstreCombat.id = "monstre-combat";
  MonstreCombat.style.backgroundColor = "rgba(255,255,255,0.05)";
  MonstreCombat.style.border = "1px solid rgba(255,255,255,0.2)";
  MonstreCombat.style.marginTop = "1em";
  MonstreCombat.style.padding = "10px";
  MonstreCombat.style.paddingBottom = 0
  MonstreCombat.style.textAlign = "center";
  MonstreCombat.style.borderRadius = "10px";

  // Crée et ajoute l'image du monstre
  const monstre = document.createElement("img");
  monstre.id = "monstre";
  monstre.src = "../assets/Monstre-Cut.png";
  monstre.alt = "Monstre";
  monstre.style.display = "inline-block";

  MonstreCombat.appendChild(monstre);
  const Coup = new Audio('../assets/Slash.mp3');
  const Lancer = new Audio('../assets/JetSable.mp3');
  const Mort = new Audio('../assets/Defeat.mp3');
  combatDiv.appendChild(MonstreCombat);

  let choix = document.querySelector("p.choice");
  if (choix) {
    choix.parentNode.insertBefore(combatDiv, choix);
  } else {
    document.body.appendChild(combatDiv);
  }

  let vieJoueur = 100;
  let vieMonstre = 100;
  let precisonMonstre = 5;

  let vieJoueurSpan = document.getElementById("vie-joueur");
  let vieMonstreSpan = document.getElementById("vie-monstre");

  function attaquer() {
    const degatsJoueur = Math.floor(Math.random() * 20) + 5;
    const degatsMonstre = Math.floor(Math.random() * 20) + 5;
    let jet = Math.floor(Math.random() * 100)+1 - precisonMonstre;

    vieMonstre -= degatsJoueur;

    if (jet <= 0) {
      vieJoueur += 0;
      Coup.play();
      messageCombat.textContent = `Vous infligez ${degatsJoueur} dégâts au monstre. Il rate son attaque !.`;
    }
    else {
      vieJoueur -= degatsMonstre;
      Coup.play();
      messageCombat.textContent = `Vous infligez ${degatsJoueur} dégâts au monstre. Il vous inflige ${degatsMonstre} dégâts.`;
    }

    vieJoueurSpan.textContent = vieJoueur > 0 ? vieJoueur : 0;
    vieMonstreSpan.textContent = vieMonstre > 0 ? vieMonstre : 0;

    monstre.classList.add("shake");
    setTimeout(() => {
      monstre.classList.remove("shake");
    }, 300);

    if (vieMonstre <= 0 && vieJoueur > 0) {
      messageCombat.textContent = "Bravo ! Vous avez vaincu le monstre !";
      btnAttaquer.disabled = true;
      setTimeout(() => {
        window.location.href = "8.html";
      }, 2000);
    } else if (vieJoueur <= 0) {
      messageCombat.textContent = "Vous avez été vaincu par le monstre...";
      Mort.play();
      btnAttaquer.disabled = true;
      setTimeout(() => {
        window.location.href = "9.html";
      }, 2000);
    }
  }

  function Action() {
    const actionJoueur = Math.floor(Math.random() * 7) + 1
    const degatsMonstre = Math.floor(Math.random() * 20) + 3;

    precisonMonstre += actionJoueur ;
    let jet = Math.floor(Math.random() * 100)+1 - precisonMonstre;

    if (jet <= 0) {
      vieJoueur += 0
      messageCombat.textContent = `Vous baissez de ${actionJoueur} la précison du monstre. Il rate son attaque !.\nPrécison du monstre : ${100-precisonMonstre}`;
      Lancer.play();
    }
    else {
      vieJoueur -= degatsMonstre;
      messageCombat.textContent = `Vous baissez de ${actionJoueur} la précison du monstre mais il vous inflige ${degatsMonstre} dégâts !\nPrécison du monstre : ${100-precisonMonstre}`;
      Lancer.play();
    }

    vieJoueurSpan.textContent = vieJoueur > 0 ? vieJoueur : 0;
    vieMonstreSpan.textContent = vieMonstre > 0 ? vieMonstre : 0;

    monstre.classList.add("sand");
    setTimeout(() => {
      monstre.classList.remove("sand");
    }, 300);

    if (vieJoueur <= 0) {
      messageCombat.textContent = "Vous avez été vaincu par le monstre...";
      Mort.play();
      btnAttaquer.disabled = true;
      setTimeout(() => {
        window.location.href = "9.html";
      }, 2000);
    }

  }

  btnAttaquer.addEventListener("click", attaquer);
  btnDefendre.addEventListener("click", Action)
});
