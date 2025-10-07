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