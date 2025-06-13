#include "template.h"
#include <string.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>





void genererweb(char* chapter) {
    char** tableligne = functionligne(chapter);
    int id;
    int idpara;
    char title[256];
    char lien[256];
    char filename[10];
    char para[512];
    sscanf(chapter, "<chapter id=\"%d\">%[^<]s</chapter>", &id, title);
    snprintf(filename, sizeof(filename), "export/%d.html", id);
    FILE *page = fopen(filename, "w");
    if (page == NULL) {
        fprintf(stderr, "Cannot open file %s\n", filename);
    } else {
        fprintf(page, HEADER, title);
        fprintf(page, TITLE, title);
        for (int i = 1; i < sizeof(tableligne); i++) {
            if(tableligne[i][0]=="<"&& tableligne[i][1]=="p") {
                sscanf(tableligne[i], "<p>%[^<]s</p>",para);
                fprintf(page, PARAGRAPH, para);
            }
            else {
                sscanf(tableligne[i], "<choice idref=\"%d\">%[^<]s<a>%[^<]s</a></choice>",&idpara,para,lien);
                fprintf(page, PARAGRAPH, para);
                fprintf(page, LINK, idpara,lien);
            }
        }
        fprintf(page, FOOTER);
        fclose(page);
    }
}

int main() {
    //Creer le dossier export 
    const char *dirname = "export";

    if (mkdir(dirname, 0755) == -1) {
        perror("Erreur lors de la création du dossier");
    }

    char* chapitre = "<chapter id=\"01\">Le Village de Grinheim</chapter>"
       "<p>Vous êtes originaire du village de Grinheim, un endroit tranquille niché...</p>"
       "<choice idref=\"02\">Suivre le chemin au sud <a>Chapitre 2</a></choice>"
       "<choice idref=\"03\">Vous dirigez vers l’Est <a>Chapitre 3</a></choice>";
    genererweb(chapitre);
    return 0;
}
