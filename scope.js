// Global scope
const globalVariable = "I'm a global variable";

function printGlobal() {
  console.log(globalVariable); // Accessible inside the function
}

printGlobal(); // Output: "I'm a global variable"
console.log(globalVariable); // Accessible outside the function, Output: "I'm a global variable"



// Local scope
function localScopeExample() {
    const localVariable = "I'm a local variable";
    console.log(localVariable); // Accessible inside the function, Output: "I'm a local variable"
  }
  
  localScopeExample();
  // console.log(localVariable); // Error! localVariable is not accessible here

  
//   Block scope
if (true) {
    const blockScopedVar = "I'm a block-scoped variable";
    console.log(blockScopedVar); // Accessible inside the block, Output: "I'm a block-scoped variable"
  }
  
  // console.log(blockScopedVar); // Error! blockScopedVar is not accessible here
  