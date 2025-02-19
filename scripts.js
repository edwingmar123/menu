

function sumar() {
  let totalDia = document.getElementById("num1").value;
  let porcentaje = document.getElementById("num2").value;
  let mostrarDia = document.getElementById("result");
  let trabajadores = document.getElementById("trabajadores").value;
  let mostrarTrabajadores = document .getElementById("mostrarTrabajadores");
  let mostrarPorcentaje = document .getElementById("mostrarPorcentaje");
  let mostrarPropina = document .getElementById("mostrarPropina");
  
totalDia = Number(totalDia);
console.log(totalDia);

porcentaje = Number(porcentaje);
console.log(porcentaje);

let porcen = porcentaje / 100;
console.log(porcen);
  
console.log(trabajadores);

let multiplicar =  porcen * totalDia; 
console.log(multiplicar);
 
let dineroCadaTrabajador = multiplicar / trabajadores
console.log(dineroCadaTrabajador);

  mostrarDia.textContent = ` total dinero dia : ${totalDia}`;

  mostrarPorcentaje.textContent = ` Porcentaje : ${porcen}`;

  mostrarTrabajadores.textContent = ` Trabajadores : ${trabajadores}`;

  mostrarPropina.textContent = ` Propina : ${dineroCadaTrabajador}`;

}



