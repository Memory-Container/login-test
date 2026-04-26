window.addEventListener('pageshow', () => {
    let currentUser = JSON.parse(localStorage.getItem("currentUser") === null ? location.assign("/loginPage/") : localStorage.getItem("currentUser"))
})
let currentUser = JSON.parse(localStorage.getItem("currentUser") === null ? location.assign("/loginPage/") : localStorage.getItem("currentUser"))
document.body.innerHTML = `
    <div>
        <div class="welcome-message">
            Welcome back!
        </div>
        <div class="user-card">
            <div class="user-info">
                <h2 class="username">JohnDoe24</h2>
                <p class="email">johndoe@example.com</p>
            </div>
        </div>
    </div>
    <div class="nav-bar">
        <button onclick="userLogOut()">Log out</button>
    </div>
`
let username = document.querySelector(".username")
let email = document.querySelector(".email")

username.textContent = currentUser.username
email.textContent = currentUser.email
function userLogOut() {
    localStorage.removeItem("currentUser")
    location.replace("/loginPage/")
}