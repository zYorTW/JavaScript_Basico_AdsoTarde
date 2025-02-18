let palabra = 'JavaScript';
document.writeln("El texto es: "+palabra+"<br>");

// Tamaño de un texto.

document.writeln("Extraccion de caracteres: "+palabra.length+"<br>");

//Extraccion de caracteres usando slice y unos parametros de entrada para sacarlos primeros 4 caracteres

document.writeln("Extraccion de caracteres: "+palabra.slice(0, 4)+"<br>");

// Extracion de los ultimos 3 caracteres con indice negativo

document.writeln("Extraccion de caracteres: "+palabra.slice(-3)+"<br>");

//Extraccion de carateres utilizando el metodo substring

document.writeln("Extraccion de caracteres: "+palabra.substring(0,5)+"<br>");

//Cambiar texto de una variable.

let saludo = "Hola a todos";
document.writeln(saludo+"<br>");

saludo = saludo.replace("Hola a todos","Adios a todos");
document.writeln(saludo+"<br>");

//Convertimos un texto en Mayusculas sostenidas.

document.writeln(palabra.toUpperCase()+'<br>')

//Convertir un texto en Minusculas completamente

document.writeln(palabra.toLowerCase()+'<br>')

//Unir un texto a otro

let texto = "Bienvenidos al curso de ";
document.writeln(texto.concat(palabra)+'<br>')

//Eliminar espacios en blanco

let textoEspaciado = "Que   tal   saludos     cordial es a todos         todas"; 
document.writeln(textoEspaciado+'<br>');
document.writeln(textoEspaciado.trimStart()+'<br>');

//Cantidad de caracteres de una palabra.

document.writeln(palabra.split("script")+'<br>');
document.writeln(palabra.split("java")+'<br>');
