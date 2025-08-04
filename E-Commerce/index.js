const root = document.getElementById('root')

async function getProducts() {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    const products = data?.products
    console.log(products)
    products.forEach((product, index) => {
        root.innerHTML = root.innerHTML + `
        <div>
        <img src='${product?.thumbnail}' alt='' height="100px"/>
        <div>
        <h4><a href="product.html?id=${product?.id}">${product.title}</a></h4>
        <p>${product.price}</p>
        </div>
        </div>
        `
    })
    return data
}

getProducts()

async function getSingleProduct() {

}





