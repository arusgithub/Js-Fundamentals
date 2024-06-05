// Logical "AND"
// console.log(true && false) //all values have to be TRUE for expression to be TRUE

// Logical "OR"
// console.log(false || false) //any value should be TRUE for the expression to be TRUE
var ageIsMoreThanEighteen = false
var isUSCitizen = false

var eligibilityForDriversLicense = ageIsMoreThanEighteen || isUSCitizen
console.log('This cusomer is eligible for DL: ' + eligibilityForDriversLicense)

// Logical "NOT"
// console.log(!true)
console.log(6 !== 10)