// Alertas
//alert("Hola soy WIDMAN");

//Variables let; const; var;

//let nombre="Widman";
//let apellido="Sanafria";

// Mostrar por consola "console.log"

//console.log(nombre,apellido)

// Constantes "const"

const nombre = "Whidman";
const apellido = "Sanafria";
let altura = 185;

//Concatenacion

let concatenacion = nombre + " " + apellido + " " + altura;

console.log(concatenacion);

//Seleccionar elementos del DOM (elementos de la pagina)

let datos = document.querySelector("#datos");
datos.innerHTML = `
    <h1> Aprendiendo JS</h1>
    <h2>Mi Nombre Es:${nombre} ${apellido}</h2>
    <h3>Mi estatura es: ${altura}</h3>
`;
//Condiciones
altura = 180;
if (altura >= 185) {
    datos.innerHTML += "<h2 class='mayus'>¡eres una persona muy alta!</h2>";
} else {
    datos.innerHTML += "<h2 class='mayus'>¡eres una persona bajita!</h2>";
}
