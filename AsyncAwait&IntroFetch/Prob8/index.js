let Container=document.querySelector('.container')
let totalprice=document.querySelector('.totalprice')

async function fetchProducts(){
try {
    let Response=await fetch('https://fakestoreapi.com/products')
    let Data=await Response.json()  
   let Totalprice = Data.reduce((acc, val) => {
    acc += val.price;
    return acc;
}, 0);

totalprice.textContent =`Total Price of Product : $${Totalprice}`


    Data.forEach(product => {
        let card=document.createElement('div')
        card.className="card"
        card.innerHTML=`
        <img src="${product.image}" alt="${product.title}"/>
        <h3>${product.title}</h3>
        <p>Price:${product.price}</p>
        <button class="btn">View Details</button>
        
        `
         Container.append(card)
    });
  
    
   
} catch (error) {
     console.error('Fetch error:', error);
}


}
fetchProducts()
