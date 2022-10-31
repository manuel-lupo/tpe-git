form = document.querySelector("#form");
form.addEventListener("submit", adduser);

let tabla = document.querySelector("#tabla");
console.log(tabla);
let tres = document.querySelector("#tres");
tres.addEventListener("click", crearTresUsuarios);
let borrar = document.querySelector("#borrar");
borrar.addEventListener("click", borrarTodo);

const users = [
    {
        nombre: 'Juanse',
        apellido: 'Badonde',
        club: 'RIVER',
        goles: '1'
    },
    {
        nombre: 'Fermin',
        apellido: 'Zurzulo',
        club: 'Boca',
        goles: '2'
    },
    {
        nombre: 'Francisco',
        apellido: 'Balbuena',
        club: 'velez',
        goles: '3'
    },
    {
        nombre: 'Joaquin',
        apellido: 'Aphat',
        club: 'Lanus',
        goles: '4'
    }
];

function adduser(e) {
    e.preventDefault();
    let data = new FormData(form);

    let nombre= data.get('nombre');
    let apellido = data.get('apellido');
    let club = data.get('club');
    let goles = data.get ('goles')

    let user = {
        nombre: nombre,
        apellido: apellido,
        club: club,
        goles: goles
    }
    users.push(user);
    console.log(users);
    viewusers()
};


function viewusers() {
   

    let tablauser=''
    for (let user of users) {
    tablauser += `
            <tr>
                <td>${user.nombre}</td>
                <td>${user.apellido}</td>
                <td>${user.club}</td>
                <td>${user.goles}</td>
            </tr>
        `;
    };
tabla.innerHTML = tablauser;
}

function crearTresUsuarios() {
    for (let i = 0; i < 3; i++) {
        let data = new FormData(form);

        let nombre= data.get('nombre');
        let apellido = data.get('apellido');
        let club = data.get('club');
        let goles = data.get ('goles')
    let user = {
        nombre: nombre,
        apellido: apellido,
        club: club,
        goles: goles
    }
        users.push(user);
    }
    viewusers();
}


function borrarTodo() {
    users.length = 0;
    tabla.innerHTML = ``;
    viewusers();
}
viewusers();