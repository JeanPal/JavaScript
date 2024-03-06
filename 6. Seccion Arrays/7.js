//Recibes un Array de números y debes retornar un Array en donde cada 
//número sea multiplicado por dos (Utilizar métodos de array). 

var notas = [1,2,3,4,5];

var numerosDobles = notas.map(function(element) {

    return element * 2;
  
  });
  console.log(numerosDobles)