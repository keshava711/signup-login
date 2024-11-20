let email=document.getElementById("useremail")
let pswd=document.getElementById("userpswd")
let btn=document.getElementById("loginbtn")

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let loginmail=email.value
    let loginpswd=pswd.value
    let mailStorage=localStorage.getItem("email")
    let pswdStorage=localStorage.getItem("pswd")
    if(loginmail==mailStorage && loginpswd==pswdStorage){
        alert("Login Successfull")
        window.location.href="home.html"
    }else{
        alert("Invalid Credentials")
    }
})