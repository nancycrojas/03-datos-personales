//Datos personales

//Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.


const nombre = prompt("Por favor ingresa tu nombre");
const apellido = prompt("Por favor ingresa tu apellido");
let edad = prompt("Por favor ingresa tu edad");
const nacionalidad = prompt("Por favor ingresa tu nacionalidad");
const documento = prompt("Por favor ingresa tu numero de documento");
//alert("Nuevo usuario agregado al sistema:" + " " + nombre + " " + apellido + ", " + edad + " años, " + nacionalidad + ", " + "DNI: " + documento + ".");

//Template strings
alert(`Nuevo usuario agregado al sistema: ${nombre} ${apellido}, ${edad} años, ${nacionalidad}, DNI ${documento}.`)