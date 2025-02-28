function sumar() {
  let totalDia = document.getElementById("num1").value;
  let porcentaje = document.getElementById("num2").value;
  let mostrarDia = document.getElementById("result");
  let trabajadores = document.getElementById("trabajadores").value;
  let mostrarTrabajadores = document.getElementById("mostrarTrabajadores");
  let mostrarPorcentaje = document.getElementById("mostrarPorcentaje");
  let mostrarPropina = document.getElementById("mostrarPropina");

  totalDia = Number(totalDia);
  console.log(totalDia);

  porcentaje = Number(porcentaje);
  console.log(porcentaje);

  let porcen = porcentaje / 100;
  console.log(porcen);

  console.log(trabajadores);

  let multiplicar = porcen * totalDia;
  console.log(multiplicar);

  let dineroCadaTrabajador = multiplicar / trabajadores;
  console.log(dineroCadaTrabajador);

  mostrarDia.textContent = ` total dinero dia : ${totalDia}`;

  mostrarPorcentaje.textContent = ` Porcentaje : ${porcen}`;

  mostrarTrabajadores.textContent = ` Trabajadores : ${trabajadores}`;

  mostrarPropina.textContent = ` Propina : ${dineroCadaTrabajador}`;
}

const empledos = " camilo , julina";

console.log(empledos);

localStorage.setItem("trabajadores", " camilo  , juan  ");
console.log(localStorage.getItem("trabajadores"));

const estacion = [
  {
    nombre: "juan ",
    apellido: " pérez",
    img: "./img/autronaut.jpg",
  },

  {
    nombre: "camilo ",
    apellido: " guzman",
    img: "https://cdn.pixabay.com/photo/2017/05/26/16/08/glass-2346358_640.png",
  },
  {
    nombre: "julina ",
    apellido: " garcia",
    img: "https://w7.pngwing.com/pngs/560/279/png-transparent-world-map-globe-map-projection-world-map-miscellaneous-globe-logo-thumbnail.png",
  },
];

console.log(estacion);

localStorage.setItem("estaciones", JSON.stringify(estacion));

const queEs = localStorage.getItem("estaciones");
console.log(queEs);
console.log(typeof queEs);

const espacial = JSON.parse(localStorage.getItem("estaciones"));

console.log(espacial);

console.log(typeof espacial);

// function trabajador () {
//   espacial.forEach(elemetos =>{
//     const ver = document.getElementById("ver")
//     const verSi =document.createElement("div")
//     verSi.classList.add("verSi")
//     verSi.innerHTML = ` <div> ${elemetos.nombre} </div>
//      <div> ${elemetos.apellido} </div>
//      <img src="${elemetos.img}" alt= "${elemetos.nombre}" > `
//      ver.appendChild(verSi)

//   } )
// }

// trabajador()

const bock = document.getElementById("back");
const next = document.getElementById("next");
const url= "http://localhost:4000/posts"
const gradra = []

let posicion = 0;

function nextCarusel() {
  if (posicion === estacion.length - 1) {
    posicion = 0;
  } else {
    posicion += 1;
  }

  const carusel = document.getElementById("conteneorImagen");
  const imagenes = estacion[posicion];
  carusel.setAttribute("src", imagenes.img);
}


next.addEventListener("click", nextCarusel);

function backtCarusel() {
  if (posicion === 0) {
    posicion = estacion.length - 1;
  } else {
    posicion -= 1;
  }

  const carusel = document.getElementById("conteneorImagen");
  const imagenes = estacion[posicion];
  carusel.setAttribute("src", imagenes.img);
}


back.addEventListener("click", backtCarusel);


// pasos para instalar y crear archivo json

// npm install json-server

// npm install -g json-server
// json-server --watch db.json --port 3000
