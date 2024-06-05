// Loops

// console. log ('Hello World!')
// console. log('Hello World!")
// console. log ('Hello World!')
// console. log('Hello World!')
// console. log ('Hello World!")


// for(statement1; statement2; statement) {
// }

// for loop (for i loop)
for(let i=0; i<5; i++){
    console.log('Hello World!' + i)
}

var cars = ["Volvo", "Toyota", "Tesla"]

// for of loop 
for(let car of cars){
    if(car == "Toyota"){
        break;
    }
    console.log(car)
}

//ES6 syntax for each loop
cars.forEach(car => {
    console.log(car)
})