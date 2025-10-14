function saludo(){
            alert("hola mundo");
        }
function suma(){
    let v1=parseInt(document.getElementById("valor1").value);
    let v2=parseInt(document.getElementById("valor2").value);
    let res=v1+v2;
    console.log(res);
    
    document.getElementById("resultado").value=res;
    alert("El resultado es: "+res);
}
function login() {
    const user = document.getElementById("usuario");
    const form = document.getElementById("login");
    const pass = document.getElementById("contraseña");
    const errorUsuario = document.getElementById("error-usuario");
    const errorContraseña = document.getElementById("error-contraseña");
    const caracterInvalido = /[^a-zA-Z0-9]/;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let mensajesErrorUsuario = [];
        let mensajesErrorContraseña = [];

        if (user.value.trim() === "") {
            mensajesErrorUsuario.push("El campo usuario no puede estar vacío");
        } else if (user.value.length < 7) {
            mensajesErrorUsuario.push("El usuario debe tener al menos 7 caracteres");
        }

        if (pass.value.trim() === "") {
            mensajesErrorContraseña.push("El campo contraseña no puede estar vacío");
        } else {
            if (pass.value.length < 6) {
                mensajesErrorContraseña.push("La contraseña debe tener al menos 6 caracteres");
            }
            if (caracterInvalido.test(pass.value)) {
                mensajesErrorContraseña.push("La contraseña contiene caracteres no válidos");
            }
        }
        if (mensajesErrorUsuario.length > 0 || mensajesErrorContraseña.length > 0) {
            let todosLosErrores = mensajesErrorUsuario.concat(mensajesErrorContraseña).join("\n");
            alert(todosLosErrores);
        } else {
            alert("Inicio de sesión exitoso");
            form.reset();
        }
    });   
}
window.onload = function() {
    login();
    suma();
};