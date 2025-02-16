/*  <!-- Lo tipos de datos son las distintas definiciones o posibilidades que
      tenemos para almacenar datos en nuestras variables.
      Cuando declaramos una variable u la inicializamos, la estamos asignando
      un valor y ese valor tiene un tipo de dato bien sea de tipo: entero,
      decimal, caracter, booleano e incluso, puede ser una lista, una 
      estructura entre todos -->*/

      let nombre = "Yorland"; // Variable de tipo String
      let cantidad = 55; // Variable de tipo int
      let precio = 10.85; // Variable de tipo decimal
      let verdadero = true; // Variable de tipo booleano
      let falso = false; // Variable de tipo booleano
      let nulo = null; // Variable de tipo nulo

      document.writeln(nombre);
      document.writeln("<br>");
      document.writeln(cantidad);
      document.writeln("<br>");
      document.writeln(precio);
      document.writeln("<br>");
      document.writeln(verdadero);
      document.writeln("<br>");
      document.writeln(falso);
      document.writeln("<br>");
      document.writeln(nulo);
      document.writeln("<br>"); 


      // JavaScript tambien maneja tipos de datos object. Esto significa que, es un tipo de dato que puede contener propiedades y metodos.

      let persona = {nombre:"Yorland", edad: 18, estatura: 1.76, sexo: "Masculino"};

      document.writeln(persona.nombre); // Para taer el contenido de la variable persona, debe llamar a ka variable y seguido colocar el punto dado que es de tipo object e inmediatamente dirá que tipo de dato desea ver para asignarlo.

      document.writeln("<br>");

      document.writeln(
      'nombre: ', persona.nombre, ' ',
      'estatura: ', persona.estatura, ' ',
      'edad: ', persona.edad, ' ',
      'genero: ', persona.sexo, ' '
      
      ); // Concantenacion y separador de cadena de vacio y salto de linea con <br>