



  

alluser=[]
let users=localStorage.getItem("users");
if(users !== null){
     alluser=JSON.parse(users)
}
let allCarts=[];
let carts=localStorage.getItem("carts");
if(carts !== null){
allCarts=JSON.parse(carts)
}
let cartproduct= document.getElementById('carts-products');

for(var i = 0; i < allCarts.length; i++){
    cartproduct.innerHTML += `
    <div class="cardss">
    <img src="${allCarts[i].image}" id="imgcard" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${allCarts[i].name}</h5>
        <p class="card-text">${allCarts[i].price} Bitcoin</p>
    </div>
</div>
    `
}
