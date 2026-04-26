let availableUser = JSON.parse(localStorage.getItem("userInfoList"))
let availableEmail = JSON.parse(localStorage.getItem("emailList")) ?? []
let form = document.querySelector(".login-form")
let emailInput = document.querySelector("#email")
let passwordInput = document.querySelector("#password")
let errorText = document.querySelector(".error")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(1)
    if (!availableEmail.includes(emailInput.value)) {
        errorText.innerHTML = "No user with that email exists"
        return
    }
    if (passwordInput.value != availableUser[emailInput.value].password) {
        console.log(passwordInput.value, availableUser[emailInput.value].password)
        errorText.innerHTML = "Incorrect password"
        return;
    }
    localStorage.setItem("currentUser", JSON.stringify({
        username: availableUser[emailInput.value].username,
        email: emailInput.value,
        password: availableUser[emailInput.value].password
    }))
    errorText.textContent = "Login Successfully"
    errorText.style.color = "green"
    setTimeout(() => {location.replace("/userPage/")}, 500)
})