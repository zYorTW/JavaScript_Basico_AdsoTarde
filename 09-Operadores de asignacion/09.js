/*
Operadores de asignacion, incremento y decremento.

++
+=
--
-=
*=
/=
**=

Estos operadores permiten aumentar o disminuir el valor de una variable utilizando los
operadores matematicos pero en expresiones bastante cortaas.
*/ 

let a = 1;

document.writeln("Valor de a :"+ a);
document.writeln("<br>");

//Este operador aumenta el valor en uno
a++;
document.writeln("Valor de a :"+ a);
document.writeln("<br>");

//Este operador aumenta el valor de la variable dependienddo de lo que se vaya a sumar.
a+=5;
document.writeln("Valor de a :"+ a);
document.writeln("<br>");

//Este operador disminuye el valor en uno
a--;
document.writeln("Valor de a :"+ a);
document.writeln("<br>");

//Este operador disminuye el valor de la variable dependienddo de lo que se vaya a restar.

a-=2;
document.writeln("Valor de a :"+ a);
document.writeln("<br>");

a*=2; // Este operador multiplica el valor de la variable dependiendo de lo que se quiera multiplicar
document.writeln("Valor de a :"+ a);
document.writeln("<br>");

a/=2; // Este operador divide el valor de la variable dependiendo de lo que se quiera dividir
document.writeln("Valor de a :"+ a);
document.writeln("<br>");


a**=2;  //Este valor potencia el valor de la variable dependiendo de lo que se quiera potenciar
document.writeln("Valor de a :"+ a);
document.writeln("<br>");