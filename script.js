// Login Button
document.getElementById("loginBtn").
addEventListener("click", function (e){
    e.preventDefault()
    const mobile = 12345678910
    const password = 12345678
    const mobileValue = document.getElementById("mobile").value
    const mobileValueConverted = parseInt(mobileValue)

    const passwordValue = document.getElementById("password").value   
    const passwordValueConverted = parseInt(passwordValue) 

   
    if(mobileValueConverted === mobile && passwordValueConverted === password){
        window.location.href = "./home.html"
    }
    else{
        alert("Invalid Credentials")
    }
})