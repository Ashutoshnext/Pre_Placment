
const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };
const profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" }  };
const result={...profile,...updates}
console.log(result);


