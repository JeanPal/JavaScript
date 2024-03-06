const matriz = Array.from({ length: 5 }, () => Array.from({ length: 5 }, (_,index) => index+1)

);

let transpuesto = matriz[0].map((_, columna) => matriz.map(fila => fila[columna]));

let sumasColumnas = transpuesto.map(columna => columna.reduce((a, b) => a + b));
let sumasFilas = matriz.map(fila => fila.reduce((a, b) => a + b));


console.table(matriz);
console.table(sumasColumnas);
console.table(sumasFilas);