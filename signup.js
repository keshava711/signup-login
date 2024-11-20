let username = document.getElementById("username")
let useremail = document.getElementById("useremail")
let userpswd = document.getElementById("userpswd")
let signbtn = document.getElementById("signup")

signbtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (username.value !== "" && useremail.value != "" && userpswd.value != "") {
        const namevalue = username.value
        const emailvalue = useremail.value
        const pswdvalue = userpswd.value
        localStorage.setItem("name", namevalue)
        localStorage.setItem("email", emailvalue)
        localStorage.setItem("pswd", pswdvalue)
        alert("signup successfull")
        window.open("login.html")
    }else{
        alert("please fill all the fields")
    }
})