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
function validar(){
const user = document.getElementById("usuario");
const form = document.getElementById("login");
const pass = document.getElementById("contraseña");
const errorUsuario = document.getElementById("error-usuario");
const errorContraseña = document.getElementById("error-contraseña");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    errorUsuario.textContent = "";
    errorContraseña.textContent = "";

    let hayError = false;

    if (user.value.trim() === "") {
        errorUsuario.textContent = "El campo usuario no puede estar vacío";
        hayError = true;
    } else if (user.value.length > 3) {
        errorUsuario.textContent = "El usuario no puede tener más de 3 caracteres";
        hayError = true;
    }

    if (pass.value.trim() === "") {
        errorContraseña.textContent = "El campo contraseña no puede estar vacío";
        hayError = true;
    } else if (pass.value.length < 6) {
        errorContraseña.textContent = "La contraseña debe tener al menos 6 caracteres";
        hayError = true;
    }

    if (!hayError) {
        alert("Inicio de sesión exitoso");
        form.reset();
    }
});
}