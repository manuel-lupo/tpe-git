const url = 'https://62c60476134fa108c261851c.mockapi.io/api/goleadores';
const tablaint = document.getElementById("tablainteractiva").querySelector(".Tablas");




async function obtenerDatos(){
    tablaint.innerHTML = " ";
    try {
        let respuesta =  await fetch(url);
        let json = await respuesta.json();
        console.log(json)
        for(const usuario of json){
            let nombres = usuario.name;
            let id = usuario.id;
            const tr = document.createElement("tr");
            const td_nombre= document.createElement("td");
            const td_btn = document.createElement("td");
            const buttoneliminar = document.createElement("button");
            const buttoneditar = document.createElement("button");
            td_nombre.innerHTML = nombres;
            buttoneliminar.innerHTML = "Eliminar";
            buttoneditar.innerHTML = "Editar";
            td_btn.appendChild(buttoneditar);
            td_btn.appendChild(buttoneliminar);
            tr.appendChild(td_nombre);
            tr.appendChild(td_btn);
            tablaint.appendChild(tr);
            buttoneliminar.addEventListener("click", () =>{eliminarDatos(id);});
            buttoneditar.addEventListener("click", () =>{modificar(id);});

        }
    } 
    catch (error) {
        console.log(error);
    } 
}

obtenerDatos();

async function mandardatos(){
    let nombre = document.getElementById("ingresar").value;

    let mandar = {
        "name" : nombre
    }

    try {
        let res = await fetch(url, {
            "method": "POST",
            "headers" : { "Content-type": "application/json" },
            "body": JSON.stringify(mandar)
        });
        if (res.status === 201){
            document.getElementById("edicion").innerHTML ="Enviado!";
        }
    } 
    catch (error) {
        console.log(error)
    }
    obtenerDatos();
}


async function eliminarDatos(id){

    try {
        let res = await fetch(`${url}/${id}`, {
            "method": "DELETE"
        })
        if (res.status === 200) {
            document.querySelector('#edicion').innerHTML = "Borrado con éxito";
        }
    } catch (error) {
        console.log(error);
    }
    obtenerDatos();
}

async function modificar(id){


    let nombre = document.getElementById("ingresar").value;
    let envio = {
        "name": nombre
    }

    try {
        let res = await fetch(`${url}/${id}`, {
            "method": "PUT",
            "headers": { "Content-type":"application/json"},
            "body": JSON.stringify(envio)
        });
        if (res.status === 200){
            document.getElementById("edicion").innerHTML = " Editado con exito!";
        }
    } 
    catch (error) {
        console.log(error);
    }
    obtenerDatos();
}

document.getElementById("enviargoleador").addEventListener("click",mandardatos);