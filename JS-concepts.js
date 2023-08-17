// Const arr  = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9  13]; 
// How to remove duplicate elements from this array?
// How to find out the largest/lowest elements from this array?
// How to slice(22, 48) from this array
// How to get date,month,year from new date()
// Is it truthy or falsy value, let number = "false";


const arr = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9, 13];

const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

const largest = Math.max(...arr);
const lowest = Math.min(...arr);
console.log("Largest:", largest);
console.log("Lowest:", lowest);

const slicedArray = arr.slice(5, 7); 
console.log(slicedArray);

const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; 
const year = currentDate.getFullYear();
console.log(currentDate);
console.log("Date:", day);
console.log("Month:", month);
console.log("Year:", year);

let number = "false";
if (number) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

