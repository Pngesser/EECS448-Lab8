function validate(){
    
    let pass = document.getElementById("pass");
    let valpass = document.getElementById("valpass");
    if(pass.value.length > 8 | valpass.value.length > 8){
        alert("passwords are greater than 8 characters")
    }
    if(pass.value != valpass.value)
    {
        alert("Passwords do not match");
    }
    if(pass.value == valpass.value)
    {
        alert("Passwords Match");
    }
}