
livre: build/main.o
	gcc build/main.o -o livre

build/main.o: main.c
	mkdir -p build
	gcc -c main.c -o build/main.o