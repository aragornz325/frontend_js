/**
 * Array methods
 *
 */

// .splice()
// splice este método puede hacer todo insertar, remover, reemplazar elementos y devuelve un array
// con los elementos alterados (cambia el array original)

// let arr = ["Yo", "estudio", "JavaScript"];

// arr.splice(0, 1); // desde el índice 1 remover 1 elemento

// console.log(arr)

// console.log(arr.length)

// remueve los primeros 3 elementos y los reemplaza con otros
// devuelve un array con los elementos borrados
// let newArr = arr.splice(0, 3, "con", "muchas", "ganas");

// console.log(arr)
// console.log(newArr)

// .slice()
// slice este método devuelve un nuevo array copiando en el mismo todos los elementos\
// desde principio hasta final (sin incluir final).

// let arr = ["t", "e", "s", "t"];
// console.log( arr.slice(1, 3) ); // e,s (copia desde 1 hasta 3)

// .concat()
// concat este método crea un nuevo array que incluye valores de otros arrays y elementos adicionales.

// let arr = [1, 2];

// // crea un array a partir de: arr y [3,4]
// // console.log( arr.concat([3, 4]) ); // 1,2,3,4
// const newArray = arr.concat([3, 4])
// console.log(arr)

// console.log(newArray)

// .forEach()
// Este método permite ejecutar una función a cada elemento del array.

// let arr = ["Yo", "estudio", "JavaScript"];

// arr.forEach(function(item, index, array) {
//   // ... hacer algo con el elemento
//   console.log(item)
//   console.log(index)
//   console.log(array)
//   console.log("---------")
// });

// Buscar dentro de un array

// .indexOf(item, from) – busca un ítem comenzando desde el index from, y devuelve el index donde fue encontrado.
// .lastIndexOf(item, from) – igual que el anterior, pero busca de derecha a izquierda.
// .includes(item, from) – busca item comenzando desde el índice from, devuelve true en caso de ser encontrado.

// let arr = [1, 5, false];
// console.log( arr.indexOf(5) );
// console.log( arr.indexOf(false) );
// console.log( arr.indexOf(null) );
// console.log( arr.includes(7) );


// .find() y .findIndex()
// El método find y findIndex busca un único elemento (el primero) que haga a la función devolver true.

// let result = arr.find(function(item, index, array) {
//   // Si devuelve true, la búsqueda se detiene y el item es devuelto
//   // Si no encuentra nada, entonces devuelve undefined.
// });

// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "David"},
//   {id: 1, name: "Franco"},
// ];

// let user = users.find(function(item) {
//   return item.id === 1
// })

// console.log(user)

// let userIndex = users.findIndex(function(item) {
//   return item.id === 1
// })

// console.log(userIndex)

// .filter()
// La sintaxis es similar a find, pero filter devuelve un array con todos los elementos encontrados

// let results = arr.filter(function(item, index, array) {
//   // si devuelve true, el elemento es ingresado al array y la iteración continua
//   // si nada es encontrado, devuelve un array vacío
// });

// let users = [
//   {id: 1, name: "John", age: null},
//   {id: 2, name: "David", age: 21},
//   {id: 3, name: "Franco", age: 31}
// ];

// let someUsers = users.filter(item => {
//   const string = item.name.split('');
//   return string[0] === "J" 
// });
// console.log(someUsers);


// .map()
// El método map es uno de los métodos más comunes y ampliamente usados. (transforma el array y devuelve la misma cantidad)
// Ejecuta una función por cada elemento del array y devuelve un array con los resultados.

// let result = arr.map(function(item, index, array) {
//   // devuelve el nuevo valor en lugar de item
// });

// let result = arr.map(function(item, index, array) {
//   // devuelve el nuevo valor en lugar de item
// });

// let results = ["Bilbo", "Gandalf", "Nazgul"].map(item => `The ${item}`);
// console.log(results);

// .sort()
// Este método ordena el propio array cambiando el orden de los elementos.

// let arr = ["Uruguay", "Colombia", "Argentina", "Peru"]

// console.log(arr.sort())

// let arr = [ 1, 2, 15 ];

// console.log( arr.sort() );

// .reverse()
// Este método revierte el orden de los elementos en arr.

// let arr = [1, 2, 3, 4, 5];

// console.log( arr.reverse() )



// .split() y .join() - Metodos para Strings
// El método split separa un string según un carácter específico
// El método join hace lo opuesto a split. Crea un Array uniéndose con un carácter específico. 

// let nombres = 'Bilbo Gandalf Nazgul';

// let arr = nombres.split('');

// console.log(arr)

// let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

// let str = arr.join(' and ');

// console.log( str ); 

/*************************************
*
*             Ejercicios
*
**************************************/

// console.log(`
//   1. A partir del Arreglo con users realizar las siguientes acciones
//         - Remover los elementos en el indice 4, 3 y 1
//         - Añadir 3 usuarios mas con las mismas propiedades (id, name, age)
//         - Recorrer el nuevo array con usuarios y mostrar usando console.log el mensaje "Hola me llamo name y tengo age años"
//         - Buscar un usuario que tenga 31 años y mostrar ese usuario por consola
//         - Buscar todos los usuarios que se llamen Fran
//         - Transformar la edad de todos los usuarios a 17 años
// `)

// // 1.
let users = [
  {id: 1, name: "Fran", age: 31},
  {id: 2, name: "Katy", age: 18},
  {id: 3, name: "Federico", age: 38},
  {id: 4, name: "Maria", age: 24},
  {id: 5, name: "John", age: 45},
  {id: 6, name: "Fran", age: 7},
];

users.splice(3,2);
users.splice(1,1);
console.log(users);

users.push( 
    {id: 7, name: "Yuri", age: 78},
    {id: 8, name: "Vladimir", age: 65},
    {id: 9, name: "Lenin", age: 31},
);

console.log(users);


users.forEach(element => {
    
});

