let peli1 = +prompt("primer precio de pelicula");
let peli2 = +prompt("segundo precio de pelicula");
let peli3 = +prompt("precio precio de pelicula");
if (peli1<peli3 && peli2<peli3) {
    console.log("su precio total es ="+ (peli1+peli2));
} else if (peli1>peli2 && peli3>peli2) {
    console.log("su precio total es ="+ (peli1+peli3));
} else {
    console.log("su precio total es ="+ (peli2+peli3));
}