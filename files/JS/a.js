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
function validar() {
    const user = document.getElementById("usuario");
    const form = document.getElementById("login");
    const pass = document.getElementById("contraseña");
    const errorUsuario = document.getElementById("error-usuario");
    const errorContraseña = document.getElementById("error-contraseña");

    form.addEventListener("submit", (e) => {
        let mensajesErrorUsuario = [];
        let mensajesErrorContraseña = [];

        if (user.value.trim() === "") {
            mensajesErrorUsuario.push("El campo usuario no puede estar vacío");
        } else if (user.value.length > 3) {
            mensajesErrorUsuario.push("El usuario no puede tener más de 3 caracteres");
        }

        if (pass.value.trim() === "") {
            mensajesErrorContraseña.push("El campo contraseña no puede estar vacío");
        } else if (pass.value.length < 6) {
            mensajesErrorContraseña.push("La contraseña debe tener al menos 6 caracteres");
        }

        errorUsuario.textContent = mensajesErrorUsuario.join(", ");
        errorContraseña.textContent = mensajesErrorContraseña.join(", ");

        if (mensajesErrorUsuario.length > 0 || mensajesErrorContraseña.length > 0) {
            let todosLosErrores = mensajesErrorUsuario.concat(mensajesErrorContraseña).join("\n");
            alert(todosLosErrores);
        } else {
            alert("Inicio de sesión exitoso");
            form.reset();
        }

        e.preventDefault();
    });
}