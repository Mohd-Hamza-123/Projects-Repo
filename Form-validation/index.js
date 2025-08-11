const form = document.getElementById('form');

form.addEventListener("submit", validateForm)

function validateForm(e) {
    e.preventDefault()
    const formData = new FormData(form)
    const username = formData.get("username")
    const password = formData.get("password")
    const email = formData.get("email")
    const dob = formData.get("dob")
    const age = formData.get("age")
    const gender = formData.get("gender")
    const hobbies = formData.getAll("hobbies")
    const profile = formData.getAll("profile")
    const country = formData.get("country")
    const bio = formData.get("bio")
    console.log("username", username)
    console.log("password", password)
    console.log("email", email)
    console.log("dob", dob)
    console.log("age", age)
    console.log("gender", gender)
    console.log("hobbies", hobbies)
    console.log("profile", profile)
    console.log("country", country)
    console.log("bio", bio)

    // console.log(formData)
}