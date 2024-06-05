// The main difference between the js and ts languages ​​is that ts has strict data types. And custom types.

// Strict data types
var customerFirstName = 'Steve'
var customerFirstName: string = 'Steve'
var customerLastName: string = 'Jobs'
var customerAge: number = 25

// Custom type
type Customer = {firstName: string, lastName: string, active: boolean}

var firstCustomer: Customer = {
    firstName: 'Steve',
    lastName: 'Jobs',
    active: true
}