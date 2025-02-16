/* 
Var en JavaScript, se utiliza para declarar las variables y su alcance puede ser
 global o dentro de una funcion, dependiendo de donde se declare

Las variables declaradas con var se elevan (hoisting), lo que significa que
 su declaracion se mueve al inicio del contexto en el que se encentran 
 (Global o de Funcion)

 Una variable declarada con var puede ser re-declarada y re-inicializada sin causar errores.
  Aunque, esto puede generar comportamientos inesperados.
 */ 

  var nombre; // se declara la variable
  nombre = "Yorland";

  var apellido = "Insignares"; // Se declara la variable y se inicializa


  /*  En JavaScript las instrucciones son case sensitive y esto significa que
  son sensibles a mayusculas y minusculas */

  var Nombre; // se declara la variable
  Nombre = "Sebastian";

  var Apellido = "Payan"; // Se declara la variable y se inicializa

  
  var _nombre = "Bach"; // otra forma de declarar variables
  var NOMBRE = "Christina"; // otra forma de declarar variables
  var $_NoMbre = "Splinter"; // otra forma de declarar variables

  document.writeln(nombre);
  document.writeln(Nombre);
  document.writeln(apellido);
  document.writeln(Apellido);
  document.writeln(_nombre);
  document.writeln(NOMBRE);
  document.writeln($_NoMbre);

//   let en JavaScript es otra forma de declarar variables. A diferencia de var, las variables declaradas con let tienen alcance de bloque, lo que significa que solo son accesibles dentro del bloque de codigo donde se declaran.

// Ejemplo Dentro de un if, fot, etc. Ademas, let no permite la re-declaracion de la misma variable dentro del mismo bloque.

//Si intentas accede a una variable declarada con let antes de su inicializacion obtendras un error,

let saludo = "hola";
let Saludo = "Hola";
let _saludo = "_hola";
let SALUDO = "HOLA";
let $_Saludo = "$ Hola";

document.writeln(saludo);
document.writeln(Saludo);
document.writeln(_saludo);
document.writeln(SALUDO);
document.writeln($_Saludo);