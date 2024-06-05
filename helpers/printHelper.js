export function printAge(age){
    console.log(age)
}

// Version 1
// export class CustomerDetails {
// 
//     printFirstName(firstName){
//         console.log(firstName)
//     }
// 
//     printLastName(lastName){
//         console.log(lastName)
//     }

// }
// Version 2
class CustomerDetails {

    printFirstName(firstName){
        console.log(firstName)
    }

    /**
     * 👉 This method will print the last name
     * @param {string} lastName 
     */
    printLastName(lastName){
        console.log(lastName)
    }

}

export const customerDetails = new CustomerDetails()


// ------------------------------------------------