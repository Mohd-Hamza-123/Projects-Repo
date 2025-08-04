const root = document.getElementById("root")
const review = document.getElementById("review")

const params = new URLSearchParams(window.location.search)
const id = params.get("id")

getSingleProduct(id)


async function getSingleProduct(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await response.json();
    console.log(data)

    root.innerHTML = `
     <div id="product_details">
        <img src="${data.thumbnail}" alt="${data.title}">
        <div>
        ${getAllImages(data.images)}
        </div>
        <div>
            <h2>${data.title}</h2>
            <p>${data.price}</p>
            <p>${data?.description}</p>
            <button>Add to Cart</button>
        </div>
    </div>
    `
    getRating(data.reviews)
}
function getRating(reviews) {
    console.log(reviews)
    let clutter = '';
    reviews?.forEach((review, index) => {
        clutter += `
        <div>
        <span>${review?.reviewerName}</span>
        <span>${formateDate(review?.date)}</span>
        <br>
        <span>Rating : ${review.rating}</span>
        <p>${review?.comment}</p>
        </div>`
    })

    review.innerHTML = `<h2>Customer Review </h2>` + clutter
}
function formateDate(date) {
    console.log(date)
    const d = new Date(date)
    return d.toDateString() 
}
function getAllImages(images){
    console.log(images)
    let clutter = ''
    images.forEach((image,index)=>{
        clutter += `<img src="${image}" alt="image" height="70px">`
    })
    return clutter
}

