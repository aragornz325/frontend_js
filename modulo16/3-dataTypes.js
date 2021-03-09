/**
 * Data Types
 * - Number
 */

// El tipo number representa tanto números enteros como de punto flotante.
// let age = 18;
// let float = 12.345;
// console.log(age - 1)
// console.log(float)
// console.log(float + 1.21)

// console.log(age)
// console.log(typeof(age))
// 
/**
 * Data Types
 * - BigInt
 */

// En JavaScript, el tipo “number” no puede representar valores enteros mayores que (2 elevado a la 53 -1) (o 2 potencia 53) (eso es 9007199254740991), o menor que -(2 elevado a 53 -1) para negativos. Es una limitación técnica causada por su representación interna.

// Para la mayoría de los propósitos es suficiente, pero a veces necesitamos números realmente grandes. Por ejemplo, para criptografía o marcas de tiempo de precisión de microsegundos.

// const testingMaxNumber = 1231234335345435345345345435345;
// console.log(testingMaxNumber)

// const testingBigIntMaxNumber = 1231234335345435345345345435345n;
// console.log(testingBigIntMaxNumber)
// console.log(typeof(testingMaxNumber))
// console.log(typeof(testingBigIntMaxNumber))

/**
 * Data Types
 * - String
 */

// let str = "Hola";
// let str2 = 'Las comillas simples también están bien';
// let phrase = `se puede incrustar otro ${str}`;

// console.log(str)
// console.log(str2)
// console.log(phrase)

//  let name = "John";

// interpolar una variable en un string
//  console.log( `Hola, ${name}!` );

// interpolar una expresión en un string
// console.log( `el resultado es ${1 + 2}` ); 
// console.log(typeof(str))

/**
* Data Types
* - Boolean
*/

// let nameFieldChecked = true; // sí, el campo name está marcado
// let ageFieldChecked = false; // no, el campo age no está marcado
// console.log(typeof(ageFieldChecked))
// console.log(nameFieldChecked)
// console.log(ageFieldChecked)

// let isGreater = 4 > 7;

// console.log( isGreater ); // verdadero (el resultado de la comparación es "sí")
// console.log(typeof(isGreater))

/**
 * Data Types
 * - Null (sin valor)
 */

// let age = 40
// let age = null
// console.log(age)
// console.log(typeof(age))


/**
 * Data Types
 * - Undefined (valor no asignado)
 */

// let nothing;

// console.log(nothing); // muestra "undefined"
// console.log(typeof(nothing))

/**
 * Data Types
 * - Object and Symbols
 */

// const user = {
//     name: "Franco",
//     lastName: "meriles"
// }

// console.log(user)
// console.log(user.name)
// console.log(user.lastName)
// console.log(typeof(user))


 /*************************************
*
*             Ejercicios
*
**************************************/

console.log(`
  Strings:
  1. Crear 3 variables cada una debe tener un dato especifico (name, age, nationality)
  2. Escribir 1 console.log armando la siguiente frase "Hola me llamo ..., el doble de mi edad es ... y soy ..."
  Boolean:
  1. Crear 1 variable con el siguiente resultado, tu edad es mayor a 90 ?
  Null and Undefined
  1. Crear 2 variables cada una deberia tener un dato especifico (name, age)
  2. Escribir un console.log con el siguiente resultado "Hola me llamo null y tengo undefined años"
`)

let name='rodrigo'
let age=40
let nationality='argentino'
let isGreaterThan= age > 90


console.log(  `hola me llamo ${name}, el doble de mi edad es ${2*age} y soy ${nationality} ` );
console.log(isGreaterThan)

let nameNull = null
let ageUndefine

console.log(`hola me llamo ${nameNull} y tengo ${ageUndefine} años`);

