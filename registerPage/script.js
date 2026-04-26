let form = document.querySelector(".login-form")
let usernameInput = document.querySelector("#username")
let emailInput = document.querySelector("#email")
let passwordInput = document.querySelector("#password")
let errorText = document.querySelector(".error")
let availableEmail = JSON.parse(localStorage.getItem("emailList")) ?? []
let availableUser = JSON.parse(localStorage.getItem("userInfoList")) ?? {}
form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(1)
    if (availableEmail.includes(emailInput.value)) {
        errorText.innerHTML = "A user with that email already existed"
        return
    }
    if (!/^\S+@\S+\.\S+$/g.test(emailInput.value) || !/\w+/g.test(usernameInput.value)) {
        errorText.innerHTML = "Invalid email or username"
        return;
    }
    if (passwordInput.value.length < 6) {
        errorText.innerHTML = "Password must be longer than 6 characters"
        return;
    }
    availableEmail.push(emailInput.value)
    localStorage.setItem("emailList", JSON.stringify(availableEmail))
    availableUser[emailInput.value] = {
        username: usernameInput.value,
        password: passwordInput.value 
    }
    localStorage.setItem("userInfoList", JSON.stringify(availableUser))
    errorText.textContent = "Register Successfully"
    errorText.style.color = "green"
    setTimeout(() => {location.assign("/loginPage/")}, 500)
})