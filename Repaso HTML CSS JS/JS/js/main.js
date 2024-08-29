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


// Bucles  (inicialisador + condicion + modificador)

for (let año = 2000; año <= 2023; año++) {
    datos.innerHTML += `<h3> El año es: ${año}<h3>`
    
};


//Array 
 let nombres= ["Whidman","Sam","Eliot"];

 let divNmobres = document.querySelector("#nombres");
// divNmobres.innerHTML = nombres[1]

divNmobres.innerHTML = "<h1 class='nombresList'>Listado de nombres<h1><ul>";

nombres.forEach(nombre =>{
    divNmobres.innerHTML += "<li>"+nombre+"<li>"
})
    //Otra forma 
for (let nombre of nombres) {
    divNmobres.innerHTML += "<li>"+nombre+"<li>"
    
}

divNmobres.innerHTML += "<ul>"




