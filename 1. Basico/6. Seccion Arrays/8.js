//Suponga un array con N números enteros generados aleatoriamente y mostrados en pantalla, 
//N debe ser un número impar, mostrar en pantalla el valor que ocupa el centro del array.

const numbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10))

const mitad = numbers[Math.floor(numbers.length / 2)];

console.log("Número en la mitad del array:", mitad);

  console.log(numbers)

  