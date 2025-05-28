function personInfo() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const person = {
  name: "Ashutosh",
  age: 30
};

personInfo.call(person);
