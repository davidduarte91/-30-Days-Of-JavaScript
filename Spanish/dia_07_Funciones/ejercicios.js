// Declare una función fullName e imprima su nombre completo.
function fullName(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;
    return "Mi nombre es: " + fullName;
}
console.log(fullName('Aruna', 'Duarte Chavez'))

// 3. Declare una función addNumbers que toma dos parámetros y retorna la suma de ambos.
let sumaNums = (num1, num2) => {
    return num1 + num2;
}
console.log(sumaNums(3, 2))

// 4. El área de un rectángulo se calcula de la siguiente manera: area = length x width. Escribe una función areaOfRectangle que calcule el área de un rectángulo.
function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}
console.log(areaOfRectangle(5, 4))

// 5. El perímetro de un rectángulo se calcula de la siguiente manera: perimeter= 2x(length + width). Escribe una función perimeterOfRectangle que calcule el perímetro de un rectángulo.
function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter;
}
console.log(perimeterOfRectangle(5, 4))

// 6.El volumen de un prisma rectangular se calcula de la siguiente manera: volume = length x width x height. Escribe una función volumeOfRectPrism que calcule el volumen de un prisma.
const volumeOfRectPrism = (length, width, height) => {
    let volume = length * width * height;
    return volume;
}
console.log(volumeOfRectPrism(5, 3, 2))

// 7. El área de un círculo se calcula de la siguiente manera: area = π x r x r. Escribe una función areaOfCircle que calcule el área de un círculo.
function areaOfCircle(r) {
    let area = Math.PI * r * r;
    return area.toFixed(2); // para acortar a dos decimales
}
console.log(areaOfCircle(3))

// 8. La circunferencia de un círculo se calcula de la siguiente manera: circumference = 2πr. Escribe una función circumOfCircle que calcule la circunferencia de un círculo.
const circumOfCircle = r => (2 * Math.PI * r).toFixed(2);
console.log(circumOfCircle(4))

// 9. La densidad de una sustancia se calcula de la siguiente manera: density= mass/volume. Escribe una función density que calcule la densidad de una sustancia.
const density = function(mass, volume) {
    let density = mass/volume;
    return density;
}
console.log(density(5, 4))

// 10.La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto en movimiento entre el tiempo total. Escribe una función que calcule la velocidad de un objeto en movimiento, speed.
function calculateSpeed(distancia, tiempo) {
    if(tiempo === 0) {
        return `El tiempo no puede ser cero`
    }
    const speed = distancia / tiempo;
    return speed;
}

const distanciaRecorrida = 100;
const tiempoTotal = 10;
console.log(calculateSpeed(distanciaRecorrida, tiempoTotal))

// 11. El peso de una sustancia se calcula de la siguiente manera: weight = mass x gravity. Escribe una función weight que calcule el peso de una sustancia.
const weightOfSustance = (mass, gravity) => {
    let weight = mass * gravity;
    return `El peso de la sustancia es ${weight} kg`;
}
console.log(weightOfSustance(25, 9.81))

// 12. La temperatura en °C se puede convertir a °F usando esta fórmula: °F = (°C x 9/5) + 32. Escribe una función convertCelsiusToFahrenheit que convierta °C a °F.
const convertCelsiusToFahrenheit = (celsius) => {
    let fahrenheit = (celsius * 9/5) + 32;
    return `${celsius}°C es igual a ${fahrenheit}°F`;
}
console.log(convertCelsiusToFahrenheit(24))

// 13. El índice de masa corporal (IMC) se calcula de la siguiente manera: imc = peso en Kg / (altura x altura) en m2. Escribe una función que calcule imc. El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una persona tiene un peso bajo, peso normal, con sobrepeso u obeso según la información que se proporciona a continuación.
/*
Se aplican los mismos parámetros de grupos tanto a hombres como a mujeres.
Peso bajo: IMC inferi                                                                                                                                                                                                                                                                               or a 18,5
Peso normal: IMC de 18,5 a 24,9
Sobrepeso: IMC de 25 a 29,9
Obeso: IMC es 30 o más
*/                                                                                  
const imc = (peso, altura) => {
    let imc = (peso / (altura**2)).toFixed(2);
    if(imc < 18.5) {                                                                                                                                                                                                                                                                                                                                                                                                                                       
        return `Tu IMC es de ${imc}. Tu peso es bajo`
    }else if(imc >= 18.5 && imc <= 24.9) {
        return `Tu IMC es de ${imc}. Tu peso es normal`
    }else if(imc >= 25 && imc <= 29.9) {
        return `Tu IMC es de ${imc}. Tienes sobrepeso`
    }else                                                                   {
        return `Tu IMC es de ${imc}. Tienes obesidad`
    }
}
// let peso = +prompt('Ingresa tu peso en kg');
// let altura = +prompt('Ingresa tu altura en metros');
// alert(`${imc(peso, altura)}`)

// 14. Escribe una función llamada checkSeason, toma un parámetro de mes y retorna la estación: Otoño, Invierno, Primavera o Verano.
// function checkSeason(month) {
//     let estacion;
//     switch (month) {
//         case "diciembre":
//         case "enero":
//         case "febrero":
//             estacion = "Verano";
//             break;
//         case "marzo":
//         case "abril":
//         case "mayo":
//             estacion = "Otoño";
//             break;
//         case "junio":
//         case "julio":
//         case "agosto":
//             estacion = "Invierno";
//             break;
//         case "septiembre":
//         case "octubre":
//         case "noviembre":
//             estacion = "Primavera";
//             break;
//         default:
//             estacion = "no es un mes válido";
//             break;
//     }
//     return estacion;
// }

// let mes = prompt('Ingrese el mes');
// let mesMinus = mes.toLowerCase();

// if(checkSeason(mesMinus) === "no es un mes válido") {
//     console.log(`${mes} ${checkSeason(mesMinus)}`)
// } else {
//     console.log(`${mes} corresponde a la estación de ${checkSeason(mesMinus)}`)
// }

// solucion chagpt
const checkSeason1 = (mes) => {
    const mesMin = mes.toLowerCase();

    const mesesVerano = ['diciembre', 'enero', 'febrero'];
    const mesesOtoño = ['marzo', 'abril', 'mayo'];
    const mesesInvierno = ['junio', 'julio', 'agosto'];
    const mesesPrimavera = ['septiembre', 'octubre', 'noviembre'];

    if(mesesVerano.includes(mesMin)) {
        return 'Verano';
    } else if(mesesOtoño.includes(mesMin)) {
        return 'Otoño';
    } else if(mesesInvierno.includes(mesMin)) {
        return 'Invierno';
    } else if(mesesPrimavera.includes(mesMin)) {
        return 'Primavera';
    } else {
        return 'Mes inválido';
    }
}
// mesIngresado = prompt('Ingrese el mes');
// estacionObtenida = checkSeason1(mesIngresado);
// console.log(estacionObtenida)
// if(estacionObtenida === "Mes inválido") {
//     console.log(`${mesIngresado} es un ${estacionObtenida}`)
// } else {
//     console.log(`${mesIngresado} corresponde a ${estacionObtenida}`)
// }

// 15. Math.max retorna su argumento más grande. Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max.
// const findMax = (a,b,c) => {
//     let max = a;
//     if(b > max) {
//         max = b;
//     } else {
//         max = c;
//     }
//     return max;
// }

// Otra manera
function findMax(a, b, c) {
    let arr = [a, b, c];
    let max = arr[0];
    for(const elem of arr) {
        if(elem > max) {
            max = elem;
        }
    }
    return max;
}

// let a = +prompt('primer numero');
// let b = +prompt('segundo numero');
// let c = +prompt('tercer numero');
// alert(`El numero mayor entre ${a}, ${b} y ${c} es: ${findMax(a,b,c)}`)

// EJERCICIOS NIVEL 2
// 1. La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. Escribe una función que calcule el valor de una ecuación lineal, solveLinEquation.
function solveLinEquation(a, b, c) {
    if (a === 0) {
        if (b === 0) {
            throw new Error("No es una ecuación lineal válida.");
        } else {
            return `La ecuación es horizontal: y = ${-c/b}`;
        }
    }

    const x = -c / a; // sale de si y = 0 en el plano
    const y = -c / b; // sale de si x = 0

    return `Solución: x = ${x}, y = ${y}`;
}

// Ejemplos de uso
console.log(solveLinEquation(2, -3, 5));  // Salida: Solución: x = -2.5, y = 1.6666666666666667
console.log(solveLinEquation(0, 3, -9));  // Salida: La ecuación es horizontal: x = 3
// console.log(solveLinEquation(0, 0, 7));   // Salida: Error: No es una ecuación lineal válida.
/*
La función solveLinEquation se declara, tomando tres argumentos a, b y c, que representan los coeficientes de la ecuación ax + by + c = 0.

La función verifica si a es igual a cero, lo cual se hace para determinar si la ecuación es vertical. Si a es cero, la ecuación no es lineal y se realizan comprobaciones adicionales.

Si a es cero, se verifica si b también es cero. Si ambos coeficientes son cero, la ecuación no es válida y se lanza un error indicando que no es una ecuación lineal válida.

Si solo a es cero y b no lo es, se considera que la ecuación es vertical (paralela al eje y) y se calcula el valor de x en función de c y b. Se crea una cadena de texto que indica que la ecuación es vertical y muestra el valor de x.

Si a no es cero, la ecuación se considera lineal. Se calculan los valores de x e y en función de los coeficientes a, b y c.

Finalmente, se crea una cadena de texto que contiene las soluciones para x e y y se devuelve como resultado.

En resumen, esta función verifica si una ecuación es lineal o vertical, calcula los valores de x e y según corresponda, y devuelve una cadena de texto con las soluciones.
*/

// 2.La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escribe una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.
function solveQuadEquation(a, b, c) {
    let x1;
    let x2;
    if(a === 0) {
        return 'el valor de a no puede ser cero'
    }
    
    let discriminante = b**2 - (4 * a * c);
    if(discriminante < 0) {
        return 'La ecuación no tiene soluciones reales';
    } else if(discriminante === 0) {
        return `La ecuación tiene una única solución: x:${-b / (2 * a)}`
    } else {
        x1 = (-b + Math.sqrt(discriminante)) / 2 * a;
        x2 = (-b - Math.sqrt(discriminante)) / 2 * a;
    }
    return `x1: ${x1.toFixed(0)}, x2: ${x2.toFixed(0)}`
}
console.log(solveQuadEquation(1, -1, -2))

// 3. Declare una función llamada printArray. Toma un array como parámetro e imprime cada valor del array.
const printArray = (arr) => {
    for (const elem of arr) {
        console.log(elem);
    }
}
printArray(["David", "hola"])

// 4.Declare una función llamada showDateTime que muestre la hora en este formato: 01/08/2020 04:08 usando el objeto Date.

function showDateTime() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2,'0'); // pasa a string y agrega caracteres de relleno
    const month = String(date.getMonth()+1).padStart(2,'0');
    const year = date.getFullYear();
    const hour = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    console.log(typeof day, typeof year) // string number -> para mostrar que los que tienen String cambiaron el tipo de dato
    return `${day}/${month}/${year} ${hour}:${minutes}`
}

console.log(showDateTime()) // 21/08/2023 11:13


// 5. Declare una función llamada swapValues. Esta función intercambia el valor de x a y.
function swapValues(x, y) {
    const temp = x;
    x = y;
    y = temp;
    return [x, y]
} 
let a = 5;
let b = 2;
console.log(`Antes del intercambio: x = ${a}, y = ${b}`); // Antes del intercambio: x = 5, y = 2
[a, b] = swapValues(a, b);
console.log(`Despues del intercambio: x = ${a}, y = ${b}`) // Despues del intercambio: x = 2, y = 5

// Declare una función llamada reverseArray. Toma un array como parámetro y retorna el array invertido (no use el método reverse()).
const reverseArray = (arr) => {
    let newArr = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr;
}
let originalArray = ["banana", "naranja", 'limón'];
let reverse = reverseArray(originalArray)
console.log("Array original: " + originalArray) // ['limón', 'naranja', 'banana']
console.log(`Array invertido: ${reverse}`)

// Declare una función llamada capitalizeArray. Toma un array como parámetro y retorna el array - capitalizedarray.
function capitalizeArray(arr) {
    let capitalize = [];
    for(const elem of arr) {
        capitalize.push(elem.toUpperCase())
    }
    return capitalize;
}
// Debajo pruebo ingresar palabras por prompt, agregarlas a un array y usar la funcion capitalizeArray para pasar todo  el array a mayúsculas
/*
let array = [];
let band = true;
while(band) {
    let input = prompt('Ingrese la palabra').trim();
    if(input !== "") { 
        array.push(input);  
    } else {
        alert('Ingrese una palabra válida')
    }
    
    let pregunta = confirm('¿Quiere ingresar otra palabra?');
    if(!pregunta) { // Si pregunta es false...
        band = false;
    }
}
console.log(capitalizeArray(array))
*/

// 8. Declare una función llamada addItem. Toma un elemento de paŕametro y retorna un array después de agregar el elemento.
const addItem = (item, arr) => {
    let newArr = [...arr, item]; // si uso newArr.push(item) y no el operador de propagacion (...), se modificará el array original
    return newArr;
}
let originalArray1 = [1, 2, 3];
let newItem = 4;
let newArr = addItem(newItem, originalArray1);
console.log(newArr) // [1, 2, 3, 4]
/*La función addItem toma dos parámetros: item (el elemento que se desea agregar) y array (el array original). 
Luego, crea un nuevo array utilizando el operador de propagación (...) para copiar todos los elementos del array original y agrega el nuevo elemento al final del nuevo array. Finalmente, la función devuelve el nuevo array con el elemento agregado. */

// 9. Declare una función llamada removeItem. Toma como parámetro un index y retorna un array después de eleminar el elemento con ese index.
function removeItem(index, array) {
    if(index < 0 || index >= array.length) { // El índice debe estar entre cero y -1 del largo del array
        console.error('índice fuera de rango');
        return array;
    }

    //let newArray = array.slice(0, index).concat(array.slice(index + 1)); -> otra manera. la función slice está creando una copia del array original, y luego la función concat está concatenando los elementos del array original antes del índice especificado con los elementos del array original después del índice especificado

    let newArray = array.concat(); // hago una copia del array original
    newArray.splice(index, 1);
    return newArray;
}
let numbers = [1, 2, 3, 4, 5];
let newNumbers = removeItem(0, numbers) // [2, 3, 4, 5] -> eliminó el elemento del índice 0
console.log(newNumbers); // [1, 2, 3, 4, 5] -> no modificó el array original

// 10. Declare una función llamada sumOfNumbers. Toma un número como parámetro y suma todos los números en ese rango.
function sumOfNumbers(num) {
    let sum = 0; // inicia la sumatoria en cero
    let i = 1; // creo el contador desde el 1
    while(i <= num) { // mientras el contador sea menor al numero proporcionado, seguirá
        sum += i; // se va añadiendo a la suma el numero del contador
        i++; // aumenta el contador en 1
    }
    return sum; // retorna la suma
}
console.log(sumOfNumbers(5)) // 15

// 11. Declare una función llamada sumOfOdds. Toma un parámetro numérico y suma todos los números impares en ese rango.
const sumOfOdds = (num) => {
    let sum = 0;
    let impares = [];
    for(let i = 1; i <= num; i++) {
        if(i % 2 !== 0) {
            sum += i;
            impares.push(i);
        }
    }
    return {sum: sum, impares: impares}; // para poder acceder a distintos valores es mejor escribirlos como objetos
}
let rango = 10;
let result = sumOfOdds(rango);
console.log(`La suma de todos los impares en el rango 1 al ${rango} es: ${result.sum}`); // La suma de todos los impares en el rango 1 al 10 es: 25
console.log(`Números impares: ${result.impares}`) // Números impares: 1,3,5,7,9

// 12. Declare una función llamada sumOfEven. Toma un parámetro numérico y suma todos los números pares en ese rango.
const sumOfEven = (rango) => {
    let sum = 0;
    let pares = [];
    for(let i = 1   ; i <= rango; i++) {
        if(i % 2 === 0) {
            sum += i;
            pares.push(i)
        }
    }
    return {sum: sum, pares: pares}
}
let rango1 = 20;
let resultPares = sumOfEven(rango1)
console.log(`La suma de todos los pares del rango 1 al ${rango1} es: ${resultPares.sum}`);
console.log(`Los números pares son: ${resultPares.pares}`)

// 13. Declare una función llamada evensAndOdds . Toma un entero positivo como parámetro y cuenta el número de pares e impares.
function evensAndOdds(num) {
    let sumPar = 0;
    let sumImpar = 0;
    let pares = [];
    let impares = [];
    for(let i = 1; i <= num; i++) {
        if(i % 2 === 0) {
            sumPar += i;
            pares.push(i);
        } else {
            sumImpar += i;
            impares.push(i);
        }
    }
    return {sumPar: sumPar, pares: pares, sumImpar: sumImpar, impares: impares}
}
let rango2 = 31;
let result1 = evensAndOdds(rango2);
console.log(`la suma de estos numeros pares: ${result1.pares} es: ${result1.sumPar}. La cantidad de números es: ${result1.pares.length}`);
console.log(`La suma de estos numeros impares: ${result1.impares} es: ${result1.sumImpar}. La cantidad de números es: ${result1.impares.length}`)

// 14. Escriba una función que tome cualquier número de argumentos y retorne la suma de los argumentos
function sum() {
    let suma = 0;
    for(let i = 0; i < arguments.length; i++) {
        suma += arguments[i]
    }
    return suma;
}
console.log(sum(25,25)) // 50

// con funcion flecha
const sum1 = (...args) => {
    let suma = 0;
    for(const elem of args) {
        suma += elem;
    }
    return suma
}
console.log(sum1(1, 2, 3)) // 6

// 15. Escriba una función randomUserIp que genere una ip de usuario aleatoria.
function randomUserIp() {
    let primero = Math.floor(Math.random()*256);
    let segundo = Math.floor(Math.random()*256);
    let tercero = Math.floor(Math.random()*256);
    let cuarto = Math.floor(Math.random()*256);
    return `${primero}.${segundo}.${tercero}.${cuarto}.`;
}

console.log(randomUserIp()) // 111.209.1.125.

// 16. Escriba una función randomMacAddress que genere una dirección mac aleatoria.
function randomMacAddress() {
    // Función para generar un número o una letra aleatoria
    function numeroOletra() {
        // Generar un número aleatorio entre 0 y 1
        let numeroOletra = Math.floor(Math.random()*2);
        if(numeroOletra === 0) {
            // Si es 0, generar un número del 0 al 9
            let delCeroAnueve = Math.floor(Math.random()*10);
            return delCeroAnueve;
        } else {
            // Si es 1, generar una letra A-F en formato hexadecimal
            let af = Math.floor(Math.random()*6); // Cambiado de 7 a 6 para asegurar letras A-F
            let letra = "";
            switch (af) {
                case 0:
                    letra = 'A';
                    break;
                case 1:
                    letra = 'B';
                    break;
                case 2:
                    letra = 'C';
                    break;
                case 3:
                    letra = 'D';
                    break;
                case 4:
                    letra = 'E';
                    break;
                default:
                    letra = 'F';
                    break;
            }
            return letra;  
        }
    }

    // Generar los seis pares de caracteres para formar la dirección MAC
    let primerPar = numeroOletra().toString() + numeroOletra().toString();
    let segundoPar = numeroOletra().toString() + numeroOletra().toString();
    let tercerPar = numeroOletra().toString() + numeroOletra().toString();
    let cuartoPar = numeroOletra().toString() + numeroOletra().toString();
    let quintoPar = numeroOletra().toString() + numeroOletra().toString();
    let sextoPar = numeroOletra().toString() + numeroOletra().toString();
    
    // Unir los pares con dos puntos para formar la dirección MAC completa
    return `${primerPar}:${segundoPar}:${tercerPar}:${cuartoPar}:${quintoPar}:${sextoPar}`;
}

// Imprimir la dirección MAC aleatoria generada
console.log(randomMacAddress());


//COMO LO RESOLVIO CHATGPT
function generateRandomHexDigit() {
    const hexDigits = '0123456789ABCDEF'; // Dígitos hexadecimales posibles
    const randomIndex = Math.floor(Math.random() * hexDigits.length); // Generar índice aleatorio
    return hexDigits[randomIndex]; // Devolver dígito hexadecimal aleatorio
}

function generateRandomPair() {
    const pair = generateRandomHexDigit() + generateRandomHexDigit(); // Generar un par de caracteres hexadecimales
    return pair; // Devolver el par generado
}

function randomMacAddress1() {
    const pairs = [];
    for(let i = 0; i < 6; i++) {
        pairs.push(generateRandomPair()); // Generar seis pares de caracteres
    }
    const macAddress = pairs.join(':'); // Unir los pares con dos puntos
    return macAddress; // Devolver dirección MAC generada
}

const randomMac = randomMacAddress1(); // Generar dirección MAC aleatoria
console.log(randomMac); // Imprimir dirección MAC generada

// 17.Declare una función llamada randomHexaNumberGenerator. Cuando se llama a esta función, genera un número hexadecimal aleatorio. La función retorna el número hexadecimal.
function randomHexaNumberGenerator() {
    function randomHexDigits() {
        let hexDigits = '0123456789ABCDEF';
        let randomIndex = Math.floor(Math.random() * hexDigits.length);
        return hexDigits[randomIndex];
    }
    let hexNumberArray = [];
    for(let i = 0; i < 6; i++) {
        hexNumberArray.push(randomHexDigits());
    }
    let hexNumberJoin = hexNumberArray.join('')
    return `#${hexNumberJoin}`
}
console.log(randomHexaNumberGenerator())

// LA OTRA MANERA DE CHATGPT VARIANDO UN POCO EL CÓDIGO QUE HICE YO
function randomHexaNumberGenerator1() {
    function randomHexDigits() {
        let hexDigits = '0123456789abcdef';
        let hexNumber = '';
        for (let i = 0; i < 6; i++) {
            let randomIndex = Math.floor(Math.random() * hexDigits.length);
            hexNumber += hexDigits[randomIndex];
        }
        return hexNumber;
    }

    let hexNumber = randomHexDigits();
    return `#${hexNumber}`;
}

console.log(randomHexaNumberGenerator1());

// COMO LO HIZO CHATGPT
function randomHexaNumberGenerator2() {
    // Generar tres valores hexadecimales aleatorios para los componentes R, G y B
    const redComponent = Math.floor(Math.random() * 256).toString(16).padStart(2, '0'); // .toString(16) convierte el número a su representación hexadecimal.
    const greenComponent = Math.floor(Math.random() * 256).toString(16).padStart(2, '0'); // .padStart(2, '0') asegura que cada componente sea al menos de dos caracteres, 
    const blueComponent = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    
    // Combinar los componentes para formar el número hexadecimal completo
    const hexColor = `#${redComponent}${greenComponent}${blueComponent}`;
    return hexColor;
}

const randomHexNumber = randomHexaNumberGenerator2();
console.log(randomHexNumber);

// 18. Declare una función llamada userIdGenerator. Cuando se llama a esta función, genera un id de siete caracteres. La función devuelve el id.
function userIdGenerator() {
    const caracteres = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz"; // Conjunto de caracteres permitidos
    
    let id = ""; // Variable para almacenar el ID generado
    for(let i = 0; i < 7; i++) { // Bucle para generar siete caracteres
        const caracterAleatorio = Math.floor(Math.random() * caracteres.length); // Generar un índice aleatorio
        id += caracteres[caracterAleatorio]; // Agregar el carácter correspondiente al ID
    }
    return id; // Devolver el ID generado
}

console.log(userIdGenerator()); // Imprimir el ID generado

// Ejercicios: Nivel 3
// 1. Modifique la función userIdGenerator. Declare una función de nombre userIdGeneratedByUser. No toma ningún parámetro pero toma dos entradas usando prompt(). Una de las entradas es la cantidad de caracteres y la segunda entrada es la cantidad de ID que se supone que se generarán.
/* ACÁ PUSE COMENTARIO PORQUE EL CÓDIGO TIENE PROMPT Y ES MOLESTO
function getValidNumberInput(promptMessage) {
    let userInput = prompt(promptMessage);
    while(isNaN(userInput) || userInput <= 0) {
        userInput = prompt('Ingrese un número válido (mayor que 0):')
    }
    return +userInput;
}

function userIdGeneratedByUser() {
    const caracteres = '0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

    const cantidadDeID = getValidNumberInput('Ingrese la cantidad de ID\'s que necesita:');
    const cantidadDeCaracteres = getValidNumberInput('Ingrese la cantidad de caracteres para cada ID');

    for(let i = 0; i < cantidadDeID; i++) {
        let caracter = '';
        for(let j = 0; j < cantidadDeCaracteres; j++) {
            let caracterAleatorio = Math.floor(Math.random() * caracteres.length);
            caracter += caracteres[caracterAleatorio];
        }
        console.info(caracter)
    }
}

userIdGeneratedByUser()
*/

// 2.Escriba una función llamada rgbColorGenerator que genera colores rgb
function rgbColorGenerator() {
    let bloqueRed = Math.floor(Math.random() * 256)
    let bloqueGreen = Math.floor(Math.random() * 256)
    let bloqueBlue = Math.floor(Math.random() * 256)
    return `rgb(${bloqueRed},${bloqueGreen},${bloqueBlue})`
}

console.log(rgbColorGenerator())

// 3.Escriba una función arrayOfHexaColors que retorna cualquier cantidad de colores hexadecimales en un array.
function arrayOfHexaColors(numOfColors) {
    function hexaColors() {
        const caracteres = '0123456789ABCDEF';
        let colors = "#";
        for(let i = 0; i < 6; i++) {
            let caracterAleatorio = Math.floor(Math.random() * caracteres.length);
            colors += caracteres[caracterAleatorio]  
        }
        return colors;
    }
    let arrayOfColors = [];
    for(let i = 0; i < numOfColors; i++) {
        arrayOfColors.push(hexaColors())
    }
    return arrayOfColors;
}
console.log(arrayOfHexaColors(4))

// COMO LO HIZO CHATGPT - POR SEPARADO LAS FUNCIONES
function generateRandomHexColor1() {
    const hexDigits = '0123456789ABCDEF';
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hexDigits.length);
        hexColor += hexDigits[randomIndex];
    }
    return hexColor;
}
function arrayOfHexaColors1(quantity) {
    const colorsArray = [];
    for (let i = 0; i < quantity; i++) {
        colorsArray.push(generateRandomHexColor1());
    }
    return colorsArray;
}
const numberOfColors = 5; // Cambiar esta cantidad según lo que necesites
const hexColors = arrayOfHexaColors1(numberOfColors);
console.log(hexColors);

// 4. Escriba una función arrayOfRgbColors que retorna cualquier cantidad de colores RGB en un array.
function arrayOfRgbColors(quantity) {
    let rgbArray = [];
    for(let i = 0; i < quantity; i++) {
        rgbArray.push(rgbColorGenerator()) // viene de la línea 637
    }
    return rgbArray;
}
console.log(arrayOfRgbColors(2))

// 5. Escriba una función convertHexaToRgb que convierta el color hexa a rgb y retorna un color rgb.
function convertHexaToDecimal(valor) {
    switch (valor) {
        case "0":
            return 0;
            break;
        case "1":
            return 1;
            break;
        case "2":
            return 2;
            break;
        case "3":
            return 3;
            break;
        case "4":
            return 4;
            break;
        case "5":
            return 5;
            break;
        case "6":
            return 6;
            break;
        case "7":
            return 7;
            break;
        case "8":
            return 8;
            break;
        case "9":
            return 9;
            break;
        case "A":
        case "a":
            return 10;
            break;
        case "B":
        case "b":
            return 11;
            break;
        case "C":
        case "c":
            return 12;
            break;
        case "D":
        case "d":
            return 13;
            break;
        case "E":
        case "e":
            return 14;
            break;
        default:
            return 15;
            break;
    }
}

function convertHexaToRgb(funcionHexa) {
    let red = convertHexaToDecimal(funcionHexa[2]) * (16 ** 0) + convertHexaToDecimal(funcionHexa[1]) * (16 ** 1);
    let green = convertHexaToDecimal(funcionHexa[4]) * (16 ** 0) + convertHexaToDecimal(funcionHexa[3]) * (16 ** 1);
    let blue = convertHexaToDecimal(funcionHexa[6]) * (16 ** 0) + convertHexaToDecimal(funcionHexa[5]) * (16 ** 1);
    return `El valor hexadecimal ${funcionHexa} se convierte a rgb(${red}, ${green}, ${blue})`
}
console.log(convertHexaToRgb(randomHexaNumberGenerator())) // El valor hexadecimal #DE6768 se convierte a rgb(222, 103, 104)

// COMO LO HIZO CHATGPT
function convertHexaToRgb1(hex) {
    // Elimina el signo '#' si está presente    
    hex = hex.replace(/^#/, '');
  
    // Valida la longitud del color hexadecimal
    if (hex.length !== 3 && hex.length !== 6) {
      throw new Error('El color hexadecimal debe tener 3 o 6 caracteres.');
    }
  
    // Si el color es corto (p. ej., 'abc'), expande a forma completa ('aabbcc')
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
  
    // Convierte los valores hexadecimales a números decimales
    const r = parseInt(hex.slice(0, 2), 16); // parseInt(hex.slice(0, 2), 16) toma los dos primeros caracteres de la cadena hexadecimal hex, los interpreta como un número hexadecimal y devuelve su equivalente en decimal. 
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
  
    // Retorna un objeto con los valores RGB
    return { r, g, b };
  }
  
  // Ejemplo de uso:
  const colorHexa = "#FF5733";
  const colorRgb = convertHexaToRgb1(colorHexa);
  console.log(colorRgb); // { r: 255, g: 87, b: 51 }
  
// 6. Escriba una función convertRgbToHexa que convierta rgb a color hexa y retorna un color hexa.
function convertRgbToHexa(funcionRgb) { // en el argumento llamaré a una función que genera colores rgb aleatorios
    let valorRgb = funcionRgb; // paso el valor de retorno de esa funcion a una variable, que será un string del estilo 'rgb(255, 0, 0)'
    function extractRgbValues(valorRgb) { // esta función extraerá los números 
        const matches = funcionRgb.match(/\d+/g); // en matches se guarda un array con los numeros
        if(matches && matches.length === 3) { // Si matches no es null o undefined y tiene 3 posiciones, entra al if
            const red = parseInt(matches[0], 10); // guardo en la variable red el primer valor convertido a valor decimal
            const green = parseInt(matches[1], 10);
            const blue = parseInt(matches[2], 10);
            let rgbArray = [red, green, blue]; // guardo todos los valores en una array. Ahora ya transformados de string a enteros decimales
            return rgbArray; // retorno el array
        } else {
            throw new Error('La cadena no tiene el formato esperado (rgb(r, g, b))') // en caso que no se cumpla la condición de arriba
        }
    }

    let arrayRgb = extractRgbValues(); // llamo a la funcion de arriba que me devuelve el array con los 3 valores
    const redHex = arrayRgb[0].toString(16).padStart(2, '0'); // tomo el primer indice del array, convierto a valor hexa y que mínimo tenga dos valores. Si falta agrega cero
    const greenHex = arrayRgb[1].toString(16).padStart(2, '0');
    const blueHex = arrayRgb[2].toString(16).padStart(2, '0');

    const hexColor = `#${redHex}${greenHex}${blueHex}`;

    return `${valorRgb} se transforma en ${hexColor.toUpperCase()}`;
}

console.log(convertRgbToHexa(rgbColorGenerator())) // rgb(139,59,37) se transforma en #8B3B25

// 7. Escriba una función generateColors que pueda generar cualquier número de colores hexa o rgb.
const generateColors = (tipo, cantidad) => {
    if((tipo === "hexa" || tipo === 'Hexa') && cantidad > 0) {
        let arrayHexa = [];
        for(let i = 0; i < cantidad; i++) {
            arrayHexa.push(generateRandomHexColor1())
        }
        return arrayHexa;
    } else if((tipo === "rgb" || tipo === 'Rgb') && cantidad > 0) {
        let arrayRgb = [];
        for(let i = 0; i < cantidad; i++) {
            arrayRgb.push(rgbColorGenerator())
        }
        return arrayRgb;
    } else {
        throw new Error('EL tipo no es válido o el número no es mayor a cero')
    }
}
console.log(generateColors('hexa', 3)) // ['rgb(243,153,157)', 'rgb(125,27,219)', 'rgb(153,220,37)']

// 8. Llame a su función shuffleArray, toma un array como parámetro y devuelve un array mezclada
function shuffleArray(array) {
    let arrayMezcla = [];
    let posicion = [];
    let numAleatorio = Math.floor(Math.random() * array.length);
    for(let i = 0; i < array.length; i++) {
        while(posicion.includes(numAleatorio)) {
            numAleatorio = Math.floor(Math.random() * array.length);
        }
        posicion.push(numAleatorio);
        arrayMezcla.push(array[numAleatorio])
        
    }
    return arrayMezcla;
}
let array = ["banana", "naranja", "pera", "ananá"]
console.log(shuffleArray(array))

// COMO LO HIZO CHATGPT
const shuffleArray1 = (array) => {
    const shuffledArray = [...array]; // Copia el array original

    // Fisher-Yates algorithm for shuffling
    for (let i = shuffledArray.length - 1; i > 0; i--) { // hace un recorrido por la copia del array comenzando desde el final
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // de esta manera se intercambian los valores
    }

    return shuffledArray;
};

const originalArray12 = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray1(originalArray12);

console.log('Original array:', originalArray12); // [1, 2, 3, 4, 5]
console.log('Shuffled array:', shuffledArray); // [2, 5, 3, 1, 4]

// --------------------------------------------------------------------------------------------------------------------------------------------
// 9. Llame a su función factorial, toma un número entero como parámetro y devuelve un factorial del número.
const factorial = (numero) => {
    let result = 1;
    if(numero === 0) {
       // result = 1;
        return `El factorial de ${numero} es ${result}`
    } else if(numero < 0) {
        return `El factorial de un número negativo no está definido`
    } else {
        for(let i = numero; i > 0; i--) {
            result = result * i;
        }
        return `El factorial de ${numero} es ${result}`
    }
}
console.log(factorial(0))

// COMO LO RESOLVIO BARD. Utiliza recursion
function factorial1(n) {
    if (n < 0) {
        throw new Error('El factorial no está definido para números negativos')
    }
    if (n === 0) {
      return 1;
    }
    return n * factorial1(n - 1);
  }
  
  const resultado = factorial1(5);
  
  console.log(resultado); // 120
/*
factorial1(5) se llama.
Como n no es igual a 0, se llama a factorial1(4) con n reducido en 1 (es decir, n - 1).
Esto continúa hasta llegar a factorial1(0), que devuelve 1.
Luego, cada llamada recursiva se resuelve multiplicando el valor actual de n por el resultado de la llamada recursiva anterior.
Finalmente, obtienes el resultado del factorial de 5.
*/
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 10. Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no.
function isEmpty(param) {
    if(param.length === 0) {
        return `El parámetro está vacío`;
    }
    return `El parámetro no está vacío`;
}
console.log(isEmpty("hola")) // El parámetro no está vacío
// Otra manera
function isEmpty1(objeto) {
    if (objeto == null || objeto === '') {
      return true;
    } else {
      return false;
    }
  }
console.log(isEmpty1('Hola')) // false
// -------------------------------------------------------------------------------------------------------------------------------

// 11. Llame a su función sum, toma cualquier cantidad de argumentos y devuelve la suma.
const sumaVariosArgumentos = (...args) => { // usando funcion flecha
    let sum = 0;
    for(const element of args) {
        sum += element
    }
    return sum
}
console.log(sumaVariosArgumentos(1,4,3)) // 8


function sumaVariosArgumentos2() { // usando función regular
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) { // también se puede usar for(cont element of arguments)
        sum += arguments[i]
    }
    return sum
}
console.log(sumaVariosArgumentos2(1, 2, 4)) // 7
// --------------------------------------------------------------------------------------------------------------------------------

// 12. Escriba una función llamada sumOfArrayItems, toma un array como parámetro y retorna la suma de todos los elementos. Compruebe si todos los elementos de la matriz son de tipo numérico. Si no, dé una respuesta razonable.
const sumOfArrayItems = (array) => {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        if(typeof array[i] !== 'number') {
            return `El elemento '${array[i]}' de la posición ${i} no es un número y no se puede calcular la suma`;
        }
        sum += array[i];
    }
    return sum
}
let arrayGeneral = [3, "nada", 3]
console.log(sumOfArrayItems(arrayGeneral))

// COMO LO HIZO CHATGPT
const sumOfArrayItems2 = (arr) => {
    // Verificar si todos los elementos son numéricos
    const allNumeric = arr.every(item => typeof item === 'number');

    if (!allNumeric) {
        return 'No se puede calcular la suma. Al menos uno de los elementos no es numérico.';
    }

    // Calcular la suma de los elementos
    const sum = arr.reduce((total, currentValue) => total + currentValue, 0);

    return sum;
};

// Ejemplo de uso
const numericArray = [1, 2, 3, 4, 5];
const nonNumericArray = ['a', 2, 'b', 4];

console.log('Array numérico:', numericArray); 
console.log('Suma de los elementos:', sumOfArrayItems2(numericArray)); // 15

console.log('Array no numérico:', nonNumericArray);
console.log('Suma de los elementos:', sumOfArrayItems2(nonNumericArray)); // Suma de los elementos: No se puede calcular la suma. Al menos uno de los elementos no es numérico.
// --------------------------------------------------------------------------------------------------------------------------------------------------

// 13. Escribe una función llamada average, toma un array como parámetro y retorna el promedio de los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta adecuada.
function average(array) {
    // Inicializamos las variables para el promedio y la suma
    let promedio = 0;
    let sum = 0;
    
    // Recorremos el array y sumamos los elementos
    for(let i = 0; i < array.length; i++) {
        // Verificamos si el elemento es numérico
        if(typeof array[i] !== 'number') {
            return `'${array[i]}' no es un número y no se puede calcular el promedio`;
        }
        // Sumamos el elemento a la suma total
        sum += array[i];
    }
    
    // Calculamos el promedio
    promedio = sum / array.length;
    
    // Devolvemos un objeto con el promedio, la suma y la cantidad de elementos
    return { 'promedio': promedio, 'suma': sum, 'cantidad': array.length };
}

let arrayGeneral2 = [1, 2, 3, 4]
console.log(average(arrayGeneral2)) // {promedio: 2.5, suma: 10, cantidad: 4}
console.log(average(arrayGeneral2).suma) // 10
//--------------------------------------------------------------------------------------------------------------------------------------------------------

// 14. Escriba una función llamada modifyArray que tome un array como parámetro y modifique el quinto elemento del array y retorna el array. Si la longitud del array es inferior a cinco, retorna 'elemento no encontrado'.
const modifyArray = (array) => {
    // Hacemos una copia del array original
    let copyArray = [...array];
    
    // Verificamos la longitud de la copia
    if(copyArray.length < 5) {
        return `Elemento no encontrado`;
    } 
    
    // Modificamos el quinto elemento de la copia a mayúsculas
    copyArray.splice(4, 1, array[4].toUpperCase());
    
    // Devolvemos la copia modificada
    return copyArray;
}

let array5elementos = ['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']
console.log(modifyArray(array5elementos)) // ['Google', 'Facebook', 'Apple', 'Amazon', 'MICROSOFT', 'IBM']


// Esta manera modifica el array original y modifica solo el quinto elemento, pero en retorna todo el array con el 5to modificado
const modifyArray2 = (array) => {
   // Verificamos la longitud de la copia
    if(array.length < 5) {
        return `Elemento no encontrado`;
    } 
    
    // Modificamos el quinto elemento de la copia a mayúsculas
    // array.splice(4, 1, array[4].toUpperCase());
    array[4] = array[4].toUpperCase()
    
    // Devolvemos la copia modificada
    return array;
}
console.log(modifyArray2(array5elementos)) // ['Google', 'Facebook', 'Apple', 'Amazon', 'MICROSOFT', 'IBM']
// -----------------------------------------------------------------------------------------------------------------------------------------

// 15. Escribe una función llamada isPrime, que verifica si un número es un número primo.
function isPrime(n) {
    if(n < 2) {
        return `Los números menores a 2 no son primos`
    }
    let isPrime = true;

    // Utilizas un bucle for para iterar desde 2 hasta la raíz cuadrada del número (inclusive). Si el número es divisible por algún número en este rango, se marca como no primo.
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            isPrime = false;
        }
    }

    if(isPrime === true) {
        return `${n} es primo`
    } else {
        return `${n} no es primo`
    }
}
console.log(isPrime(1))
// -------------------------------------------------------------------------------------------------------------------------------------------

// 16. Escriba una función que verifique si todos los elementos son únicos en un array.
const unicoEnArray = (array) => {
    let unico = true; // Variable para controlar si todos los elementos son únicos
    let repetido; // Variable para almacenar el elemento que se repite
    let posicion; // Variable para almacenar la posición en la que se repite

    // Iterar sobre el array para buscar duplicados
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            // Si se encuentra un duplicado
            if (array[i] === array[j]) {
                unico = false; // Indicar que no son todos únicos
                repetido = array[i]; // Almacenar el elemento que se repite
                posicion = `${i} y ${j}`; // Almacenar la posición donde se repite
            }
        }
    }

    // Devolver el resultado dependiendo de si hay duplicados o no
    if (unico === true) {
        return `Todos los elementos son únicos`; // No hay duplicados
    } else {
        return `El array tiene repetido el elemento '${repetido}' en la posición ${posicion}`; // Hay duplicados
    }
}
let arrayPrueba = ["pera", "pera"];
console.log(unicoEnArray(arrayPrueba))


// CHATGPT
function areAllElementsUnique(arr) {
    const uniqueElements = new Set(); // Crear un conjunto para almacenar elementos únicos

    // Iterar sobre el array
    for (const element of arr) {
        // Verificar si el elemento ya está en el conjunto
        if (uniqueElements.has(element)) {
            return false; // Encontrado un elemento duplicado, retornar falso
        }

        // Agregar el elemento al conjunto si no es un duplicado
        uniqueElements.add(element);
    }

    return true; // Todos los elementos son únicos
}
// Ejemplo de uso
const array1 = [1, 2, 3, 4, 5];
console.log(areAllElementsUnique(array1)); // Devuelve true, todos los elementos son únicos

const array2 = [1, 2, 3, 3, 4, 5];
console.log(areAllElementsUnique(array2)); // Devuelve false, hay elementos duplicados (el 3 se repite)


// USANDO INCLUDES
const unicoEnArray1 = (array) => {
    for (let i = 0; i < array.length; i++) {
        const elemento = array[i];

        // Verificar si el elemento se repite más adelante en el array
        if (array.includes(elemento, i + 1)) { // verifica si el elemento actual está presente más adelante en el array, a partir de la posición i + 1. Va buscando repeticiones a partir de i+1 (es como si recorriera el array)
            return `El array tiene repetido el elemento '${elemento}' en la posición ${i} y más adelante`;
        }
    }

    return 'Todos los elementos son únicos';
}

// Ejemplo de uso
const arrayPrueba1 = [1, 2, 3, 4, 5];
console.log(unicoEnArray1(array1)); // Devuelve 'Todos los elementos son únicos'

const arrayPrueba2 = [1, 2, 3, 3, 4, 5];
console.log(unicoEnArray1(array2)); // Devuelve 'El array tiene repetido el elemento '3' en la posición 2 y más adelante'
// -------------------------------------------------------------------------------------------------------------------------------------------

// 17. Escriba una función que verifique si todos los elementos de un array son del mismo tipo de datos.
const areSameData = (array) => {
    if(array.length === 0) {
        return true; // Si el array está vacío, todos los elementos son del mismo tipo
    }

    const firstType = typeof array[0];
    for(const element of array) {
        if(typeof element !== firstType) {
            return false;
        }
    }
    return true;
}
const arrayPrueba3 = [1, 2, "g"];
console.log(areSameData(arrayPrueba3))
// ---------------------------------------------------------------------------------------------------------------------------------------------


// 18. El nombre de las variables de JavaScript no admite caracteres o símbolos especiales, excepto $ o _. Escriba una función isValidVariable que verifique si una variable es válida o inválida.
const validacionVariable = (variable) => {
    // Utilizamos una expresión regular para buscar cualquier caracter que no sea una letra, un dígito, '$' o '_'
    let arr = variable.match(/[^$_\w]/g);

    // Si se encontraron caracteres que violan las reglas, devuelve "No es una variable válida"
    if(arr !== null) {
        return `No es una variable válida`;
    }
    
    // Si no se encontraron caracteres que violen las reglas, devuelve "Es una variable válida"
    return `Es una variable válida`;
}
console.log(validacionVariable('$nada_')) // Es una variable válida

// CHATGPT
function isValidVariable(name) {
    const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;  // Expresión regular para validar el nombre

    return regex.test(name);
}

// Ejemplos de uso
console.log(isValidVariable('variable123')); // Devuelve true, nombre válido
console.log(isValidVariable('123variable')); // Devuelve false, comienza con un número (inválido)
console.log(isValidVariable('$variable'));   // Devuelve true, nombre válido (comienza con $)
console.log(isValidVariable('_variable'));   // Devuelve true, nombre válido (comienza con _)
console.log(isValidVariable('var-iable'));   // Devuelve false, contiene un guion (inválido)
// ------------------------------------------------------------------------------------------------------------

// 19. Escriba una función que devuelva un array de siete números aleatorios en un rango de 0-9. Todos los números deben ser únicos.
function sevenRandomNumbers() {
    let arr = [];  // Crear un array vacío para almacenar los números
    for(let i = 0; i < 7; i++) {
        let randomNum = Math.floor(Math.random() * 10);  // Generar un número aleatorio entre 0 y 9
        if(!arr.includes(randomNum)) {
            arr.push(randomNum);  // Agregar el número generado al array si no está presente
        } else {
            i--;  // Decrementar i para generar otro número único si el número ya está en el array
        }
    }
    return arr;  // Devolver el array con siete números aleatorios únicos
}

// Ejemplo de uso
const randomNumbers = sevenRandomNumbers();  // Llamar a la función para obtener los números
console.log(randomNumbers);  // Mostrar los números en la consola


// CHATGPT
function generateRandomArray() {
    const result = [];
    
    // Llenar el array con números únicos
    while (result.length < 7) {
      const randomNumber = Math.floor(Math.random() * 10);  // Generar número aleatorio entre 0 y 9
  
      // Verificar si el número ya está en el array
      if (!result.includes(randomNumber)) {
        result.push(randomNumber);
      }
    }
    
    return result;
  }
  
  // Ejemplo de uso
  const randomNumbers1 = generateRandomArray();
  console.log(randomNumbers1);
// --------------------------------------------------------------------------------------------------------------------------------------

// 20. Escriba una función llamada reverseCountries, toma el array de países y primero copia el array y retorna el array original invertido
const reverseCountries = (array) => {
    let countriesCopy = array.slice();
    let reverse = countriesCopy.reverse();
    return {array, reverse};
}
const countries = ["Albania", "Bolivia", "Canada","Denmark",
"Ethiopia","Finland","Germany","Hungary","Ireland","Japan","Kenya",];
console.log(reverseCountries(countries)) 
/*
array: (11) ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
reverse: (11) ['Kenya', 'Japan', 'Ireland', 'Hungary', 'Germany', 'Finland', 'Ethiopia', 'Denmark', 'Canada', 'Bolivia', 'Albania']
*/
