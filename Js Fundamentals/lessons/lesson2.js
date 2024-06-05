// Concatination and Interpolation 

var price = 80
var itemName = "Table"

//concatination
var messageToPrint = "The price for your "+itemName+" is "+price+" dollars"

//Interpolation
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars`

console.log(messageToPrint)
console.log(messageToPrint2)