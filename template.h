#ifndef TEMPLATE_H
#define TEMPLATE_H
#define HEADER "<!DOCTYPE html>\n" \
"<html>\n" \
"<head>\n" \
"<meta charset=\"UTF-8\">\n" \
"<title>%s</title>\n" \
"<link rel=\"stylesheet\" href=\"../stylegeneral.css\" />\n" \
"<link rel=\"stylesheet\" href=\"../CSS/%d.css\" />\n"\
"<script src=\"../jsgeneral.js\" defer></script>\n" \
"<script src=\"../JS/%d.js\" defer></script>\n" \
"<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n" \
"<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n" \
"<link href=\"https://fonts.googleapis.com/css2?family=VT323&display=swap\" rel=\"stylesheet\">\n" \
"</head>\n" \
"<body>\n"



#define FOOTER "</body>\n</html>\n"
#define TITLE "<h1>%s</h1>\n"
#define PARAGRAPH "<p>%s</p>\n"
#define LINK "<p class=\"choice\"> %s <span id=\"pour\"></span> <a href=\"%d.html\" id=\"%d\">%s</a></p><br/>\n"

#endif
