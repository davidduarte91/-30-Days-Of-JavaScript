// Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.
/*
let edad = prompt('Ingrese su edad');
if (edad >= 18) {
    prompt('Tiene la edad suficiente para conducir')
} else {
    alert(`Tiene que esperar ${18 - edad} años para conducir`)
}
*/

// 2. Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.
/*
let myAge = +prompt('Ingresa tu edad');
let yourAge = +prompt('Ingresá la edad de la otra persona');
let diferencia = myAge - yourAge;
if (diferencia > 0) alert(`Sos ${diferencia} años mayor que él/ella`)
else alert(`El/ella es ${-diferencia} años mayor que vos`);
console.log(typeof myAge)
*/

// 3. Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes
let a = 4;
let b = 3;
if (a < b) console.log(`${a} es menor que ${b}`);
else console.log(`${a} es mayor que ${b}`);

a > b
? console.log(`${a} es mayor que ${b}`)
: console.log(`${a} es menor que ${b}`)

// 4. Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript?
/*
let number = +prompt('Ingrese un número para saber si es par');
if (number % 2 === 0) {
    alert(`${number} es un número par`)
} else {
    alert(`${number} no es un número par`)
}
*/

// Ejercicios: Nivel 2
// 1. Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
/*
let puntaje = +prompt('Ingrese el puntaje');
let calificación;
switch (true) {
    case (puntaje >= 80 && puntaje <= 100):
        calificación = 'A';
        break;
    case (puntaje >= 70 && puntaje <=89):
        calificación = 'B';
        break;
    case (puntaje >= 60 && puntaje <= 69):
        calificación = 'C';
        break;
    case (puntaje >= 50 && puntaje <= 59):
        calificación = 'D';
        break;
    case (puntaje >= 0 && puntaje <=49):
        calificación = 'F';
        break;
    default:
        calificación = 'Puntaje inválido'
        break;
}

alert(`La calificación del estudiante es: ${calificación}`)
*/

// 2. Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :
/* Septiembre, Octubre o Noviembre, la temporada es Otoño.
Diciembre, Enero o Febrero, la temporada es Invierno.
Marzo, Abril o Mayo, la temporada es Primavera
Junio, Julio o Agosto, la temporada es Verano */
/*
let estacionInput = prompt('Ingresá el mes');
estacion = estacionInput.toLowerCase();
let temporada;
switch (estacion) {
    case "septiembre":
    case "octubre":
    case "noviembre":
        temporada = "Primavera";
        break;
    case "diciembre":
    case "enero":
    case "febrero":
        temporada = "Verano";
        break;
    case "marzo":
    case "abril":
    case "mayo":
        temporada = "Otoño";
        break;
    case "junio":
    case "julio":
    case "agosto":
        temporada = "Invierno";
        break;
    default:
        alert('NO es un mes válido')
}
if(temporada) {
    let estacionCapitalizada = estacionInput.charAt(0).toUpperCase() + estacion.slice(1);
    alert(`Estamos en el mes de ${estacionCapitalizada} y la temporada es: ${temporada}`)
}
*/
// Se agregó un bloque if para verificar si se ha asignado un valor a la variable temporada dentro del switch. Si no se ha asignado un valor (por ejemplo, si el mes ingresado no coincide con ninguno de los casos), no se muestra el mensaje final.

// 3. Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.
/*
let diaSemanaInput = prompt('Ingrese el día de la semana');
let diaModificado = diaSemanaInput.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
let estado; // En este código, se aplica la función normalize("NFD") al valor ingresado en el prompt para convertir los caracteres a su forma descompuesta. Luego, se utiliza replace(/[\u0300-\u036f]/g, "") para eliminar los acentos del texto. Así, se realiza la comparación correctamente sin importar si se ingresan los días de la semana con o sin acentos.
switch (diaModificado) {
    case "lunes":
    case "martes":
        estado = "día laborable";
        break;
    case "miercoles":
        estado = "día laborable";
        diaModificado = "miércoles";
        break;
    case "jueves":
    case "viernes":
        estado = "día laborable";
        break;
    case "sabado":
        estado = "fin de semana";
        diaModificado = "sábado";
        break;
    case "domingo":
        estado = "fin de semana";
        break;
    default:
        estado = "día inválido";
        break;
}
alert(`El ${diaModificado} es ${estado}`)
*/

// Ejercicios: Nivel 3
// Escribe un programa que diga el número de días en un mes.
/*
let mesInput = prompt('Ingrese el mes');
let mesModificado = mesInput.toLowerCase();
let month;

switch (mesModificado) {
    case "enero":
        month = 0;
        break;
    case "febrero":
        month = 1;
        break;
    case "marzo":
        month = 2;
        break;
    case "abril":
        month = 3;
        break;
    case "mayo":
        month = 4;
        break;
    case "junio":
        month = 5;
        break;
    case "julio":
        month = 6;
        break;
    case "agosto":
        month = 7;
        break;
    case "septiembre":
        month = 8;
        break;
    case "octubre":
        month = 9;
        break;
    case "noviembre":
        month = 10;
        break;
    case "diciembre":
        month = 11;
        break;
    default:
        alert(`${mesInput} no es un mes válido`)
}

if(month != null) {
    let lastDayOfMonth = new Date(2023, month + 1, 0).getDate();
    alert(`${mesModificado} tiene ${lastDayOfMonth} días`)
}
*/

// 2. Escribe un programa que diga el número de días en un mes, ahora considera un año bisiesto.
let mesInput = prompt('Ingresa el mes');
let mesModificado = mesInput.toLowerCase()
let añoInput = +prompt('Ahora ingresa el año');

let mesNumero;

switch(mesModificado) {
    case "enero":
        mesNumero = 0;
        break;
    case "febrero":
        mesNumero = 1;
        break;
    case "marzo":
        mesNumero = 2;
        break;
    case "abril":
        mesNumero = 3;
        break;
    case "mayo":
        mesNumero = 4;
        break;
    case "junio":
        mesNumero = 5;
        break;
    case "julio":
        mesNumero = 6;
        break;
    case "agosto":
        mesNumero = 7;
        break;
    case "septiembre":
        mesNumero = 8;
        break;
    case "octubre":
        mesNumero = 9;
        break;
    case "noviembre":
        mesNumero = 10;
        break;
    case "diciembre":
        mesNumero = 11;
        break;
    default:
        mesNumero = null;
        alert(`${mesModificado} no es un mes válido`)
}

let normalOBisiesto = "no es bisiesto";

if(mesNumero !== null) {
    if((añoInput % 4 === 0 && añoInput % 100 !== 0) || añoInput % 400 === 0) {
        normalOBisiesto = "es bisiesto"
    }

    let lastDayOfMonth = new Date(añoInput, mesNumero + 1, 0).getDate();

    alert(`el mes de ${mesModificado} del año ${añoInput} tiene ${lastDayOfMonth} días y ${normalOBisiesto}`)
}

