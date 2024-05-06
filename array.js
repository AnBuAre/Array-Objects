// //Ejercicio 1 : Crea una variable que tenga como valor un array vacío.

// let Andrea = [];

// //Ejercicio 2 : Crea una variable que tenga como valor un array con al menos 3 tipos de datos distintos.

// const free = ['milch', 'bread', 'honey', 'cheese' ]

// //Ejercicio 3: 
// // 3.1.- Crea un array vacío y añádele dos valores usando push(), dos valores usando unshift()
// // y luego usa pop() y shift() una vez.A continuación, muestra por consola la longitud del array.

// const funnyPlay = [];
// const p = funnyPlay.push("jump" ,"Run ");
// const u = funnyPlay.unshift("Finger", "catch");
// const po = funnyPlay.pop();
// const sh = funnyPlay.shift();

// console.log(p.length + u.length + po.length + sh.length)// resultado NaN??


// //Ejercicio 4 :
// //Crea el siguiente array: const names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"]. A continuación, 
// // muestra por consola los nombres ["María, Isidro"] usando slice(). Luego, sustituye "Elizondo" por "Parma" 
// //usando splice() y muestra el resultados por consola.

// const names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"]
// console.log(names.slice(1 , 3));
// names.splice(4,5,'Parma'); // no he podido sustituir. Siempre se cambia por otro que no quiero seleccionar.
// console.log(names)

// // Ejercicio 5 
// //Convierte el array anterior (names) en un string de nombres separados por espacios.

// const names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"]
// const cadena = names.join(); // Join devuelve en String
// console.log(cadena) // los devuelve separado por comas, pero no en string

// Ejercicio 6
// Crea la variable const sentence = "El perro de San Roque no tiene rabo". A continuación, conviértela 
// en un array de palabras, y, luego, en otro de letras.

// const sentence = 'El perro de San Roque no tiene rabo';
// const sent = sentence.split (',');
// const letter = sentence.split('');
// console.log (sent,letter )


//Ejercicio 7
//Diseña un programa (función) que vaya leyendo números y guardándolos en un array. Una vez lleno mostrará
// el array y deberá decir cuantos números son pares y cuantos son impares. La entrada de datos termina cuando 
//el usuario teclea 0 o un valor no numérico. ( permite detectar valores no numéricos).

// let lista=[], ind=0, pares=0, impares=0, numero;
// do{
//     numero= parseInt(prompt("Número "));
//    if(numero !=0 && !isNaN(numero)){
//         lista[ind] = numero
//         ind++;
//    }
// }while (numero !=0 && !isNaN(numero));
// alert("Lista de números "+lista);
// for(ind=0; ind < lista.length; ind++){
//     if (lista[ind]%2==0) 
//         pares++
//     else 
//         impares++
// }
// console.log("pares " + pares);
// console.log("Impares " + impares);

// No he sabido desarrollarlo, pero casualmente lo encontre en internet y me parecio interesante de analizar.


//Ejercicio 8
//Un servicio de atención al cliente tiene establecido turnos semanales para sus empleados de manera que cada
// día de la semana se encarga del servicio una persona: Lunes - María; Martes - Luis; Miércoles - Antonia;
// Jueves - Pedro; Viernes - Marisa; Sábado y Domingo - Sin Servicio. Usa un array para almacenar los datos del servicio. 
//En este array cada elemento será un par [día - nombre]. Crea una función que responda con el nombre de la persona encargada 
//del servicio sabiendo el día. Si le pido servicio('Lunes') me debería decir "Este día se encarga María" y si le pido servicio(Miércoles") me daría Antonia.


// service = [
    
//     Lunes: Maria ;




// ]