const userProfile = {

name: "Alice",

age: 28,

details: function() {

return `${this.name} is ${this.age} years old.; `
},
updateDetails:function(age){
if(age<=0){
    // console.log('Invalid age update age.');
    return this.details()
}
return `${this.name} is ${age} years old.;`
}
}
console.log(userProfile.updateDetails(10));
