function registro(){
    const form = document.getElementById("registro");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const errorNombre = document.getElementById("error-nombre");
    const errorEmail = document.getElementById("error-email");
    const errorPassword = document.getElementById("error-password");

    form.addEventListener("submit", (e) => {
        let mensajesErrorNombre = [];
        let mensajesErrorEmail = [];
        let mensajesErrorPassword = [];

        if (nombre.value.trim() === "") {
            mensajesErrorNombre.push("El campo nombre no puede estar vacío");
        }
        if (email.value.trim() === "") {
            mensajesErrorEmail.push("El campo email no puede estar vacío");
        } else if (!/\S+@\S+\.\S+/.test(email.value)) {
            mensajesErrorEmail.push("El email no es válido");
        }
        if (password.value.trim() === "") {
            mensajesErrorPassword.push("El campo contraseña no puede estar vacío");
        } else if (password.value.length < 6) {
            mensajesErrorPassword.push("La contraseña debe tener al menos 6 caracteres");
        }
        errorNombre.textContent = mensajesErrorNombre.join(", ");
        errorEmail.textContent = mensajesErrorEmail.join(", ");
        errorPassword.textContent = mensajesErrorPassword.join(", ");
        if (mensajesErrorNombre.length === 0 && mensajesErrorEmail.length === 0 && mensajesErrorPassword.length === 0) {
            alert("Registro exitoso");
            form.reset();
        }
        e.preventDefault();
    });
}
window.onload = registro;