// Ejercicio 1 :
// Crea un objeto llamado citizen1 y dale las propiedades name, lastname y age. Elige tú los valores.

const citizen1 = {  
    name: "Cristiano" , 
    lastname: "Ronaldo", 
    age: "36",  

}

// Ejercicio 2 :
// Una vez creado, añádele la propiedad city, con el valor que tú quieras, y cambia el valor de la propiedad age.
// Comprueba que los cambios han surtido efecto.

citizen1.city = 'Portugal',
citizen1.age = '40',

console.log(citizen1.city)
console.log (citizen1.age)


// Ejercicio 3:
// Crea una función checkCitizenship que acepte como parámetro un objeto, compruebe la edad del ciudadano y, si ésta 
// es mayor de 18, añada la propiedad canVote: true; de lo contrario, debe añadir canVote: false. Usala con el objeto citizen1.

function checkCitizenship() {
    const checkCitizenship = {
        citizen : Charls,
        age : 19 
    }

    if (citizen >=18) {
        console.log (" Can Vote")
        
    }
    else {

    console.log ("can't Vote")
    }
    
    
}


//Ejercicio 4
//4.- Crea una función llamada createCitizen que acepte 3 strings: nombre, apellido y edad. Si los parámetros son válidos, 
//debe retornar un nuevo objeto y almacenarlos en un array.


const ciudadanos = []
function createCitizen(userNamePrompt, lastNamePrompt, userAgePrompt) {
    ciudadanos.push({
        username : userNamePrompt,
        userLastname : lastNamePrompt,
        userAge: userAgePrompt
    })
    
    return;

}
 
