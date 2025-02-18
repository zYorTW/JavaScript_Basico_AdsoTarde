/* 
Las funciones matematicas se utilizan con la clase math. Esta clase contiene funciones 
matematicas que permiten realizar operaciones dentro del codigo
*/

// El round redondea el numero

var precio = Math.round(399.53)   
document.writeln("Precio redondeado: "+precio+"<br>");

var precio = Math.round(399.43)   
document.writeln("Precio redondeado: " +precio+ "<br>");

//Convierte el valor a un entero.

var precio = Math.ceil(299.83);
document.writeln('Valor convertido a entero: '+precio +'<br>')

var precio = Math.ceil(299.23);
document.writeln('Valor convertido a entero: '+precio +'<br>')



var precio = Math.floor(540.93);
document.writeln('Valor convertido a entero: '+precio +'<br>')

var precio = Math.floor(540.28);
document.writeln('Valor convertido a entero: '+precio +'<br>')

//Calcular el seno de un angulo

var seno = Math.sin(45);
document.writeln('Seno de un angulo de 45° es: '+ seno+ '<br>')


//Calcular el coseno de un angulo

var coseno = Math.cos(45);
document.writeln('Coseno de un angulo de 45° es: '+ coseno+ '<br>')

//Calcular la tangente de un angulo

var tangnete = Math.tan(45);
document.writeln('tangente de un angulo de 45° es: '+ tangnete+ '<br>')

var expo = Math.exp(2);
document.writeln('El exponencial de 2 e: '+expo+'<br>');

var expont = Math.pow(4,2);
document.writeln('El exponente calculado es: '+expont+'<br>');

var logaritmo = Math.log(10);
document.writeln('El logaritmo de 10 es: '+logaritmo+'<br>');

var absoluto = Math.abs(-10);
document.writeln('El vlaor absolto de -10 es: '+absoluto+'<br>');

var maximo = Math.max(10, 50 , 600, 1, 9);
document.writeln('El maximo de la secuencia numerica es: '+maximo+'<br>');

var minimo = Math.min(10, 50 , 600, 1, 9);
document.writeln('El minimo de la secuencia numerica es: '+minimo+'<br>');

var aleatorio = Math.random();
document.writeln('El valor aleatorio es: '+aleatorio+'<br>');

var aleatorio = Math.random(5, 6);
document.writeln('El valor aleatorio es: '+aleatorio+'<br>');

var aleatorio = Math.round(Math.random()*5); // Cacula un valor aleatorio hasta 5
document.writeln('El valor aleatorio es: '+aleatorio+'<br>');

var raiz = Math.sqrt(81);
document.writeln('La raiz cuadrada es: '+raiz+'<br>');
