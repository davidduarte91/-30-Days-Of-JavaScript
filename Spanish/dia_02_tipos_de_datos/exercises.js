// 1. Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.
let desafio = "30 días de JavaScript";

// 2. Imprima la cadena en la consola del navegador usando console.log()
console.log(desafio); 

// 3. Imprima la longitud de la cadena en la consola del navegador usando console.log()
console.log(desafio.length) // 21

// 4. Cambie todos los caracteres de la cadena a letras mayúsculas usando el método toUpperCase()
let upperCase = desafio.toUpperCase();
console.log(upperCase) // 30 DAYS OF JAVASCRIPT

// 5. Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
let lowerCase = desafio.toLowerCase();
console.log(lowerCase) // 30 days of javascript

// 6. Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
console.log(desafio.substring(0, 2)) // 30
//otro ejemplo
let primeraPalabra = desafio.substring(0, desafio.indexOf(' '));
console.log(primeraPalabra); // 30 -> toma los índices inicial y final (no inclusivo) de la subcadena. En este caso, hemos utilizado desafio.indexOf(' ') para obtener el índice del primer espacio en blanco y así segmentar la cadena hasta ese punto.

// 7. Corta la frase Days Of JavaScript de 30 Days Of JavaScript.
let cortarFrase = desafio.substring(desafio.indexOf('D'), desafio.length)
console.log(cortarFrase) // Days of JavaScript

// 8. Verifique si la cadena contiene una palabra Script usando el método includes()
console.log(desafio.includes('Script')) // true

// 9. Divide la cadena en un array usando el método split()
let divideCadena = desafio.split('')
console.log(divideCadena) // ['3', '0', ' ', 'D', 'a', 'y', 's', ' ', 'o', 'f', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

// 10. Divida la cadena 30 días de JavaScript en el espacio usando el método split()
console.log(desafio.split(' ')) // ['30', 'Days', 'of', 'JavaScript']

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.
let empresas = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(empresas.split(', ')) // ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 12. Cambie 30 días de JavaScript a 30 días de Python usando el método replace().
console.log(desafio.replace('JavaScript', 'Python'))

// 13. ¿Cual es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().
console.log(desafio.charAt(15))

// 14. ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()
console.log(desafio.charCodeAt(desafio.indexOf('J'))) // 74 -> charCodeAt toma el índice y no la letra directamente

// 15. Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
console.log(desafio.indexOf('a')) // 5

// 16. Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
console.log(desafio.lastIndexOf('a')) // 14

// 17. Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let oracion = "NO puedes terminar una oración con porque porque porque es una conjuncion"
console.log(oracion.indexOf('porque')) // 35 -> no poner la p sola xq va a dar la posición 3

// 18. Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oracion.lastIndexOf('porque')) // 49

// 19. Usa search para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oracion.search('porque')) // 35 -> p está en esta posición

// 20. Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript'.
let oracion1 = "  Espacios al principio y al final    "
console.log(oracion1.trim()) // (espacios eliminados) 

// 21. Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(desafio.startsWith('30 días')) // true

// 22. Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(desafio.endsWith("Script")) // true

// 23. Usa el método match() para encontrar todos los a en 30 días de JavaScript
console.log(desafio.match(/a/g)) // ['a', 'a', 'a']

// 24. Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
let primeraParte = "30 días de";
let segundaParte = "JavaScript";
console.log(primeraParte.concat(' ', segundaParte)) // 30 días de JavaScript

// 25. Use el método repeat() para imprimir 30 días de JavaScript 2 veces
console.log(desafio.repeat(2)) // 30 días de JavaScript30 días de JavaScript

// Ejercicio: Nivel 2

// 1. Usando console.log() imprima la siguiente declaración: (esto es para no usar comillas simples dentro de las dobles)
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

// 2. Usando console.log() imprima la siguiente cita de la Madre Teresa: (para usar secuencias de escape en las comillas del isn't)
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."')

// 3. Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.
let ten = 10;
let tenString = '10';
console.log(typeof ten) // number
console.log(typeof tenString) // string
// para pasar el string a numero
let newTenString = parseInt(tenString);
console.log(typeof newTenString == typeof ten) // true

// 4. Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.
let numberFloat = parseFloat("9.81");
console.log(numberFloat) // 9.81
console.log(Math.round(numberFloat)) // 10

// 5. Verifique si 'on' se encuentra tanto en python como en jargon
let palabra1 = "python"
let palabra2 = "jargon"
console.log(palabra1.includes('on')) // true
console.log(palabra2.includes('on')) // true

// 6. Espero que este curso no esté lleno de jerga. Compruebe si jerga está en la oración.
let oracion2 = "Espero que este curso no esté lleno de jerga"
console.log(oracion2.includes('jerga')) // true
// otra manera usando indexOf
let oracion3 = "Espero que este curso no esté lleno de jerga";
let posicion = oracion3.indexOf("jerga");

let seEncuentraJerga = posicion !== -1;

console.log(seEncuentraJerga); // true

// 7. Genere un número aleatorio entre 0 y 100 inclusive.
let numAleatorio = Math.floor(Math.random() * 101)
console.log(numAleatorio)

// 8. Genere un número aleatorio entre 50 y 100 inclusive.
let numAleatorio1 = Math.floor(Math.random() * 51) + 50;
console.log(numAleatorio1)

// 9. Genere un número aleatorio entre 0 y 255 inclusive.
let numAleatorio2 = Math.floor(Math.random() * 256)
console.log(numAleatorio2)

// 10. Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
let cadena = "JavaScript";
let numAleatorio3 = Math.floor(Math.random() * cadena.length)
console.log(cadena[numAleatorio3])

// 11. Use console.log() y caracteres de escape para imprimir el siguiente patrón.
console.log('1\t1\t1\t1\t1')
console.log('2 1 2 4 8')

// 12. Usa substr para separar la frase porque porque porque de la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let oracion4 = "No puedes terminar una oración con porque porque porque es una conjunción"
console.log(oracion4.substring(oracion4.indexOf('porque'), oracion4.lastIndexOf(' es')))
console.log(oracion4.lastIndexOf(' es')) // 55

// Ejercicios: Nivel 3
// 1. 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor'. Cuente el número de palabras amor en esta oración.
let oracion5 = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor';
let arrayDeAmor = oracion5.match(/amor/g)
console.log(arrayDeAmor.length) // 3 -> porque dió ['amor', 'amor', 'amor']

// Una manera más larga. Al principio me tiraba 2 de conteo pero xq la última palabra amor tenía el punto final al lado y ya cambiaba la palabra
let oracion6 = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor';
let palabras = oracion6.split(' ');
console.log(palabras)
let conteo = 0;

for (let i = 0; i < palabras.length; i++) {
  if (palabras[i].toLowerCase() === 'amor') {
    conteo++;
  }
}

console.log('Número de veces que aparece la palabra "amor": ' + conteo);

// 2. Usa match() para contar el número de todos los porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let oracion7 = 'No puedes terminar una oración con porque porque porque es una conjunción';
let arrPorque = oracion7.match(/porque/g);
console.log(arrPorque.length)

// 3. Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace y expresiones regulares).
let sentence =   "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let newSentence = sentence.replace(/[^,\.\w\s]/g, '')
console.log(newSentence)
// I am a teacher, and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher This 30DaysOfJavaScript is also the result of love of teaching

// 4. Calcula el ingreso anual total de la persona extrayendo los números del siguiente texto. 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'
let text = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.';
let arrIngresos = text.match(/\d+/g) 
console.log(arrIngresos) // ['5000', '10000', '15000']
let sumaIngresos = parseInt(arrIngresos[0]) + parseInt(arrIngresos[1])  + parseInt(arrIngresos[2]) ;
console.log(sumaIngresos) // 30000 -> en número
console.log(`El ingreso anual de la persona es: ${sumaIngresos}`) // El ingreso anual de la persona es: 30000
