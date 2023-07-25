
// 1. Declara un array vacío.
let arr = []
console.log(arr) // []

// 2. Declara un array con mas de 5 elementos.
let arr1 = Array(5)
console.log(arr1) // (5) [vacío × 5]

// 3. Encuentra la longitud de tu array.
console.log(arr.length, arr1.length)

// 4.Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
let arr2 = ["cuchara", "cuchillo", "tenedor", "plato", "taza", "sartén", "olla"];
console.log(arr2[0]);

let elemMedio = Math.floor(arr2.length/2) // toma la longitud del array, divide por 2 y redondea hacia abajo para que dé el número exacto del medio y no el indice
console.log(arr2[elemMedio])

// Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.
let mixedDataTypes = [
    "David", 
    31,
    true, 
    {esposa: "Isabel", hija: "Aruna"},
    {skills: ["teclado", "programación", "canto"]}
]
console.log(mixedDataTypes.length) // 5

// 6. Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7. Imprima el array usando console.log().
console.log(itCompanies)

// 8.Imprima el número de empresas en el array.
console.log(itCompanies.length)

//9.Imprime la primer empresa , la intermedia y la última empresa
console.log(itCompanies[0]) // Facebook

let elemMedioIt = Math.floor(itCompanies.length/2)
console.log(itCompanies[elemMedioIt]) // Apple

console.log(itCompanies[itCompanies.length-1]) // Amazon

// 10.Imprime cada empresa.
console.log(itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3], itCompanies[4], itCompanies[5], itCompanies[6])

//11.Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
console.log(itCompanies[0].toUpperCase(), itCompanies[1].toUpperCase(), itCompanies[2].toUpperCase(), itCompanies[3].toUpperCase(), itCompanies[4].toUpperCase(), itCompanies[5].toUpperCase(), itCompanies[6].toUpperCase())

//12. Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de IT.
let oracion = `${itCompanies.join(", ")} son grandes empresas de IT`
console.log(oracion)

//13. Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
/*
let consulta = prompt('Ingresa la empresa');
let primeraLetra = consulta[0].toUpperCase(); // 
let restoPalabra = consulta.substring(1); // también sirve slice(1)
let palabraCompleta = primeraLetra.concat(restoPalabra) // une la primera letra hecha mayuscula con el resto de la palabra

itCompanies.includes(palabraCompleta)
? alert('Existe')
: alert('La empresa no existe')
*/

// 14. Filtre las empresas que tienen más de una 'o' sin el método filter() ---- VOLVER A HACER

// const itCompanies1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// const input = prompt('Ingrese el nombre de una compañía');
// const palabraCompleta = input.charAt(0).toUpperCase() + input.slice(1);
// const regex = /o/gi;

// const palabraCompletaMin = palabraCompleta.toLowerCase();
// const existeEnLista = itCompanies1.some(company => company.toLowerCase() === palabraCompletaMin);

// if (!existeEnLista) {
//   alert('No existe en la lista');
// } else {
//   const ocurrencias = (palabraCompleta.match(regex) || []).length;
//   if (ocurrencias > 1) {
//     alert(`${palabraCompleta} tiene más de una "o"`);
//   } else {
//     alert(`${palabraCompleta} no tiene más de una "o"`);
//   }
// }
/*Solicita al usuario que ingrese el nombre de una compañía mediante el método prompt() y almacena la entrada en la variable input.

Convierte la primera letra de input a mayúscula y el resto en minúsculas, guardando el resultado en la variable palabraCompleta.

Crea una expresión regular regex que busca todas las ocurrencias de la letra "o" en una cadena, sin tener en cuenta mayúsculas o minúsculas.

Convierte palabraCompleta a minúsculas y almacena el resultado en palabraCompletaMin.

Utiliza el método some() para verificar si alguna compañía en itCompanies coincide con palabraCompletaMin, permitiendo la comparación insensible a mayúsculas y minúsculas.

Si la compañía ingresada (palabraCompleta) no existe en la lista (itCompanies), muestra una alerta que indica que no está en la lista.

Si la compañía existe en la lista, utiliza el método match() y la expresión regular regex para contar el número de ocurrencias de "o" en palabraCompleta.

Compara el número de ocurrencias (ocurrencias) con 1 para determinar si tiene más de una "o" o no.

Muestra una alerta con el resultado, indicando si la compañía tiene más de una "o" o no. */
// -------------------------------
/*Usando el método filter

const itCompanies3 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

const empresasConMasDeUnaO = itCompanies.filter((company) => {
  const regex = /o/gi;
  const ocurrencias = (company.match(regex) || []).length;
  return ocurrencias > 1;
});

console.log(empresasConMasDeUnaO);
 */

// 15. Ordene el array usando el método sort()
itCompanies.sort();
console.log(itCompanies) // ['Amazon', 'Apple', 'Facebook', 'Google', 'IBM', 'Microsoft', 'Oracle']

// 16. Invierte la array usando el método reverse()
itCompanies.reverse();
console.log(itCompanies) // ['Oracle', 'Microsoft', 'IBM', 'Google', 'Facebook', 'Apple', 'Amazon']

// 17. Cortar las primeras 3 empresas del array
let tresPrimerasCompanies = itCompanies.slice(0, 3)
console.log(tresPrimerasCompanies) // ['Oracle', 'Microsoft', 'IBM']

// 18. Cortar las últimas 3 empresas del array
console.log(itCompanies[itCompanies.length -3]) // Facebook -> es solo de prueba

let tresUltimasCompanies = itCompanies.slice(itCompanies.length -3) // Cuenta desde el último para atrás
console.log(tresUltimasCompanies) // ['Facebook', 'Apple', 'Amazon']

// 19. Cortar la empresa o empresas intermedias de IT del array. Eliminar compañías que no son ni la primera ni la última en el array
let itIntermedias = itCompanies.slice(1, itCompanies.length-1);
console.log(itIntermedias) // ['Microsoft', 'IBM', 'Google', 'Facebook', 'Apple'] -> Eliminó Oracle y Amazon

// 20. Eliminar la primera empresa de TI del array (splice modifica al original)
itCompanies.splice(0, 1)
console.log(itCompanies) // ['Microsoft', 'IBM', 'Google', 'Facebook', 'Apple', 'Amazon'] -> eliminó Oracle. Viene de la línea 126

// 21. Eliminar la empresa o empresas intermedias de IT del array
itCompanies.splice(1, itCompanies.length-2)
console.log(itCompanies) // ['Microsoft', 'Amazon'] -> quedaron solo los extremos. Viene de la linea 144

// 22. Elimine la última empresa de TI del array
itCompanies.splice(1, 1);
console.log(itCompanies) // ['Microsoft']

// 23. Eliminar todas las empresas de TI
itCompanies.splice(0);
console.log(itCompanies) // []

// ------------------------------------------
// Ejercicios: Nivel 2

// 1.Cree un archivo de countries.js separado y almacene el array de países en este archivo, cree un archivo separado web_techs.js y almacene el array de webTechs en este archivo. Acceda a ambos archivos en el archivo main.js
console.log("Países:", countries) // Países: (11) ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
console.log("Tecnologías web:", webTechs) // Tecnologías web: (7) ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

// 2.Primero elimine todos los signos de puntuación y cambie de string a array y cuente el número de palabras en el array
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let word = text.match(/\w+/g)
console.log(word) // ['I', 'love', 'teaching', 'and', 'empowering', 'people', 'I', 'teach', 'HTML', 'CSS', 'JS', 'React', 'Python']
console.log(word.length) // 13

// 3. En el siguiente carrito de compras agregue, elimine, edite artículos
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// Agregue 'Meat' al comienzo de su carrito de compras si aún no se ha agregado
shoppingCart.unshift('Meat');
console.log(shoppingCart) // ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey']

// Agregue 'Sugar' al final de su carrito de compras si aún no se ha agregado
shoppingCart.push('Sugar');
console.log(shoppingCart) // ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar']

// Elimine 'Honey' si es alérgico a la miel (honey)
let indiceHoney = shoppingCart.indexOf('Honey');
if(indiceHoney !== -1) {
    shoppingCart.splice(indiceHoney, 1) 
}
console.log(shoppingCart) // ['Meat', 'Milk', 'Coffee', 'Tea', 'Sugar']

//Modificar Tea a 'Green Tea'
let indiceTea = shoppingCart.indexOf('Tea');
shoppingCart.splice(indiceTea, 1, 'Green Tea');
console.log(shoppingCart) // ['Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar']

// 4.En la matriz de países, verifique si 'Etiopía' existe en la matriz; si existe, imprima 'ETIOPÍA'. Si no existe agregar a la lista de países.
let existeEthiopia = countries.includes('Ethiopia');
if(existeEthiopia === true) console.log('ETHIOPIA')

// 5. En el array webTechs, verifique si Sass existe en el array y si existe, imprima 'Sass es un preproceso de CSS'. Si no existe, agregue Sass al array e imprima el array.
let existeSass = webTechs.includes('Sass');
if (existeSass === true) {
    console.log('Sass es un preprocesador de CSS')
} else {
    webTechs.push('Sass');
    console.log(webTechs) // ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB', 'Sass']
}

// 6.Concatene las siguientes dos variables y guardelas en una variable fullStack.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack); // ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'Express', 'MongoDB']

// -----------------------
// Ejercicios: Nivel 3
//1. La siguiente es una matriz de 10 edades de estudiantes:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Ordene la matriz y encuentre la edad mínima y máxima
ages.sort();
console.log(ages) // [19, 19, 20, 22, 24, 24, 24, 25, 25, 26]

let ageMin = Math.min(...ages) // Operador de propagación
console.log(ageMin) // 19

let ageMax = Math.max(...ages)
console.log(ageMax) // 26

// Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
let mitad = ages[ages.length/2] + ages[Math.floor((ages.length-1)/2)]
console.log(mitad/2)
/* como lo hizo chatgpt. Directamente selecciona el indice del medio, y si son dos, los suma y los divide.

// Ordenar el array de menor a mayor
ages.sort((a, b) => a - b);

// Obtener la longitud del array
const cantidadEdades = ages.length;

// Calcular el índice del elemento medio
const indiceMedio = Math.floor(cantidadEdades / 2);

// Obtener el valor del elemento medio o el promedio de los dos elementos intermedios
let edadMedia;
if (cantidadEdades % 2 === 0) {
  // Si la cantidad de edades es par, calcular el promedio de los dos elementos intermedios
  const elementoIntermedio1 = ages[indiceMedio - 1];
  const elementoIntermedio2 = ages[indiceMedio];
  edadMedia = (elementoIntermedio1 + elementoIntermedio2) / 2;
} else {
  // Si la cantidad de edades es impar, obtener el valor del elemento medio
  edadMedia = ages[indiceMedio];
}

console.log("La edad media es:", edadMedia);
*/

// Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
let suma = ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9];
let cantidad = ages.length;
let promedio = suma/cantidad;
console.log(promedio) // 22.8

// Encuentre el rango de las edades (max menos min)
// El rango es una medida estadística que indica la amplitud o diferencia entre el valor más grande (máximo) y el valor más pequeño (mínimo) en un conjunto de datos.
let rango = ageMax - ageMin;
console.log(rango) // 7 

// Compare el valor de (mín - promedio) y (máx - promedio), use el método abs()
let diferenciaMin = Math.abs(ageMin - promedio);
let diferenciaMax = Math.abs(ageMax - promedio);

if(diferenciaMin > diferenciaMax) {
    console.log(`${diferenciaMin} - ${diferenciaMax} La diferencia entre el valor mínimo y el promedio es mayor`)
} else if(diferenciaMax > diferenciaMin) {
    console.log(`${diferenciaMax > diferenciaMin} La diferencia entre el valor máximo y mínimo es mayor`)
} else {
    console.log("Las diferencias son iguales")
}

// Cortar los diez primeros países del array de países
countries.splice(0, 10); // comienza desde la posición 0 y elimina los 10 siguientes paises
console.log(countries) // ["Kenya"]

// Encuentre el país o países de en medio en el array de países
let countries1 = ["Albania",
"Bolivia",
"Canada",
"Denmark",
"Ethiopia",
"Finland",
"Germany",
"Hungary",
"Ireland",
"Japan",
"Kenya",
"Paraguay"];

let cantidad1 = countries1.length; // cuenta cantidad de paises. En este caso 12
let mitad1 = cantidad1/2; // divide en dos para hallar la mitad
if(mitad1 % 2 === 0) { // Si la mitad es numero par, se eligen dos países para que sobren en los extremos la misma cantidad de países
    console.log(countries1[mitad1 - 1], countries1[mitad1]) // Finland Germany
} else {
    console.log(countries1[Math.floor(mitad1)]) // Si la mitad es impar, se elige la mitad redondeado hacia abajo. Si fueran 11 paises quedaría 5.5 y con Math.floor sería 5. age[5] === Finland (si no estuviera Paraguay)
}

// Divide el array de países en dos arrays iguales si es par. Si el array de países no es par, agregue un país más para la primera mitad.
let countries2;
if(countries1.length % 2 === 0) {
    countries2 = countries1.splice(0, countries1.length/2);
    console.log(countries2, countries1) // ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland'] ['Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya', 'Paraguay']
} else {
    countries2 = countries1.splice(0, Math.floor(countries1.length/2));
    countries2.push("Paraguay");
    console.log(countries2, countries1)
}
/*En esta solución, primero verificas si la cantidad de países es par o impar utilizando countries1.length % 2 === 0. Luego, si es par, utilizas splice() para dividir el array countries1 en dos mitades iguales, almacenando la primera mitad en countries2.

Si la cantidad de países es impar, utilizas Math.floor(countries1.length / 2) para obtener la cantidad de países en la primera mitad, redondeando hacia abajo en caso de que la división resulte en un número decimal. Luego, utilizas splice() para obtener la primera mitad del array y lo almacenas en countries2. Después, agregas "Paraguay" a la primera mitad usando push(). */