const url = 'http://localhost:8088/api/usuario'
const listarUsuarios = async() => {
    let body = document.getElementById('contenido')
    if(body){
        let mensaje = ''
        

        fetch(url)//Permite llamar la API
        .then(res => res.json())
        .then(function (data) {
            let listarUsuarios = data.usuarios
            listarUsuarios.map((usuario) => {
                mensaje += `<tr><td>${usuario.nombre}</td>`+
                `<td>${usuario.rol}</td>`+
                `<td>${usuario.estado? 'Activo':'Inactivo' }</td></tr>`
                body.innerHTML = mensaje
            }   
            )
        })
    }
}

listarUsuarios()

const registrarUsuario = async() =>{
    //Captura de valores de datos enviados desde el formulario
    let nombre = document.getElementById('nombre').value
    let password = document.getElementById('password').value
    let confirmarPassword = document.getElementById('confirmarPassword').value
    let rol = document.getElementById('rol').value
    let estado = document.getElementById('estado').value

    let usuario = {
        nombre: nombre,
        password: password,
        rol: rol,
        estado: estado
    }

    if((password.length >0 && confirmarPassword.length>0) && (password == confirmarPassword)){
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body:JSON.stringify(usuario),
            headers: {"Content-type": "application/json; charset=UTF-8"}     
        })
        .then(response => response.json()) //La respuesta del método POST de la API
        .then(json => {
           alert(json.mensaje)
        })
    }
    else{
        alert('El password y la confirmación del Password no coinciden. Por favor verifique')
    }
}

document.querySelector('#btnRegistrar')
.addEventListener('click', registrarUsuario)

//Installar en la api(backend) los paquetes:
//cors
//body-parser
