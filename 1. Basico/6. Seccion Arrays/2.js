//Crea un array o arreglo unidimensional con un tamaño de 10, inserta los valores numéricos que desees 
//de la manera que quieras y muestra por pantalla la media de valores del array.

var numeros = [2, 6, 7, 8, 1, 9, 10, 3, 1, 10];


var resultado = numeros.reduce(function(total, element) {

    return total + element;
}, 0);

  var media = resultado / numeros.length;
  console.log(media); 

  


  