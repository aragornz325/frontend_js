/**
 * Classes
 *
 */

// class MyClass { // Siempre tiene que empezar con mayuscula
//   // métodos de clase // el constructor es el primer metodo que se ejecuta cuando inicializamos la clase
//   constructor() { ... }
//   method1() { ... }
//   method2() { ... }
//   method3() { ... }
// }

class User {
    constructor(name, lastname) {
      this.name = name;
      this.lastName = lastname
    }
  
    sayHi() {
      console.log(this.name);
    }
  }
  
  // Uso:
  let user = new User("Fran", "Meriles");
  // console.log(user)
  user.sayHi()
  // Podemos pensar en la keyword “this” como un atajo que refiere al objeto desde donde se invocó la función. Es por eso que con this podemos acceder a todos los valores y propiedades del objeto origen. Cualquier cambio realizado a this también actualizará el objeto referido.
  
  // Uso:
  let user2 = new User("Marcos");
  // console.log(user)
  user2.sayHi()
  