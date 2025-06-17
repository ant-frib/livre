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
    sscanf(first_line, "<chapter id=\"%d\">%[^<]s</chapter>", &chapter_id, chapter_title);
    char filename[64];
    snprintf(filename, sizeof(filename), "export/%d.html", chapter_id);
    FILE* html = fopen(filename, "w");
    fprintf(html, HEADER, chapter_title,chapter_id,chapter_id);
    fprintf(html, TITLE, chapter_title);
    long pos = ftell(file);
    while (fgets(line, sizeof(line), file)) {
        trim_newline(line);
        if (strstr(line, "<chapter")) {
            strcpy(first_line, line);
            fprintf(html, FOOTER);
            fseek(file, pos, SEEK_SET);
            fclose(html);
            return;
        }
        long pos = ftell(file);
        if (strstr(line, "<p>")) {
            fprintf(html, "%s\n", line);
        } 
        if (strstr(line, "<choice")) {
        int idref;
        char texte[512], lien[128];
        char *idref_ptr = strstr(line, "idref=\"");
        char *texte_ptr = strchr(line, '>');
        char *a_start = strstr(line, "<a>");
        char *a_end = strstr(line, "</a>");

        if (idref_ptr && texte_ptr && a_start && a_end) {
            sscanf(idref_ptr, "idref=\"%d\"", &idref);
            int len = a_start - (texte_ptr + 1);
            strncpy(texte, texte_ptr + 1, len);
            texte[len] = '\0';
            len = a_end - (a_start + 3);
            strncpy(lien, a_start + 3, len);
            lien[len] = '\0';
            fprintf(html, LINK,texte, idref, chapter_id,lien);
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
    while (fgets(line, sizeof(line), file)) {
        line[strcspn(line, "\n")] = '\0';
        if (strstr(line, "<chapter")) {
            process_chapter(file, line);  
            
        }
    }
    fclose(file);
    return 0;
}
