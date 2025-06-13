#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "template.h"
#include <sys/stat.h>
#include <sys/types.h>
void process_chapter(FILE* file, char* first_line);
void trim_newline(char* line);
void trim_newline(char* line) {
    size_t len = strlen(line);
    if (len > 0 && line[len - 1] == '\n')
        line[len - 1] = '\0';
}

void process_chapter(FILE* file, char* first_line) {
    char line[512];
    int chapter_id;
    char chapter_title[256];
    trim_newline(first_line);
    sscanf(first_line, "<chapter id=\"%d\">%[^<]</chapter>", &chapter_id, chapter_title);
    char filename[64];
    snprintf(filename, sizeof(filename), "export/%0d.html", chapter_id);
    FILE* html = fopen(filename, "w");
    fprintf(html, HEADER, chapter_title);
    fprintf(html, TITLE, chapter_title);
    while (fgets(line, sizeof(line), file)) {
        trim_newline(line);
        if (strstr(line, "<chapter")) {
            strcpy(first_line, line);
            fclose(html);
            return;
        }
        if (strstr(line, "<p>")) {
            fprintf(html, "%s\n", line);
        } else if (strstr(line, "<choice")) {
            int idref;
            char texte[512], lien[128];
            if (sscanf(line, "<choice idref=\"%d\">%[^<]<a>%[^<]</a></choice>", &idref, texte, lien) == 3) {
                fprintf(html, LINK, texte, idref, lien);
            }
        }
    }
    fprintf(html, FOOTER);
    fclose(html);
}


int main(void) {
    FILE* file = fopen("../livre/book.txt", "r");
    if (!file) {
    perror("Erreur lors de l'ouverture de book.txt");
    return 1;
}
    char line[512];
    struct stat st = {0};
    if (stat("export", &st) == -1) {
        mkdir("export", 0700);
    }
    while (1) {
        if (fgets(line, sizeof(line), file)==NULL) {
            break;
        }
        line[strcspn(line, "\n")] = '\0';

        if (strstr(line, "<chapter")) {
            process_chapter(file, line);
        }
    }
    fclose(file);
    return 0;
}
