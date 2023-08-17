// For Loop
for (let i = 0; i < 5; i++) {
    console.log("For loop iteration:", i);
  }
  
  // While Loop
  let j = 0;
  while (j < 5) {
    console.log("While loop iteration:", j);
    j++;
  }
  
  // Do-While Loop
  let k = 0;
  do {
    console.log("Do-While loop iteration:", k);
    k++;
  } while (k < 5);
  
  // For...in Loop (Used for iterating over object properties)
  const person = { name: "Alice", age: 30, job: "Developer" };
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  
  // For...of Loop (Used for iterating over arrays and iterable objects)
  const colors = ["red", "green", "blue"];
  for (const color of colors) {
    console.log("For...of loop:", color);
  }
  