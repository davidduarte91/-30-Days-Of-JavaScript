// EJERCICIOS NIVEL 1
// 2. Defina una función callback antes de utilizarla en forEach, map, filter o reduce.
const sayHello = () => {
    console.log('Hola')
}
// ----------------------------

// 3. Utiliza forEach para mostrar con console.log cada país del array de países.
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand", "France"];

countries.forEach((country) => console.log(country));
// ----------------------------

// 4. Utiliza forEach para mostrar con console.log cada nombre del array de nombres.
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

names.forEach((element) => {
    console.log(element)
})
// -------------------------------

// 5. Utiliza forEach para mostrar con console.log cada número del array de números.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(num => console.log(num))
// -----------------------------

// 6. Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el array de países.
const countryToUppCase = countries.map((element, index, arr) => element.toUpperCase());
console.log(countryToUppCase) // ['FINLAND', 'SWEDEN', 'DENMARK', 'NORWAY', 'ICELAND']
// -------------------------------

// 7. Utilice map para crear un array de longitudes de países a partir del array de países.
const countriesLength = countries.map((element) => {
    return element.length
});
console.log(countriesLength) // [7, 6, 7, 6, 7]
// -----------------------------------

// 8. Usa map para crear un nuevo array cambiando cada número al cuadrado en el array de números.
const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers) // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
// --------------------------------

// 9. Utilice map para cambiar cada nombre a mayúsculas en el array de nombres.
const nameToUppCase = names.map(name => name.toUpperCase());
console.log(nameToUppCase) // ['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']
// ------------------------------

// 10. Utilice map para asignar el array de productos a sus correspondientes precios.
const products = [
    { product: "banana", price: 3 },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: 8 },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
];

const productsPrice = products.map(elem => 
    +elem.price // el + es para que todos los precios sean de tipo numérico
);
console.log(productsPrice) // [3, 6, 0, 8, 10, 0]
// -------------------------------

// 11. Utilice filter para filtrar los países que contienen land.
const countriesWithLand = countries.filter(elem => {
    const lowercasedElem = elem.toLowerCase();
    return lowercasedElem.includes('land');
});

console.log(countriesWithLand) // ['Finland', 'IceLand']
// --------------------------------

// 12. Utilice filter para filtrar los países que tienen seis caracteres.
const countriesSixLength = countries.filter((elem) => {
    return elem.length === 6;
})
console.log(countriesSixLength) // ['Sweden', 'Norway']
// -------------------------------

// 13. Utilice filter para filtrar los países que contengan seis letras o más en el array de países.
const sixPlusCountries = countries.filter(elem => {
    return elem.length > 6
})
console.log(sixPlusCountries) // ['Finland', 'Denmark', 'IceLand']
// --------------------------------------

// 14. Utilice filter para filtrar los países que empiezan por "D"
const countriesStartE = countries.filter(elem => {
    return elem.startsWith('D')
});
console.log(countriesStartE) // ['Denmark']
// -------------------------------------

// 15. Utilice filter para filtrar sólo los precios con valores.
const productsWithPrice = products.filter(elem => {
    return typeof elem.price === 'number' && !isNaN(elem.price) // Que sea tipo numerico y que no sea un NaN
});
console.log(productsWithPrice) /*
                                    {product: 'banana', price: 3}
                                    {product: 'mango', price: 6}
                                    {product: 'avocado', price: 8}
                                    {product: 'coffee', price: 10} */
// ----------------------------------

// 16. Declara una función llamada getStringLists que toma un array como parámetro y devuelve un array sólo con elementos string.
function getStringLists(arr) {
    return arr.filter(elem => typeof elem === 'string')
}

let arrayVariado = ['pato', 2, true, 'ola', NaN, 34, false, 'atun'];
console.log(getStringLists(arrayVariado)) // ['pato', 'ola', 'atun']
// ----------------------------------

// 17. Usa reduce para sumar todos los números del array de números.
/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];*/
const sumaArray = numbers.reduce((acc, number) => {
    return acc + number
});
console.log(sumaArray) // 55

// --------------------------------
// 18. Utiliza reduce para concatenar todos los países y producir esta frase: Estonia, Finland, Sweden, Denmark, Norway, y IceLand son países del norte de Europa
const frase = countries.reduce((acc, pais, indice, array) => {
    if (indice === array.length - 1) {
        // ultimo pais en el array
        return acc + `y ${pais} son paises del norte de Europa`;    
    } else {
        // Paises intermedios
        return acc + `${pais}, `
    }
}, "");

console.log(frase)

// --------------------------------
// 20. Utilice some para comprobar si la longitud de algunos nombres es superior a siete en el array de nombres.
// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const nameLenghtMoreThanSeven = names.some(name => {
    return name.length > 7;
})
console.log(nameLenghtMoreThanSeven) // true (hay al menos un nombre con longitud > 7)

// -------------------------------
// 21.Utilice every para comprobar si todos los países contienen la palabra land.
const anyLandCountry = countries.every(element => element.toLowerCase().includes('land'));
console.log(anyLandCountry) // false (no todos los paises contienen land)

// --------------------------------
// 22. Explique la diferencia entre find y findIndex.
// Find: retorna el primer elemento que cumple la condición
// findIndex = retorna el índice del primer elemento que cumple la condición

// ---------------------------
// 23.Utilice find para encontrar el primer país que contenga sólo seis letras en el array de países.
// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const firstCountrySixLentgh = countries.find(elem => {
    return elem.length === 6;
})
console.log(firstCountrySixLentgh) // Sweden

// ------------------------------------
//24. Utilice findIndex para encontrar la posición del primer país que contenga sólo seis letras en el array de países.
const indexOfCountrySixLength = countries.findIndex(elem => elem.length === 6);
console.log(indexOfCountrySixLength) // 1 (Sweden está en la posición 1)

//------------------------------------
// 25. Utilice findIndex para encontrar la posición de Norway si no existe en el array obtendrá -1.
const norwayPosition = countries.findIndex(elem => {
    return elem === 'Norway'
});
console.log(norwayPosition) // 3

// --------------------------------
// Utilice findIndex para encontrar la posición de Russia si no existe en el array obtendrá -1.
const russiaPosition = countries.findIndex(elem => {
    return elem === 'Russia'
});
console.log(russiaPosition) // -1

// EJERCICIOS NIVEL 2
// 1. Encuentre el precio total de los productos encadenando dos o más iteradores de matrices (por ejemplo, arr.map(callback).filter(callback).reduce(callback)).
const products1 = [
    { product: "banana", price: 3 },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: 8 },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
];

const sumaTotalProductos = products1
    .map(elem => +elem.price) // [3, 6, 0, 8, 10, 0] para convertir los precios a números 
    .reduce((acc, number) => acc + number, 0)
console.log(sumaTotalProductos) // 27
// En mi solución asumo que todos los elementos en products1 tienen precios numéricos válidos. 
// En situaciones donde algunos precios puedan ser no numéricos o no estén presentes, el uso de filter podría ser beneficioso para asegurar que solo se consideren precios válidos en el cálculo.

// CHATGPT
const totalPrice = products1
    .filter(product => typeof product.price === 'number' && !isNaN(product.price)) //  // Filtra solo productos con precios numéricos válidos
    .map(product => product.price) // // Obtiene un array con los precios
    .reduce((acc, price) => acc + price, 0) // // Suma los precios para obtener el precio total

console.log(totalPrice) // 27

// -----------------------------
// 2. Encuentre la suma del precio de los productos usando sólo reduce(callback)).
const totalPrice1 = products1.reduce((acc, product, index, array) => {
    if(typeof product.price === 'number' && !isNaN(product.price)) {
        return acc + product.price
    }
    return acc
}, 0)
console.log(totalPrice1) // 27
/*Asegúrate de incluir return acc; fuera del bloque condicional para garantizar que el acumulador se devuelva incluso cuando la condición no se cumple. De esta manera, el acumulador seguirá acumulando correctamente los precios válidos. */

//-----------------------------------------
// 3. Declara una función llamada categorizeCountries que retorna un array de países que tienen algún patrón común (encuentras el array de países en este repositorio como countries.js(ej 'land', 'ia', 'island','stan')).
const countries1 = [
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
];

const categorizeCountries = (array) => {
    return array.filter(elem => elem.includes('ia'))
}
console.log(categorizeCountries(countries1)) // ['Albania', 'Bolivia', 'Ethiopia']

// Usando map y filter
const categorizeCountries1 = (array) => {
    return array
        .map(elem => elem.includes('ia') ? elem : null) // si cumple la condición añade el elemento, sino añade null
        .filter(elem => elem !== null); // para que no incluya los elementos null en el array final
};
console.log(categorizeCountries1(countries1))

// --------------------------------
// 4. // Crea una función que devuelva un array de objetos, donde cada objeto contenga la letra y el número de veces que esa letra se utiliza para comenzar el nombre de un país.

const generateCountryInitialsCount = (countries) => {
    // Array que contendrá objetos con la letra inicial y su recuento correspondiente
    const resultArray = [];
  
    // Iterar sobre los nombres de los países
    countries.forEach(country => {
      // Obtener la primera letra y convertirla a minúsculas
      const firstLetter = country.charAt(0).toLowerCase();
  
      // Buscar si ya existe un objeto con la letra en el array resultante
      const existingObject = resultArray.find(obj => obj.letter === firstLetter);// Si encuentra devuelve el objeto que cumple la condicion:{letter: 'f', count: 1}, sino undefined
        console.log(existingObject)
      // Verificar si ya existe un objeto con la letra en el array
      if (existingObject) {
        existingObject.count += 1; // Incrementar el recuento si ya existe
      } else {
        // Si no existe, crear un nuevo objeto y agregarlo al array
        resultArray.push({ letter: firstLetter, count: 1 });
      }
    });
  
    // Retornar el array de objetos resultante
    return resultArray;
};
  
// Llamar a la función y mostrar el resultado en la consola
const result = generateCountryInitialsCount(countries);
console.log(result); //hay 5 letras distintas


// CON REDUCE -----------------------------------------------------------
const generateCountryInitialsCount1 = (countries) => {
    return countries.reduce((resultArray, country) => {
      const firstLetter = country.charAt(0).toLowerCase();
      const existingObject = resultArray.find(obj => obj.letter === firstLetter); //Si no encuentra, find devuelve -1
  
      if (existingObject) {
        existingObject.count += 1;
      } else {
        resultArray.push({ letter: firstLetter, count: 1 });
      }
  
      return resultArray;
    }, []);
  };
  
const result1 = generateCountryInitialsCount(countries);
console.log(result);

// --------------------------------------------------------------------
//5.Declara una función getFirstTenCountries y retorna un array de diez países. Utiliza diferente programación funcional para trabajar en el array countries.js
const getFirstTenCountries = (countries) => {
    if(countries.length < 10) {
        return 'menos de 10'
    }

    const tenCountries = [];
    countries.forEach(elem => {
        if(tenCountries.length < 10) {
            tenCountries.push(elem)
        }
    });
    return tenCountries
}

const countries2 = ["Albania","Bolivia","Canada","Denmark","Ethiopia","Finland","Germany","Hungary","Ireland", "Japan", "kenia"];
console.log(getFirstTenCountries(countries2))

// CHATGPT -----------------------
const getFirstTenCountries1 = (array) => {
    return array.slice(0, 10)
}
console.log(getFirstTenCountries1(countries2))

// --------------------------------------------------------------------------------------------------------------------------
// 6. Declara una función getLastTenCountries que devuelve los últimos diez países del array de países.
let getLastTenCountries = (array) => {
    let paisDeInicio = array.length - 10;
    let paisFinal = array.length;
    return array.slice(paisDeInicio, paisFinal)
}
console.log(getLastTenCountries(countries2))



const getLastTenCountries1 = (countries) => {
    return countries.slice(-10);
  };
  
 
  
  const lastTenCountries = getLastTenCountries1(countries2);
  console.log(lastTenCountries);
  