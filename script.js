function showAlert() { 
    alert('!Hola, esta es una alerta desde JavaScript' );
}


// CLASE 5 PAAA //

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event){
    event.preventDefault();
    validateForm();
});

function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm(){
    const emailinput = document.getElementById('email');
    const email = emailinput.ariaValueMax;

    if (!validateEmail(email)){
        alert('Por favor ingrese un correo electronico valido.');    
    } else {
        alert('Correo electronico enviado correctamente')
    }
}
// CLASE NUMERO 7 //
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})