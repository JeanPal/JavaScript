const dato1 = prompt("digite un primer numero");
const dato2 = prompt("digite un segundo numero");
if (dato1 % dato2 == 0 || dato2 % dato1 == 0){
    console.log("Es multiplo entre si");
} else {
    console.log("No es multiplo entre si");
}
