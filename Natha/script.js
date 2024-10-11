let emailValido = "root@cbtis258.edu.mx";
letpassValido = "admin0405";

const chequelogin = (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("Loginmensaje").value;

    if(email === emailValido && password === passValido){
        mensaje.textContent = "Inicio de sesion correcto";
        mensaje.style.color = "green";

        setTimeout(() => {
            window.location
        })
    }
}