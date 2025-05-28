let Input = ["electronics","electronics", "electronics",  "clothing", "electronics", "toys", "clothing", "toys", "toys"]
let InputObj = Input.reduce((acc, inputname) => {
    acc[inputname] = (acc[inputname] || 0) + 1
    return acc;
},{})

let sortedobj=Object.entries(InputObj)
.sort((a,b)=>a[1]-b[1])
 .map(entry => entry[0]);  

console.log(sortedobj);
