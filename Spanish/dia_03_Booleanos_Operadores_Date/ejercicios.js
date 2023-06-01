//Día 3: Ejercicios
// Ejercicios: Nivel 1
// 1. Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.
let firstName = "David", lastName = "Duarte", country = "Argentina", city = "Los Cardales", age = 31, isMarried = true, year = 2023;
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year)

// 2. Verifique si typeof '10' es igual a 10
console.log(typeof '10' === typeof 10) // false -> string != number

// 3. Verifique si parseInt('9.8') es igual a 10
console.log(parseInt('9.8') == 10) // false -> 9 != 10

// 4. Verifique cualquier valor booleano true o false.
// i. Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
console.log(4 > 3, typeof 10 == 'number', true) // true true true
// ii. Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
console.log(3 > 4, 0 != 0, false) // false false false

// 5. Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()
console.log(4 > 3) // true
console.log(4 >= 3) // true
console.log(4 < 3) // false
console.log(4 <= 3) // false
console.log(4 == 4) // true
console.log(4 === 4) // true
console.log(4 != 4) // false
console.log(4 !== 4) // false
console.log(4 != '4') // false
console.log(4 == '4') // true
console.log(4 === '4') // false
// Encuentre la longitud de Python y Jargon y haga una declaración de comparación falsa.
let longPython = 'Python'.length, longJargon = 'Jargon'.length;
console.log(longPython != longJargon) // false

// Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()
console.log(4 > 3 && 10 < 12) // true
console.log(4 > 3 && 10 > 12) // false
console.log(4 > 3 || 10 < 12) // true
console.log(4 > 3 || 10 > 12) // true
console.log(!(4 > 3)) // false
console.log(!(4 < 3)) // true
console.log(!(false)) // true
console.log(!(4 > 3 && 10 < 12)) // false
console.log(!(4 > 3 && 10 > 12)) // true
console.log(!(4 === '4')) // true
let oracion = 'No hay "on" tanto en dragon como en python' // false
console.log(
    'dragon'.includes('on') && 'python'.includes('on')
    ) // true -> si contiene 'on'

// Utilice el objeto Date para realizar las siguientes actividades
let now = new Date();
// i. ¿Qué año es hoy?
console.log(now.getFullYear()) // 2023
// ii. ¿Qué mes es hoy con un número?
console.log(now.getMonth() + 1) // 5 -> Mayo
// iii. ¿Qué fecha es hoy?
console.log(now.getDate()) // 30 -> es 30 del mes
// iv. ¿Qué día es hoy con un número?
console.log(now.getDay()) // 2 -> (martes, 2da día de la semana)
// v. ¿Cuál es la hora actual?
console.log(now.getHours()) // 7
// vi. ¿Cuántos minutos hay actualmente?
console.log(now.getMinutes()) // 13
// vii. Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
console.log(now.getTime()) // 1685441709098
console.log(Date.now()) // 1685441749406

// Ejercicioss: Nivel 2

// 1. Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).
/*
let base = parseFloat(prompt('Ingrese base'));
console.log(typeof base)
let altura = parseFloat(prompt('Ingrese altura'))
let area = 0.5 * base * altura;
console.log(`Base: ${base}\nAltura: ${altura}\nEl área del triángulo es: ${area}`)
*/

// 2. Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)
/*
let ladoA = parseFloat(prompt('Ingrese lado a'));
let ladoB = parseFloat(prompt('Ingrese un lado b'));
let ladoC = parseFloat(prompt('Ingrese un lado c'));
let perimetro = ladoA + ladoB + ladoC
alert(
    `lado a: ${ladoA}\nlado b: ${ladoB}\nlado c: ${ladoC}\nEl perímetro del triángulo es: ${perimetro}`
    )
*/

// 3. Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))
/*
let ancho = +(prompt('Ingrese el ancho'))
let largo = +(prompt(`ancho: ${ancho}

Ingrese el largo`));
let area = largo * ancho;
let perimetro = 2 * (largo + ancho);
alert(`ancho: ${ancho}
largo: ${largo}
área: ${area}
perimetro: ${perimetro}`)
*/

// 4. Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.
/*
let radio = parseFloat(prompt('Ingrese el radio'));
let area = ((3.14 * radio * radio).toFixed(2))
console.log(typeof area)
let circunferencia = 2 * 3.14 * radio;
alert(`Área del círculo: ${area}\nCircunferencia del círculo: ${circunferencia}`)
*/

// 5. Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2
/*
let x1 = parseFloat(prompt('Ingrese el punto x1'));
let y1 = 2 * x1 - 2;
let x2 = parseFloat(prompt('Ingrese el punto x2'));
let y2 = 2 * x2 - 2;
let pendiente1 = (y2 - y1) / (x2 - x1)
alert(`(${x1},${y1}) (${x2},${y2})\nPendiente: ${pendiente1}`)

let pendiente2 = (10 - 2) / (6 - 2)
alert(`pendiente1: ${pendiente1}
pendiente2: ${pendiente2}`)
*/

// 8. Calcula el valor de y (y = x2 + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.
/*
let x = parseFloat(prompt('Ingrese valor de x'))
let y = x * x + 6 * x + 9;
alert(`Valor de y: ${y}`)
*/

// Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. Calcular el salario de la persona
/*
let horas = parseFloat(prompt('¿Cuántas horas trabajó?'));
let tarifaHora = +(prompt('Ingrese tarifa por hora'));
let gananciaSemanal = horas * tarifaHora;
alert(`Horas trabajadas: ${horas}
Tarifa por hora: $${tarifaHora}
Su ganancias semanal es: $${gananciaSemanal}`)
*/

// 10. Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.
/*
let nombre = prompt('ingrese su nombre');
nombre.length > 7
    ? alert('Su nombre es largo')
    : alert('Su nombre no es tan largo')
    */

// 11. Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.
/*
let primerNombre = prompt('Ingrese su primer nombre');
let primerApellido = prompt('Ingrese su primer apellido');
let longitud = primerNombre.length === primerApellido.length
? alert(`tu primer nombre, ${primerNombre}, y tu primer apellido, ${primerApellido}, tienen la misma longitud`)
: primerNombre.length > primerApellido.length
? alert(`tu primer nombre, ${primerNombre}, es más largo que tu apellido, ${primerApellido}`)
: alert(`tu primer nombre, ${primerNombre}, es más corto que tu apellido, ${primerApellido}`)
*/

// 12. Declare dos variables myAge y yourAge y asignarles los valores iniciales y myAge y yourAge.
/*
let myAge = +(prompt('Ingresá tu edad'));
let yourAge = +(prompt('Ingresá la edad de la otra persona'));
let diferencia = myAge - yourAge;
myAge === yourAge
? alert('Tienen la misma edad')
: diferencia > 0
? alert(`Sos ${diferencia} años más grande que la otra persona`)
: alert(`La otra persona es ${-diferencia} años más grande que vos`) // el menos es para que la diferencia dé positivo
*/

// 13. Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.
/*
let añoNacimiento = +(prompt('Ingresá tu año de nacimiento'));
let edadActual = 2023 - añoNacimiento;
edadActual >= 18
? alert(`Tenés ${edadActual} años. Tenés la edad suficiente para conducir`)
: alert(`Tenés ${edadActual} años. Podrás conducir en ${18 - edadActual} años`)
*/

// 14. Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años
/*
let edad = +(prompt('Ingresá tu edad'));
let segundosVividos = edad * 365 * 24 * 60 * 60
let segundosFormateados = segundosVividos.toLocaleString() //para que formatee el número y lo muestre con puntos decimales
alert(`Viviste ${segundosFormateados} segundos`)
*/

// 15. Cree un formato de hora legible por humanos usando el objeto Date.
const now1 = new Date();
let year1 = now1.getFullYear();
let month = (now1.getMonth() + 1).toString().padStart(2, '0');
let date = now1.getDate().toString().padStart(2, '0');
let hour = now1.getHours();
let minutes = now1.getMinutes();

console.log(`${year1}-${month}-${date} ${hour}:${minutes}`)

console.log(`${date}-${month}-${year1} ${hour}:${minutes}`)

console.log(`${date}/${month}/${year1} ${hour}:${minutes}`)

// Ejercicios: Nivel 3
// 1. Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
const now2 = new Date();
let year2 = now1.getFullYear();
let month1 = now.getMonth()
let date1 = now.getDate()
let hour1 = now1.getHours();
let minutes1 = now1.getMinutes();

month1 < 10 
? month1 = '0' + month1
: month1

date1 < 10
? date1 = '0' + date1
: date1

console.log(`${year1}-${month}-${date} ${hour}:${minutes}`)

