let greeting = "Hi";

function outer() {
  let greeting = "Hello";
  function inner() {
    console.log(greeting);
  }
  inner();
}

outer();
