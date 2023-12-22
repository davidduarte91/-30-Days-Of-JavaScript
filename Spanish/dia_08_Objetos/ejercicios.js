// EJERCICIOS NIVEL 1
// 1. Crear un objeto vacío llamado dog
const dog = {}
// 2. Imprime el objeto dog en la consola
console.log(dog)
// 3. Añade las propiedades name, legs, color, age y bark para el objeto dog. La propiedad bark es un método que devuelve woof woof
dog.name = "Bingo";
dog.legs = 4;
dog.color = "brown and white";
dog.age = 4;
dog.bark = function() {
    return "woof woof"
}
// 4. Obtener name, legs, color, age y el valor de bark del objeto dog
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark())
// 5. Establecer nuevas propiedades al objeto dog: breed, getDogInfo
dog.breed = "Collie";
dog.getDogInfo = function() {
    return `My dog name is ${this.name} and he has ${this.age} year.\nHis breed is ${this.breed} and his color is ${this.color}\nThe noise he do is ${this.bark()}`
};
console.log(dog.getDogInfo())
// ------------------------------------------------------------------------------------

// EJERCICIOS NIVEL 2
// 1. Encuentra a la persona que tiene muchas habilidades en el objeto de los usuarios.
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };

// Sacar los nombres de los usuarios en un array. Esto se hace con Object.keys()
// Hacer un recorrido por cada usuario con un for, y sacar la cantidad de skills y guardar en una variable
// Comparar si es mayor o no. Al que tenga mayor cantidad de skills mostrar en consola
function masSkills(users) { // acá este parámetro "users" aún no se refiere específicamente al objeto users. Es para usarlo dentro de la funcion
    let arrayDeUsuarios = Object.keys(users); // Obtiene un array con los nombres de usuario.

     // Inicializa el usuario con más habilidades y el número de habilidades.
    let userConMasSkills = arrayDeUsuarios[0];
    let maxNumeroSkills = users[userConMasSkills].skills.length;

    // Itera a través de los nombres de usuario.
    for(let i = 0; i < arrayDeUsuarios.length; i++) {
        const usuarioActual = arrayDeUsuarios[i];
        const contadorActualSkills = users[usuarioActual].skills.length;

        // Comprueba si el usuario actual tiene más habilidades.
        if(contadorActualSkills > maxNumeroSkills) {
        userConMasSkills = usuarioActual; // string de nombre
        maxNumeroSkills = contadorActualSkills; // numero de skills
        }
    }
    return `El usuario ${userConMasSkills} es el que más skills tiene: ${maxNumeroSkills} en total`
};
console.log(masSkills(users)) // El usuario Asab es el que más skills tiene: 8 en total

// CHATGPT - Iteró con for
let userWithMostSkills = null;  // Inicializa una variable para realizar un seguimiento del usuario con más habilidades. Al principio, no tenemos un usuario con más habilidades, por lo que se establece en null.
let maxSkills = 0;  // Inicializa una variable para realizar un seguimiento del número máximo de habilidades encontrado hasta el momento. Al principio, no tenemos habilidades registradas, por lo que se establece en 0.

for (const username in users) {  // Itera a través de cada usuario en el objeto 'users'.
  const user = users[username];  // Obtiene el objeto de usuario actual.

  // Obtiene el número de habilidades (skills) que tiene el usuario actual y lo almacena en 'numSkills'.
  const numSkills = user.skills.length;

  if (numSkills > maxSkills) {  // Compara 'numSkills' con el número máximo de habilidades registrado.
    maxSkills = numSkills;  // Si 'numSkills' es mayor que el número máximo de habilidades encontrado hasta el momento, actualiza 'maxSkills' con el nuevo valor.
    userWithMostSkills = username;  // También actualiza 'userWithMostSkills' con el nombre de usuario actual, ya que este usuario tiene más habilidades que los anteriores.
  }
}

if (userWithMostSkills !== null) {  // Verifica si se encontró algún usuario con habilidades (si 'userWithMostSkills' no sigue siendo null).
  const mostSkillsUser = users[userWithMostSkills];  // Obtiene el objeto del usuario con más habilidades.

  // Imprime un mensaje que indica quién es el usuario con más habilidades y cuántas habilidades tiene.
  console.log(`El usuario con más habilidades es ${userWithMostSkills} con ${maxSkills} habilidades.`);
} else {
  // Si no se encontraron usuarios en el objeto 'users' (ningún usuario tiene habilidades), imprime un mensaje que lo indica.
  console.log('No se encontraron usuarios en el objeto users.');
}
// --------------------------------------------------------------------------------------------------------

// 2. Contar los usuarios conectados, contar los usuarios que tienen más de 50 puntos del siguiente objeto.
function cantUsersConectados(users) {
    let cantUsuariosConectados = 0;
    for(const username in users) {
        const user = users[username];
        if(user.isLoggedIn === true) {
        cantUsuariosConectados++
        }
    }
    return `Cantidad de usuarios conectados: ${cantUsuariosConectados}`
}
console.log(cantUsersConectados(users)) // 2
// -------------------------------------------------------------------------------------------------------

// 3. Encontrar personas que sean desarrolladores MERN stack del objeto de los usuarios
const mernDevelopers = (users) => {
    let dev = [];
    for(const username in users) {
        let user = users[username]; 
        let userSkills = user.skills; 
        
        if(userSkills.includes("MongoDB") && userSkills.includes("Express") && userSkills.includes("React") && userSkills.includes("Node")) {
            dev.push(username)
        }
        
    }
    return `Desarrolladores MERN: ${dev}`
}
console.log(mernDevelopers(users)) // Desarrolladores MERN: Asab,Paul

// CHATGPT
function findMernStackDevelopers(users) {
    const mernStackSkills = ['MongoDB', 'Express', 'React', 'Node'];
    const mernStackDevelopers = [];
  
    for (const username in users) {
      const user = users[username];
      const userSkills = user.skills;
  
      // Verifica si el usuario tiene todas las habilidades de la pila MERN.
      const isMernDeveloper = mernStackSkills.every(skill => userSkills.includes(skill));
  
      if (isMernDeveloper) {
        mernStackDevelopers.push(username);
      }
    }
  
    return mernStackDevelopers;
  }
const mernDevelopers2 = findMernStackDevelopers(users);
console.log("Desarrolladores MERN Stack:", mernDevelopers2); // (2) ['Asab', 'Paul']
// --------------------------------------------------------------------------------------------------------

// 4. Establezca su nombre en el objeto usuarios sin modificar el objeto usuarios original
const usersCopy = Object.assign({}, users);
usersCopy.David = {};
// -------------------------------------------------------------------------------------------------------

// 5. Obtener todas las claves o propiedades del objeto usuarios
const devs = Object.keys(usersCopy);
console.log(devs) // ['Alex', 'Asab', 'Brook', 'Daniel', 'John', 'Thomas', 'Paul', 'David']

// adicional: sacar las claves de un usuario
const skills = Object.keys(usersCopy.Alex); // ['email', 'skills', 'age', 'isLoggedIn', 'points']

// adicional: sacar las claves de cada usuario
for(const username in users) {
    const user = users[username];
    const keys = Object.keys(user);
    console.log(`Claves de ${username}: ${keys}`)
}
/*Claves de Alex: email,skills,age,isLoggedIn,points
Claves de Asab: email,skills,age,isLoggedIn,points
Claves de Brook: email,skills,age,isLoggedIn,points
Claves de Daniel: email,skills,age,isLoggedIn,points
Claves de John: email,skills,age,isLoggedIn,points
Claves de Thomas: email,skills,age,isLoggedIn,points
Claves de Paul: email,skills,age,isLoggedIn,points*/
// ------------------------------------------------------------------------------------------------------------

// 6. Obtener todos los valores del objeto usuarios
const usersValues = Object.values(users);
console.log(usersValues)
/*(7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {email: 'alex@alex.com', skills: Array(3), age: 20, isLoggedIn: false, points: 30}
1: {email: 'asab@asab.com', skills: Array(8), age: 25, isLoggedIn: false, points: 50}
2: {email: 'daniel@daniel.com', skills: Array(5), age: 30, isLoggedIn: true, points: 50}
3: {email: 'daniel@alex.com', skills: Array(4), age: 20, isLoggedIn: false, points: 40}
4: {email: 'john@john.com', skills: Array(6), age: 20, isLoggedIn: true, points: 50}
5: {email: 'thomas@thomas.com', skills: Array(4), age: 20, isLoggedIn: false, points: 40}
6: {email: 'paul@paul.com', skills: Array(7), age: 20, isLoggedIn: false, points: 40} */
// ------------------------------------------------------------------------------------------------------------

// 7. Utilice el objeto países para imprimir el nombre del país, la capital, la población y los idiomas.
const countries = {
    Argentina: {
      capital: 'Buenos Aires',
      poblacion: 45195777,
      idiomas: ['español']
    },
    Francia: {
      capital: 'París',
      poblacion: 67118648,
      idiomas: ['francés']
    },
    Japón: {
      capital: 'Tokio',
      poblacion: 126476461,
      idiomas: ['japonés']
    },
    Australia: {
      capital: 'Canberra',
      poblacion: 25766683,
      idiomas: ['inglés']
    },
    Sudáfrica: {
      capital: 'Pretoria',
      poblacion: 58558270,
      idiomas: ['afrikáans', 'inglés', 'zulú']
    },
    Canadá: {
      capital: 'Ottawa',
      poblacion: 37673538,
      idiomas: ['inglés', 'francés']
    },
    Brasil: {
      capital: 'Brasilia',
      poblacion: 212559417,
      idiomas: ['portugués']
    }
  };
  
for(const country in countries) { // country en esta parte ya se refiere a cada elemento del objeto principal, en este caso countries
    let pais = countries[country];
    let cap = pais.capital;
    let pob = pais.poblacion;
    let idi = pais.idiomas;
    console.log(`${country} tiene como capital a ${cap}. Cuenta con una población de ${pob} millones de habitantes y sus idiomas oficiales son ${idi   }`)
}
/*
Argentina tiene como capital a Buenos Aires. Cuenta con una población de 45195777 millones de habitantes y sus idiomas oficiales son español
Francia tiene como capital a París. Cuenta con una población de 67118648 millones de habitantes y sus idiomas oficiales son francés
....
*/
// ------------------------------------------------------------------------------------------------------
// EJERCICIOS NIVEL 3

// 1. Crea un objeto literal llamado personAccount. Tiene las propiedades firstName, lastName, incomes, expenses y tiene los metodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Incomes es un conjunto de ingresos y su descripción y expenses es un conjunto de ingresos y su descripción.
const personAccount = {
    firstName: "David",
    lastName: "Duarte",
    incomes: {
        job: 3000,
        sails: 1400,
        market: 500
    },
    expenses: {
        services: 1200,
        car: 800,
        food: 1000,
        others: 600
    },
    totalIncome: function() {
        const income = Object.values(this.incomes);
        let suma = 0;
        for(const index in income) {
            suma += income[index]
        }
        return suma // para que pueda hacer el balance total más abajo, tiene que retornar únicamente un número. Sino da NaN
    },
    totalExpense: function() {
        // acá usar ciclo for comun
        const expenses = Object.values(this.expenses);
        let suma = 0;
        for(let i = 0; i < expenses.length; i++) {
          suma += expenses[i]
        }
        return suma;
    },
    accountInfo: function() {
      let fullName = this.firstName + ' ' + this.lastName;
      return `Nombre completo: ${fullName}`
    },
    addIncome: function(ingreso, valor) {
      if(this.incomes.hasOwnProperty(ingreso)) { // Si la propiedad incomes ya contiene a la propiedad que se pasa por parámetro, entonces se le suma solamente el valor
        this.incomes[ingreso] += valor;
      } else {                                    // sino se agrega una nueva propiedad y su valor
        this.incomes[ingreso] = valor;
      }
    },
    addExpense: function(egreso, valor) {
      if(this.expenses.hasOwnProperty(egreso)) {
        this.expenses[egreso] += valor;
      } else {
        this.expenses[egreso] = valor;
      }
    },
    accountBalance: function() {
      let totalBalance = this.totalIncome() - this.totalExpense();
      return `El balance de la cuenta es: ${this.totalIncome()} - ${this.totalExpense()} = ${totalBalance}`
    }
}
// -------------------------------------------------------------------------------------------------------------------

// 2. **** Preguntas:2, 3 y 4 se basan en los siguientes dos arrays: users y products ()
const usuarios = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];


// Imagina que estás obteniendo la colección de usuarios anterior de una base de datos MongoDB. 
// a. Crear una función llamada signUp que permita al usuario añadirse a la colección. Si el usuario existe, informar al usuario que ya tiene una cuenta.
const signUp = (newUser) => {
  let usuarioExistente = false; // Variable para rastrear si se encontró una coincidencia

  for (const usuario of usuarios) {
    if(usuario.email === newUser.email) {
      usuarioExistente = true;
      break; // Salir del bucle tan pronto como se encuentre una coincidencia
    }
  }

  if(usuarioExistente) {
    console.log('Ya tenés una cuenta')
  } else {
   // usuarios.push({ _id: "", username: "", email: "", password: "", createdAt: "", isLoggedIn: false }); crea el objeto acá mismo
    usuarios.push(newUser); // para añadir después
    console.log('Usuario registrado con éxito')
  }
}

// Ejemplo de usuario para probar función signUp
const nuevoUsuario = {
  _id: "xy34za",
  username: "NuevoUsuario",
  email: "nuevo@gmail.com",
  password: "password123",
  createdAt: "08/01/2023 10:00 AM",
  isLoggedIn: false,
}
signUp(nuevoUsuario) 
console.log(usuarios)

// b. Crear una función llamada signIn que permita al usuario iniciar sesión en la aplicación
const signIn = (email, password) => {
  let usuarioEncontrado = null;

  for(const usuario of usuarios) {
    if(usuario.email === email && usuario.password === password) {
      usuarioEncontrado = usuario; 
      break;
    }
  }

  if(usuarioEncontrado) {
    usuarioEncontrado.isLoggedIn = true;
    console.log('Sesión iniciada correctamente');
    return usuarioEncontrado; // acá devuelve el objeto del usuario, es decir, con todos los items para usarlo en otro lugar
  } else {
    console.log('Email o contraseña incorrectos');
    return null;
  }
}
console.log(usuarios)
signIn('alex@alex.com', '123123');
console.log(usuarios)
console.log(signIn('thomas@thomas.com', '123333'))
// ------------------------------------------------------------------------------------------------------------------

// 3. El array de productos tiene tres elementos y cada uno de ellos tiene seis propiedades.
const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
// 3.a Crear una función llamada rateProduct que califique el producto 
// Define la función rateProduct
function rateProduct(productId, userId, newRating) {
  // Variable para rastrear si se encontró el producto
  let productoEncontrado = false;

  // Recorre el array de productos
  for (let i = 0; i < products.length; i++) {
    if (products[i]._id === productId) {
      // Producto encontrado, busca la calificación del usuario
      let usuarioCalificacionIndex = -1; // Índice de la calificación del usuario
      for (let j = 0; j < products[i].ratings.length; j++) {
        if (products[i].ratings[j].userId === userId) {
          usuarioCalificacionIndex = j; // Almacena el índice de la calificación
          break; // Detén el bucle si el usuario ha calificado previamente
        }
      }

      if (usuarioCalificacionIndex !== -1) {
        // El usuario ya ha calificado previamente, cambia su puntuación
        products[i].ratings[usuarioCalificacionIndex].rate = newRating;
        productoEncontrado = true;
        break; // Detén el bucle una vez que se ha encontrado el producto
      } else {
        // El usuario no ha calificado previamente, agrega una nueva calificación
        products[i].ratings.push({ userId, rate: newRating }); // aún si no coloca "userId: userId" funciona igual
        productoEncontrado = true;
        break; // Detén el bucle una vez que se ha encontrado el producto
      }
    }
  }

  // Verifica si se encontró el producto
  if (productoEncontrado) {
    return "Calificación realizada con éxito";
  } else {
    return "El producto no existe";
  }
}

console.log(products);
console.log(rateProduct('eedfcf', 'fg12y', 6)) // Acá se cambió la calificación del mismo usuario en el primer producto
// ------------------------------------------------------------------------------------------------------------------------------------------

// 3.b Crear una función llamada averageRating que calcule la valoración media de un producto
function averageRating(productId) {
  let productoEncontrado = false;
  let promedio = 0; // Inicializa la variable para el promedio

  for (let i = 0; i < products.length; i++) {
    // Busca el producto por su _id
    if (products[i]._id === productId) {
      productoEncontrado = true;

      // Verifica si el producto no tiene calificaciones
      if (products[i].ratings.length === 0) {
        return `El producto aún no tiene calificaciones`;
      }

      let suma = 0;

      // Recorre las calificaciones del producto y suma sus valores
      for (const index of products[i].ratings) {
        suma += index.rate;
      }

      // Calcula el promedio dividiendo la suma de las calificaciones por la cantidad de calificaciones
      promedio = suma / products[i].ratings.length;
    }
  }

  if (productoEncontrado) {
    return `La valoración media del producto es: ${promedio}`;
  } else {
    return `Producto no encontrado`;
  }
}


console.log(averageRating('aegfal'))

// CHATGPT
function averageRating(productId) {
  let totalRatings = 0;
  let ratingCount = 0;

  // Recorre el array de productos
  for (let i = 0; i < products.length; i++) {
    if (products[i]._id === productId) {
      const ratings = products[i].ratings;

      // Verifica si el producto tiene calificaciones
      if (ratings.length === 0) {
        return "El producto aún no tiene calificaciones.";
      }

      // Calcula la valoración media
      for (let j = 0; j < ratings.length; j++) {
        totalRatings += ratings[j].rate;
        ratingCount++;
      }

      return totalRatings / ratingCount;
    }
  }

  return "El producto no existe";
}
// --------------------------------------------------------------------------------------------------------------------

// 4. Crear una función llamada likeProduct. Esta función ayuda a dar un like al producto. Si no le gusta eliminar el like y si le gusta darle like
function likeProduct(productId, valoracion, userId) {
  let productoEncontrado = false;

  for(let i = 0;i < products.length; i++) {
    if(products[i]._id === productId) {
      productoEncontrado = true;

      // Verificar si el usuario ya ha dado like
      let userLike = false;
      for (let j = 0; j < products[i].likes.length; j++) {
        if(products[i].likes[j] === userId) {
          userLike = true;

          //Quitar like si ya existe
          products[i].likes.splice(j, 1);
          console.log(`Dislike al producto ${products[i].name}`);
          break;
        }
      }

      if(valoracion === "like") {
        products[i].likes.push(userId)
      } else if(valoracion === "dislike") {
        for(const index of products[i].likes) {
          if(index === userId) {
            products[i].likes.splice(index, 1)
          }
        }
      } else {
        return `valoración no válida`
      }
    }
  }

  if(productoEncontrado) {
    return `Valoración realizada con éxito`
  } else {
    return `Producto no encontrado`
  }
}

console.log(products[0].likes); // []
likeProduct("eedfcf", "like", "fg12cy");
console.log(products[0].likes); // ['fg12cy'] dió like
likeProduct("eedfcf", "like", "david");
console.log(products[0].likes); // ['fg12cy', 'david'] david dió like
likeProduct("eedfcf", "dislike", "david"); 
console.log(products[0].likes); // ['fg12cy'] david quitó el like

// 5. 

