// Access and Basic Manipulation
const colors = ['red', 'green', 'blue'];
console.log(colors[0]); // Output: 'red'

// Adding and Removing Elements
const animals = ['pigs', 'goats', 'sheep'];
animals.push('cows'); // ['pigs', 'goats', 'sheep', 'cows']
const removedColor = animals.pop(); // 'cows', animals: ['pigs', 'goats', 'sheep']
const animals1 = ['lion', 'tiger', 'bear'];
animals1.unshift('elephant', 'giraffe'); // ['elephant', 'giraffe', 'lion', 'tiger', 'bear']
const removedAnimal = animals1.shift(); // 'elephant', animals1: ['giraffe', 'lion', 'tiger', 'bear']

// Merging and Slicing Arrays
const myArray = ['a', 'b', 'c'];
const yourArray = ['d', 'e', 'f'];
const ourArray = myArray.concat(yourArray); // ['a', 'b', 'c', 'd', 'e', 'f']
const animals2 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const slicedArray = animals2.slice(2); // ['camel', 'duck', 'elephant']

// Adding and Removing Elements (Splice)
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // ['Jan', 'Feb', 'March', 'April', 'June']
months.splice(4, 1, 'May'); // ['Jan', 'Feb', 'March', 'April', 'May']

// Finding Elements
const animals3 = ['ant', 'bison', 'camel', 'duck', 'bison'];
const bisonIndex = animals3.indexOf('bison'); // 1
const giraffeIndex = animals3.indexOf('giraffe'); // -1
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10); // 12
const array2 = [5, 12, 8, 130, 44];
const index = array2.findIndex(element => element > 13); // 3

// Iterating through Arrays
const array3 = ['a', 'b', 'c'];
array3.forEach(element => console.log(element)); // Output: 'a' 'b' 'c'
const array4 = [1, 4, 9, 16];
const map1 = array4.map(x => x * 2); // [2, 8, 18, 32]
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6); // ['exuberant', 'destruction', 'present']
const array5 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const reducedValue = array5.reduce(reducer); // 10

// Checking Array Elements
const array7 = [1, 30, 39, 29, 10, 13];
const isBelowThreshold = (currentValue) => currentValue < 40;
const everyResult = array7.every(isBelowThreshold); // true
const array8 = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
const someResult = array8.some(even); // true
const array9 = [1, 2, 3];
const includesResult = array9.includes(2); // true

// Array Creation and Validation
const myArr = Array.from('foo'); // ['f', 'o', 'o']
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({ foo: 123 })); // false
console.log(Array.isArray('foobar')); // false

// Array Initialization
console.log(Array.of(7)); // [7]
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array(7)); // [ , , , , , , ]
console.log(Array(1, 2, 3)); // [1, 2, 3]
