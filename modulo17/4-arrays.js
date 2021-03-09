/**
 * Arrays
 *
 */
// Existe una estructura llamada Array (llamada en español arreglo o matriz/vector) para almacenar colecciones ordenadas.

// let arr = new Array();
// let arr = [];

// inciar un arreglo con data

// const fruits = ["Apple", "Orange", "Pear"]

// console.log(fruits)

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])

// fruits[0] = "Pear"

// console.log(fruits)

// mezcla de valores
// let arr = [ 
//   'Apple', 
//   { name: 'John' },
//   true,
//   function() { console.log('hello') }
// ];

// console.log(arr[3]())

// Metodo pop y push trabajan con el final del array
// pop toma un elemento desde el final. muta el array original
// push inserta un elemento al final. muta el array original

// let fruits = ["Apple", "Orange", "Pear"];

// console.log(fruits.pop())

// console.log(fruits)

// fruits.push('Banana')

// console.log(fruits)


// Metodo shift y unshift trabajan con el principio del array
// shift extrae el primer elemento del array y lo devuelve
// unshift agrega el elemento al principio del array

// fruits.shift() 
// console.log( fruits );

// fruits.unshift('Banana')
// console.log(fruits)

// fruits.unshift(['uno', 'dos'])


 /*************************************
*
*             Ejercicios
*
**************************************/

// console.log(`
//   1. Tenemos 5 operaciones de array.
//         Crear un array con los items “Jazz” y “Blues”. // Jazz, Blues
//         Agregar “Rock-n-Roll” al final. // Jazz, Blues, Rock-n-Roll
//         Reemplazar el valor en el medio por “Classics”. // Jazz, Classics, Rock-n-Roll
//         Colocar primero Rap y Reggae al array. // Rap, Reggae, Classics, Rock-n-Roll
//   2. Sumar los valores del siguiente Array 
//         [12, 45, 32, 56, 190]
// `)

let music = ['jazz', 'blue'];
console.log(music);

music.push('Rock-n-Roll');
console.log(music);



let frutas =['Arándano', 'Frambuesa', 'Fresa', 'Grosella espinosa', 'Grosella negra', 'Grosella roja', 'Zarzamora', 'Limón', 'Mandarina', 'Naranja', 'Pomelo'];
console.log(frutas); // impri el array frutas
console.log(frutas.length); // imprimi la cantidad de elementos


frutas.push('Sandía'); // agregue sandia al final
console.log(frutas); // imprimi el array
console.log(frutas.length); // imprimi la cantidad de elementos

frutas.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
})

console.log(frutas.indexOf('Grosella roja')); // muestra el index de 'Grosella roja'
console.log(frutas[4]); // muestra el elemento del index 4



let number = [12, 45, 32, 56, 190];
let suma = 0;
for(let i = 0; i < number.length; i++) {
    suma += number[i]
};
 console.log(suma);
 


 let diasTrabajadosPorMes = [23, 18, 21, 15, 22, 19, 17, 22, 15]; // declare variable dias trabajados
 let totalDias = 0; // declare la suma
 for( let SumaDias = 0; SumaDias < diasTrabajadosPorMes.length; SumaDias++  ) {
     totalDias += diasTrabajadosPorMes[SumaDias]
 }; // bloque for que recorre cada dia y lo va sumando
 console.log (' llevas trabajados', totalDias, 'dias');


