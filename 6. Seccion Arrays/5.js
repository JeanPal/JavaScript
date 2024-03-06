//Dado un vector de enteros, comprobar el mayor, el menor y por último la media de todos.

var numeros = [2, 6, 7, 8, 1, 9, 10, 3, 1, 20];

var suma = 0;
for (var i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

var media = suma / numeros.length;
console.log("La media de los números es:", media);

numeros.sort(function(a, b) {
    return b - a; 
  });
  

console.log("El Mayor es:", numeros[0]);
console.log("El Menor es:", numeros[numeros.length - 1]);