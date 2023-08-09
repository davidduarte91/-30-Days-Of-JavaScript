// 1. Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while
// for
let arr = [];
for (let i = 0; i <= 10; i++) { // Si let arr lo pongo fuera, crea un solo array con todos los números. Si queda dentro, crea un nuevo array con cada numero.
    arr.push(i)
}
console.log(arr) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// while
let arr1 = [];
let i = 0;
while (i <= 10) {
    arr1.push(i);
    i++;
}
console.log(arr1) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// do while
let arr2 = [];
let j = 0;
do {
    arr2.push(j);
    j++;
} while(j <= 10)
console.log(arr2) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2.Itera 10 to 0 usando el bucle for, haga lo mismo usando los bucles while y do while
// for
let arr3 = [];
for (let i = 10; i >= 0; i--) {
    arr3.push(i);
}
console.log(arr3) // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

// while
let arr4 = [];
let k = 10;
while (k >= 0) {
    arr4.push(k);
    k--
}
console.log(arr4) // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

// do while
let arr5 = [];
let h = 10;
do {
    arr5.push(h);
    h--
} while(h >= 0)
console.log(arr5) // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

// 3. Itera de 0 a n usando el bucle for
/*let num = +prompt("Ingresa la cantidad de números para el array");
let arr6 = [];
for (let i = 0; i <= num; i++) {
    arr6.push(i);
}
console.log(arr6)
*/

// 4. Escribe un bucle que haga el siguiente patrón usando console.log():
/*
#
##
###
####
#####
######
#######
*/
let l = 0;
let arr7 = [];
while (l <= 7) {
    arr7.push(l);
    console.log(arr7);
    l++
}
/*
[0]
[0, 1]
[0, 1, 2]
[0, 1, 2, 3]
[0, 1, 2, 3, 4]
[0, 1, 2, 3, 4, 5]
[0, 1, 2, 3, 4, 5, 6]
[0, 1, 2, 3, 4, 5, 6, 7] 
*/

// 5. Usa un bucle para imprimir el siguiente patrón:
/*
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
} // me dió igual al patrón solicitado

// 6. Usando un bucle imprime el siguiente patrón:
/*
i    i^2   i^3
0    0     0
1    1     1
2    4     8
3    9     27
4    16    64
5    25    125
6    36    216
7    49    343
8    64    512
9    81    729
10   100   1000
*/
console.log(`i i^2  i^3`);
let m = 0;
do {
    console.log(`${m}   ${m ** 2}    ${m ** 3}`);
    m++;
} while(m <= 10) // me dió igual al ejemplo

// 7. Usa el bucle for para iterar de 0 a 100 e imprima solo números pares
let arr8 = [];
for (let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        arr8.push(i);
    }
}
console.log(arr8) // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100]

// 8. Usa el bucle for para iterar de 0 a 100 e imprima solo números impares
let arr9 = [];
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        arr9.push(i);
    }
}
console.log(arr9) // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99]

// 9. Usa el bucle for para iterar de 0 a 100 e imprima los solo números primos
let arr10 = [];
for(let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
        if(i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if(isPrime) {
        arr10.push(i)
    }
}
console.log(arr10)
/* EXPLICACION
Se crea un array vacío llamado arr10, que se utilizará para almacenar los números primos del 1 al 100.

Comienza un bucle for con i inicializado en 2, ya que el número 1 no es considerado primo. El bucle se ejecutará mientras i sea menor o igual a 100.

Se declara una variable booleana isPrime y se inicializa en true. Esta variable se usará para indicar si el número actual i es primo o no.

Comienza otro bucle for anidado con j inicializado en 2. El bucle se ejecutará mientras j sea menor o igual a la raíz cuadrada de i. La razón para detener el bucle en la raíz cuadrada de i es que si i tiene un divisor mayor que su raíz cuadrada, también debe tener un divisor menor que su raíz cuadrada.

Dentro del bucle anidado, se verifica si i es divisible entre j (es decir, si i % j === 0). Si esta condición es verdadera, significa que i tiene un divisor distinto de 1 y de sí mismo, lo que implica que i no es primo. En este caso, se establece isPrime en false y se sale del bucle anidado usando break.

Después de salir del bucle anidado, se verifica si isPrime sigue siendo true. Si es así, significa que no se encontró ningún divisor diferente de 1 y de sí mismo para i, por lo que i es primo.

Si isPrime es true, se agrega el número i al array arr10 utilizando arr10.push(i).

El bucle principal continúa incrementando i en 1 y repitiendo los pasos 3 al 7 para los próximos números hasta llegar a 100.

Una vez que el bucle principal ha terminado, se imprime el array arr10 en la consola mediante console.log(arr10). Este array contendrá todos los números primos del 1 al 100.
*/

// 10. Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números.
let suma = 0;
for(let i = 0; i <= 100; i++) {
    suma += i;
}
console.log(`La suma de todos los números del 0 al 100 es ${suma}`) // La suma de todos los números de 0 a 100 es 5050.

// 11. Usa el bucle for para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.
let sumaPar = 0;
let sumaImpar = 0;
for (let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        sumaPar += i
    } else {
        sumaImpar += i
    }
}
console.log(`La suma de todos los pares de 0 a 100 es ${sumaPar}. Y la suma de todos los impares de 0 a 100 es ${sumaImpar}`)

// 12. Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares. Imprimir suma de pares y suma de impares como un array
let sumaPar1 = 0;
let sumaImpar1 = 0;
for (let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        sumaPar1 += i
    } else {
        sumaImpar1 += i
    }
}
let arr11 = [];
arr11.push(sumaPar1, sumaImpar1)
console.log(arr11)

// 13. Desarrolla un pequeño script que genera una matriz de 5 números aleatorios
let arrAleatorio = [];
for (let i = 1; i <= 5; i++) {
    let random = Math.random() * 10
    let numAleatorio = Math.ceil(random)
    arrAleatorio.push(numAleatorio)
    // console.log(random)
}
console.log(arrAleatorio) // Genera 5 números aleatorios del 1 al 10. Algunos pueden repetirse

// 14. Desarrolla un pequeño script que genera una matriz de 5 números aleatorios. Los números debe ser únicos
let arrAleatorio1 = [];
for(let i = 1; i <= 5; i++) {
    let random = Math.random() * 10; // Genera número aleatorio hasta 10 con decimales
    console.log(random);
    let numAleatorio = Math.ceil(random); // redondea hacia arriba al entero más cercano
    if(arrAleatorio1.includes(numAleatorio)) { // Si el array ya incluye numAleatorio, se resta a i - 1 y vuelve al ciclo para probar con el mismo valor de i
        i--;
    } else { 
        arrAleatorio1.push(numAleatorio) // sino no está en el array el numAleatorio, se agrega al array
    }
    
}
console.log(arrAleatorio1)

// 15. Desarrolla un pequeño script que genera un id aleatorio de seis caracteres: MI RESOLUCION. MUY LARGA
// let alfaNumerico = "abcdefghijklmnñopqrstuvwxyz0123456789";
// let arrAleatorio2 = [];
// for(let i = 0; i <= 5; i++) {
//     let random = Math.random() * 37;
//     console.log(random)
//     let numAleatorio = Math.floor(random);
//     console.log(numAleatorio)
//     let valorAlfaNum = alfaNumerico.charAt(numAleatorio);
//     console.log(valorAlfaNum)
//     if(arrAleatorio2.includes(valorAlfaNum)) {
//         i--;
//     } else {
//         arrAleatorio2.push(valorAlfaNum)
//     }
// }
// let codigo = arrAleatorio2.join('');
// console.log(codigo)

//---------------CHATGPT------------------------------

// Crear una cadena con todos los caracteres válidos para el id
let alfaNumerico = "abcdefghijklmnñopqrstuvwxyz0123456789"

// Variable para almacenar el id aleatorio
let idAleatorio = "";

// Generar el id aleatorio de seis caracteres
for (let i = 0; i < 6; i++) {
  // Obtener un número aleatorio entre 0 y la longitud de la cadena de caracteres válidos
    let numAleatorio = Math.floor(Math.random() * alfaNumerico.length)
    console.log(numAleatorio)
    let valorAlfaNum = alfaNumerico.charAt(numAleatorio);

    if(idAleatorio.includes(valorAlfaNum)) {
        i--;
    } else {
        idAleatorio += valorAlfaNum
    }
}
// Mostrar el id aleatorio generado
console.log(idAleatorio);
/*
Se define la variable alfaNumerico, que contiene una cadena de caracteres válidos para el id aleatorio. En este caso, incluye letras minúsculas (sin tilde), la letra "ñ" y los dígitos del 0 al 9.

Se declara la variable idAleatorio y se inicializa como una cadena vacía. Esta variable será utilizada para almacenar el id aleatorio generado.

Se inicia un bucle for que se ejecutará seis veces (de 0 a 5) para generar cada uno de los seis caracteres del id aleatorio.

En cada iteración del bucle, se genera un número aleatorio entre 0 y la longitud de la cadena alfaNumerico. Esto se hace con Math.random() * alfaNumerico.length, donde Math.random() devuelve un número decimal entre 0 y 1 (no incluido), y alfaNumerico.length es la longitud de la cadena que contiene los caracteres válidos.

Se redondea el número aleatorio hacia abajo utilizando Math.floor(). Esto da como resultado un número entero entre 0 y la longitud de alfaNumerico - 1, que corresponde a un índice válido para acceder a los caracteres de la cadena.

Se obtiene el carácter correspondiente al índice aleatorio utilizando alfaNumerico.charAt(numAleatorio).

Luego, se verifica si el carácter generado ya está presente en el id aleatorio utilizando idAleatorio.includes(valorAlfaNum). Si ya está presente, significa que se ha generado un carácter repetido, por lo que se decrementa la variable i en uno (i--) para generar un nuevo carácter en la próxima iteración.

Si el carácter no está presente en el id aleatorio, se agrega al final de la cadena idAleatorio utilizando la concatenación (+=).

Una vez que se han generado los seis caracteres únicos, el bucle finaliza y se muestra el id aleatorio generado en la consola mediante console.log(idAleatorio).
*/

// EJERCICIOS NIVEL 2
// 1. Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios:
// let alfaNumerico1 = "abcdefghijklmnñopqrstuvwxyz0123456789";
// let idAleatorio1 = "";
// let numCaracteres = Math.floor(Math.random()*alfaNumerico1.length);
// for(let i = 0; i < numCaracteres; i++) {
//     let randomIndex = Math.floor(Math.random()*alfaNumerico1.length);
//     let valorAlfaNum = alfaNumerico1.charAt(randomIndex);
//     if(idAleatorio1.includes(valorAlfaNum)) {
//         i--;
//     } else {
//         idAleatorio1 += valorAlfaNum
//     }
// }
// console.log(idAleatorio1)

// Ahora usando while
let alfaNumerico1 = "abcdefghijklmnñopqrstuvwxyz0123456789";
let idAleatorio1 = "";
let numAleatorio = Math.floor(Math.random() * alfaNumerico1.length) + 1;
while(idAleatorio1.length < numAleatorio) {
    let randomIndex = Math.floor(Math.random() * alfaNumerico1.length);
    let valorAlfaNum = alfaNumerico1.charAt(randomIndex);
    if(!idAleatorio1.includes(valorAlfaNum)) {
        idAleatorio1 += valorAlfaNum;
    }
}
console.log(numAleatorio, idAleatorio1)

// 2. Escribe un script que genere un número hexadecimal aleatorio.
let valoresHexa = "0123456789abcdef";
let newHexaCode = "";
for(let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * valoresHexa.length);
    let valorHexa = valoresHexa.charAt(randomIndex);
    newHexaCode += valorHexa
}
console.log(`#${newHexaCode}`)

// 3. Escribe un script que genere un número de color rgb aleatorio.

let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
let codigoRgb = `rgb(${red}, ${green}, ${blue})`
console.log(codigoRgb)

// 4. Usando el array countries anterior, crea un array como el siguiente.
let countries = [
    "Albania",
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
    "Iceland"
  ];

let countriesMayusculas = [];
for(let i = 0; i < countries.length; i++) {
    let paisMayuscula = countries[i].toUpperCase()
    countriesMayusculas.push(paisMayuscula);
}
console.log(countriesMayusculas)

// 5. Usando el array countries anterior, crea un array para saber la longitud de cada país.
let countriesLength = [];
let e = 0;
while(e < countriesMayusculas.length) {
    let longitudPais = countriesMayusculas[e].length;
    countriesLength.push(longitudPais);
    e++;
}
console.log(countriesLength)

// 6. Utiliza el array countries para crear la siguiente array de arrays
// debo usar countries
// usar countriesMayusculas para obtener las 3 primeras letras de cada pais en mayusculas
// usar countriesLenght para pushear las longitudes
// mientras recorro con el for, usar slice para recortar las tres primeras letras del countriesMayusculas y guardar en una variable
// con el ciclo for recorrer segun la cantidad de paises y pushear en el arrayGeneralPaises: nombres, tres letras y la longitud
let arrayGeneralPaises = [];
let arrayIndividualPais = [];
let tresLetrasPaises = [];
for(let i = 0; i < countries.length; i++) {
    tresLetrasPaises.push(countriesMayusculas[i].slice(0,3));
    arrayIndividualPais.push([countries[i], tresLetrasPaises[i], countriesLength[i]]);

    arrayGeneralPaises.push(arrayIndividualPais[i])
}
console.log(arrayGeneralPaises)

// como lo resolvió chatgpt. Individualizó cada pais y calculó de nuevo la longitud y las tres primeras letras sin complicarse con las variables anteriores
let countriesData = [];
for(let i = 0; i < countries.length; i++) {
    let country = countries[i];
    let tresLetrasPaises = country.slice(0,3).toUpperCase();
    let longPais = country.length;
    let countryinfo = [country, tresLetrasPaises, longPais];
    countriesData.push(countryinfo)
}
console.log(countriesData)

// 7. En el array countries anterior, verifica si hay un país que contenga la palabra 'land'. Si hay países que contienen 'land', imprimelo cono array. Si no hay ningún país que contenga la palabra'land', imprima 'Todos estos países no tienen la palabra land'.
let paisesConLand = [];
let paisesSinLand = [];
for(let i = 0; i < countries.length; i++) {
    if(countries[i].endsWith('land')) {
        paisesConLand.push(countries[i]);
    } else {
        paisesSinLand.push(countries[i])
    }
}
console.log(paisesConLand);
console.log(`Todos estos paises no tienen la palabra 'land': ${paisesSinLand.join(', ')}.`)

// En el array countries anterior, verifica si hay un país que termina con una subcadena (substring) 'ia'. Si hay países que terminan con 'ia', imprimelo como un array. Si no hay ningún país que contenga la palabra 'ia', imprime 'Estos países no terminan con ia'.
let paisesConIa = [];
let paisesSinIa = [];
let cont = 0;
while (cont < countries.length) {
    if(countries[cont].endsWith('ia')) {
        paisesConIa.push(countries[cont])
    } else {
        paisesSinIa.push(countries[cont])
    }
    cont++;
}
console.log(paisesConIa);
console.log(`Estos paises no terminan con 'ia': ${paisesSinIa.join(', ')}.`)

// 9. Usando el array countries anterior, encuentre el país que contiene la mayor cantidad de caracteres.
let paisConMasCaracteres = countries[0]; // ya inicializa con el primer pais
for(let i = 0; i < countries.length; i++) {
    if(countries[i].length > paisConMasCaracteres.length) {
        paisConMasCaracteres = countries[i];
    }
}
console.log(`EL pais con más caracteres es: ${paisConMasCaracteres}`)

// 10. Usando el array countries anterior, encuentre el país que contiene sólo 5 caracteres.
let paisCon5Caracteres = [];
for(let i = 0; i < countries.length; i++) {
    if(countries[i].length === 5) {
        paisCon5Caracteres.push(countries[i])
    }
}
if(paisCon5Caracteres.length > 0) {
    console.log(`Paises con 5 caracteres: ${paisCon5Caracteres}`)
} else {
    console.log("Ningún país de esta lista tiene 5 caracteres")
}

// 11. Encuentra la palabra más larga en el array webTechs
const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];
let techMasLarga = webTechs[0];
for(let i = 0; i < webTechs.length; i++) {
    if(webTechs[i].length > techMasLarga.length) {
        techMasLarga = webTechs[i];
    }
}
console.log(techMasLarga) // JavaScript

// 12. Utiliza el array de webTechs para crear la el siguiente array de arrays:
let arrayTechGeneral = [];
for(let i = 0; i < webTechs.length; i++) {
    let largo = webTechs[i].length;
    let arrayTechLong = [webTechs[i], largo];
    arrayTechGeneral.push(arrayTechLong)
}
console.log(arrayTechGeneral) // [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

// 13. Una aplicación creada con MongoDB, Express, React y Node se denomina MERN stack app. Crea el acrónimo MERN usando el array mernStack
const mernStack = ["MongoDB", "Express", "React", "Node"];
let mern = "";
for(let i = 0; i < mernStack.length; i++) {
    mern += mernStack[i][0] // ya las letras están en mayúsculas
}
console.log(mern) // MERN

// 14. Iterar a través del array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando el bucle for o el bucle for of e imprime los elementos.
for (const web of webTechs) {
    console.log(web)
}

// 15. Este es un array de frutas, ['banana', 'orange', 'mango', 'lemon'] invierte el orden usando un bucle sin usar el método reverse().
let frutas = ['banana', 'naranja', 'mango', 'lemon'];
let frutasReverse = [];
for (let i = frutas.length-1; i >= 0; i--) {
    frutasReverse.push(frutas[i])
}
console.log(frutasReverse) // ['lemon', 'mango', 'naranja', 'banana']

// 16. Imprime todos los elementos del array como se muestra a continuación:
const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
  ];
for (const stack of fullStack) {
    for (const techs of stack) {
        console.log(techs)
    }
}

// EJERCICIOS NIVEL 3
// Copiar array de countries (Evitar mutación). CUALQUIERA DE ESTAS TRES MANERAS FUNCIONA Y NO MODIFICA EL ARRAY ORIGINAL
let countriesCopy = countries.slice();
countriesCopy = countries.concat();
countriesCopy = [...countries];
console.log(countriesCopy)

// 2. Los arrays son mutables. Crea una copia del array que NO modifique el original. Ordena la copia del array y guárdala en una variable sortedCountries
// let sortedCountries = countriesCopy.sort(); // No puedo usar sort porque modifica el array original

// let sorted = false;
// while(!sorted) {
//     sorted = true;
//     for(let i = 0; i < countriesCopy.length; i++) {
//         if(countriesCopy[i] > countriesCopy[i+1]) {
//             let temp = countriesCopy[i];
//             countriesCopy[i] = countriesCopy[i + 1];
//             countriesCopy[i + 1] = temp;
// Primero, el código crea una variable llamada originalArray y le asigna el siguiente array:
// ["banana", "lemon", "mango", "orange"]
// A continuación, el código crea una nueva variable llamada copiedArray y le asigna una copia de originalArray. Esto se hace usando el método slice(), que crea una nueva copia de un array.

// A continuación, el código comienza un bucle while. El bucle continuará ejecutándose mientras la variable sorted sea falsa.

// Al principio de cada iteración del bucle, la variable sorted se establece en true. Esto se hace para asumir que el array ya está ordenado.

// A continuación, el código comienza un bucle for. El bucle for itera a través de cada elemento de copiedArray.

// Dentro del bucle for, el código comprueba si el elemento actual es mayor que el siguiente elemento. Si lo es, el código intercambia las posiciones de los dos elementos. Esto se hace asignando el valor del elemento actual a una variable temporal, asignando el valor del siguiente elemento al elemento actual y asignando el valor de la variable temporal al siguiente elemento.

// A continuación, el código comprueba si se han producido cambios en la iteración actual del bucle while. Si se han producido cambios, la variable sorted se establece en false. Esto se hace para indicar que el array aún no está ordenado.

// El bucle while se repite hasta que la variable sorted es true. Esto significa que el array está ordenado.

// A continuación, el código imprime el valor de copiedArray. Esto mostrará el siguiente array:Cse;
//         }
//     }
// }
// console.log(countriesCopy)

const originalArray = ["banana", "lemon", "mango", "orange"]

// Paso 1: Copiar el array original
const copiedArray = originalArray.slice();

// Paso 2: Ordenar el array copiado manualmente
let sorted = false;
while (!sorted) { // "se ejecutará mientras sorted sea false"
  sorted = true; // Suponemos que el array ya está ordenado

  for (let i = 0; i < copiedArray.length - 1; i++) {
    if (copiedArray[i] > copiedArray[i + 1]) {
      // Si el elemento actual es mayor que el siguiente, cambia su posición
      const temp = copiedArray[i];
      copiedArray[i] = copiedArray[i + 1];
      copiedArray[i + 1] = temp;

      // Indicamos que hubo cambios en la iteración
      sorted = false;
    }
  }
}

// El array copiado ahora está ordenado alfabéticamente
console.log(sorted); // Output: ["banana", "lemon", "mango", "orange"]
// EXPLICACION DEL CODIGO
// Primero, el código crea una variable llamada originalArray y le asigna el siguiente array: ["banana", "lemon", "mango", "orange"]
// A continuación, el código crea una nueva variable llamada copiedArray y le asigna una copia de originalArray. Esto se hace usando el método slice(), que crea una nueva copia de un array.

// A continuación, el código comienza un bucle while. El bucle continuará ejecutándose mientras la variable sorted sea falsa.

// Al principio de cada iteración del bucle, la variable sorted se establece en true. Esto se hace para asumir que el array ya está ordenado.

// A continuación, el código comienza un bucle for. El bucle for itera a través de cada elemento de copiedArray.

// Dentro del bucle for, el código comprueba si el elemento actual es mayor que el siguiente elemento. Si lo es, el código intercambia las posiciones de los dos elementos. Esto se hace asignando el valor del elemento actual a una variable temporal, asignando el valor del siguiente elemento al elemento actual y asignando el valor de la variable temporal al siguiente elemento.

// A continuación, el código comprueba si se han producido cambios en la iteración actual del bucle while. Si se han producido cambios, la variable sorted se establece en false. Esto se hace para indicar que el array aún no está ordenado.

// El bucle while se repite hasta que la variable sorted es true. Esto significa que el array está ordenado.

// A continuación, el código imprime el valor de copiedArray. Esto mostrará el siguiente array:


// 3. Ordena el array webTechs y el array mernStack
console.log(webTechs) // ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
webTechs.sort();
console.log(webTechs) // ['CSS', 'HTML', 'JavaScript', 'MongoDB', 'Node', 'React', 'Redux']

console.log(mernStack) // ['MongoDB', 'Express', 'React', 'Node']
mernStack.sort();
console.log(mernStack) // ['Express', 'MongoDB', 'Node', 'React']

// 4. Extrae todos los países que contengan la palabra 'land' del array countries e imprimela como un array
const countries1 = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombi', 'Comoros', 'Congo (Brazzaville)', 'Congo', 'Costa Rica', "Cote d'Ivoire", 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor (Timor Timur)', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia, The', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];

let paisConLand = [];
for(let i = 0; i < countries1.length; i++) {
    if(countries1[i].endsWith('land')) {
        paisConLand.push(countries1[i])
    }
}
console.log(paisConLand) // ['Finland', 'Iceland', 'Ireland', 'New Zealand', 'Poland', 'Swaziland', 'Switzerland', 'Thailand']

// 5. Encuentra el país que contiene la mayor cantidad de caracteres en el array countries
// countries = ["Albania","Bolivia","Canada","Denmark","Ethiopia","Finland","Germany","Hungary","Ireland","Japan","Kenya","Iceland"
//   ];
let paisConMasCaracteres1 = countries1[0];

for(let i = 0; i < countries1.length-1; i++) { // countries.length - 1 en la condición del bucle es importante para evitar exceder los límites del array y acceder a un elemento que no existe en la última iteración.
    if(countries1[i].length > paisConMasCaracteres1.length) {
        paisConMasCaracteres1 = countries1[i]
    }
}
console.log(paisConMasCaracteres1) // Central African Republic
// MAS ARRIBA YA LO HABIA HECHO ASI
/*
let paisConMasCaracteres = countries[0]; // ya inicializa con el primer pais
for(let i = 0; i < countries.length; i++) {
    if(countries[i].length > paisConMasCaracteres.length) {
        paisConMasCaracteres = countries[i];
    }
}
console.log(`EL pais con más caracteres es: ${paisConMasCaracteres}`)
*/

// 6. Extrae todos los países que contienen la palabra 'land' del array countries e imprimela como un array
let paisConLand1 = [];
for(let i = 0; i < countries1.length; i++) {
    if(countries1[i].includes('land')) {
        paisConLand1.push(countries1    [i])
    }
}
console.log(paisConLand1) // ['Finland', 'Iceland', 'Ireland', 'Marshall Islands', 'Netherlands', 'New Zealand', 'Poland', 'Solomon Islands', 'Swaziland', 'Switzerland', 'Thailand']

// 7. Extrae todos los países que contengan solo cuatro caracters del array countries e impremela como un array
let paisCon4Caracteres = [];
for(let i = 0; i < countries1.length-1; i++) {
    if(countries1[i].length === 4) {
        paisCon4Caracteres.push(countries1[i])
    }
}
console.log(paisCon4Caracteres) //['Chad', 'Cuba', 'Fiji', 'Iran', 'Iraq', 'Laos', 'Mali', 'Oman', 'Peru', 'Togo']

// 8. Extrae todos los paíse que contengan dos o más palabras del array countries e imprimela como un array
let dosPalabras = [];
for(let i = 0; i < countries1.length-1; i++) {
    if(countries1[i].includes(' ')) {
        dosPalabras.push(countries1[i])
    }
}
console.log(dosPalabras)

// 9. Invertir el array countries y poner en mayúscula cada país y almacenalo en un array
let paisesEnMayuscula = [];
let countries1Copy = countries1.slice(); // copio el array para no modificar el original
let reverse = countries1Copy.reverse(); // cambio el orden de la copia
for(let i = 0; i < reverse.length; i++) {
    reverse[i] = reverse[i].toUpperCase()
}
console.log(reverse)
