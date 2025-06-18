# livre
Pour l'executer :
    make 
    ./build/livre




 Générateur de chapitres HTML en C :

Ce programme lit un fichier texte contenant un livre structuré en pseudo-XML (chapitres, paragraphes, choix) et génère un fichier HTML par chapitre dans un dossier `export/`.

---

 Fonctionnement :

- Le programme lit `book.txt` situé dans `../livre/`.
- Il détecte les balises `<chapter>`, `<p>`, et `<choice>`.
- Il génère un fichier `export/ID.html` pour chaque chapitre.
- Le contenu HTML est formaté à l'aide de templates définis dans un fichier `template.h`.

---

 Structure attendue du fichier source (`book.txt`)

Exemple :
```xml
<chapter id="1">Introduction</chapter>
<p>Bienvenue dans le livre interactif.</p>
<choice idref="2"><a>Aller à la suite</a>lien.html</choice>
<chapter id="2">Chapitre suivant</chapter>
<p>Vous êtes maintenant dans le deuxième chapitre.</p>

 Système de combat (HTML + JS)

Ajoute dynamiquement un encart de combat joueur vs monstre avec :

    Barre de vie joueur et monstre

    Bouton "Attaquer"

    Bouton "Jeter du sable" (réduit la précision du monstre)

    Résultats affichés dynamiquement

    Redirection automatique vers 8.html ou 9.html selon l’issue du combat

 Choix aléatoire de chapitre :

Dans certaines pages, le lien du premier choix redirige aléatoirement vers un chapitre entre 2.html et 21.html.

 Mécanique de probabilités (page spéciale : 17.html) :

Affiche une probabilité de réussite en cliquant sur un lien :

    Calcul : somme de 10 tirages de 0 ou 1

    Si l'utilisateur échoue → 9.html

  Si réussite → 20.html



