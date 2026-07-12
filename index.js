
const products = document.querySelector(".products")
const API = `https://69c66873f272266f3eac7bef.mockapi.io/product`
const inputs = document.querySelectorAll("input")
const name = document.getElementById("name")
const img = document.getElementById("img")
const addBtn = document.querySelector(".add")


async function getProduct(){
    const respons = await fetch(API)
    const data = await respons.json()
    render(data)
    console.log(data);
    
}

function render(product){
       products.innerHTML = ""
       product.forEach((pro) => {
        products.innerHTML += `
        <div class ="product">
          <img src="${pro.img}" alt="">
          <h1>${pro.name}</h1>
          <button onclick ="deleteProduct(${pro.id})">delete</button>
         </div>
        `
       });
}

addBtn.addEventListener("click", async()=>{
    const products1 = {
        name: name.value,
        img: img.value
    }

    await fetch(API,{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(products1)

    })

    getProduct()

    inputs.forEach((input)=>{
           input.value = ""
    })
})

async  function deleteProduct(id){
     await fetch(`${API}/${id}`,{
        method: "DELETE"
     })
     getProduct()
}
getProduct()