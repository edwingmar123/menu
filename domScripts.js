 console.log("hola mundo");

 let numeros =  []

 console.log(numeros)
numeros.push(1)
numeros.push(2);
numeros.push(3);
numeros.push(4);
numeros.push(5);
numeros.push(6);
const nuevosNumeros = numeros
nuevosNumeros.splice(3,4);
console.log(nuevosNumeros);


function hola (){
    const hola = 2;

    if ( hola === 2 ){
        return true;
    } else {
        return false;
    }
}

console.log(hola());

function multiplicar (numeros) {
    return numeros.map(num =>{
        if ( numeros % 2 === 0){
            return num * 2;
        } else {
            return num * 3

        }
    }) 

}

const resultado = multiplicar(numeros);
console.log(resultado);


const inputName = document.getElementById('name');
const inputFecha = document.getElementById('fecha');
const inputHora = document.getElementById('hora');
const btnAgregar = document.getElementById('btn');
const listaCitas = document.getElementById('listaCitas');

let  citas = []

function agregarCita() {
    const nombre = inputName.value.trim()
    const fecha = inputFecha.value
    const hora = inputHora.value

    if ( nombre === "" || fecha === "" || hora === "") {
        alert ("Todos los campos son obligatorios")
        return}

    citas.push({
        nombre,
        fecha,
        hora,
    
    })
    mostrarCitas()

    inputName.value = ''
    inputFecha.value = ''
    inputHora.value = ''
}

    console.log(citas);


  function eliminar (index) {
    if(confirm (" seguro que si desea eliminar la cita")) {
        citas.splice(index,1)
        mostrarCitas();
    }

  }

  function editar(index){
    const cita = citas[index]
    const nuevoNombre = prompt ("ingrese nuevo nombre" , cita.nombre)
    const nuevofecha = prompt ("ingrese nuevo fecha" , cita.fecha)
    const nuevohora = prompt ("ingrese nueva hora" , cita.hora)

if(nuevoNombre && nuevofecha && nuevohora){
    citas[index] = {
        nombre: nuevoNombre,
        fecha: nuevofecha,
        hora: nuevohora,

    }

    mostrarCitas();

  }

  }

    
    btnAgregar.addEventListener("click", agregarCita);

    function mostrarCitas () {
        listaCitas.innerHTML = ''
        citas.forEach((cita, index) =>{
            const li = document.createElement("li")
            li.innerHTML = ` ${cita.nombre} - ${cita.fecha} - ${cita.hora}
            <button class = "btneditar" onClick= "editar(${index})" > Editar </button>
            
            <button class = "btnEliminar" onclick = "eliminar(${index})" > Eliminar </button}) ` 

            listaCitas.appendChild(li)
        })



    }
