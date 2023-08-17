

// Variables
let name = "Shakil";
const age = 22;
var job = "Web Developer"; // Avoid using "var" for better scoping

// Spread Operator
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6, 7, 8];

// Classes
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person("John", "Doe");

// Arrow Function
const add = (a, b) => a + b;
const square = num => num * num;

// Destructuring
const user = {
    username: "shakil",
    email: "shakil@example.com",
    age: 22,
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};

const { username, email, address: { city } } = user;

// Output
console.log("Name:", name);
console.log("Age:", age);
console.log("Job:", job);
console.log("New Numbers:", newNumbers);
console.log("Full Name:", person1.getFullName());
console.log("Add:", add(5, 7));
console.log("Square:", square(4));
console.log("Username:", username);
console.log("Email:", email);
console.log("City:", city);
