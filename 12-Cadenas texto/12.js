/* 
Las cadenas de texto en JavaScript pueden ser parametrizadas con comillas simples, comillas 
dobles o comillas invertidas.
*/

let txt1 = 'Javascript con comillas simple';
document.writeln(txt1+ '<br>');

let txt2 = 'Javascript con comillas doble';
document.writeln(txt2+ "<br>");

let txt3 = 'Javascript con comillas invertidas';
document.writeln(txt3+ `<br>`);

let textoComillas = 'Esto es la "verdad" absoluta de todo lo que ha sucedido';
document.writeln(textoComillas+ `<br>`);

let textoSaltoEnlinea = 'Esto es una cadena de texto bastante larga que necesita ser dividida en varias lineas, \ <br> de lo contrario  es muy dificil para el lector leer todo en una sola hilera de texto. \ <br>  Lorem ipsum dolor sit amet consectetur adipisicing elit. \ <br> Eius, quibusdam. Earum laboriosam provident vitae architecto, veniam et dolorem? Vitae, exercitationem dignissimos. Quisquam ipsam aspernatur \ <br> velit repellendus voluptas fugiat eius illum';
document.writeln(textoSaltoEnlinea);