const formulario = document.getElementById('formulario');
const btnDeHaceres = document.getElementById('input-btn');
const caja = document.getElementById('box');
const cajitaLista = document.getElementById('box-lista');

eventListeners();
function eventListeners(){
    formulario.addEventListener('submit', agregarTarea);     
    cajitaLista.addEventListener('click', borrarTarea);
}

function agregarTarea(event){
    event.preventDefault();

    const cajitaDeHaceres = document.getElementById('input-text').value;
    // btn borrar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar';
    botonBorrar.innerText = 'x';
    // crear lista
    const lista = document.createElement('li');
    lista.innerText = cajitaDeHaceres;
    lista.appendChild(botonBorrar);
    cajitaLista.appendChild(lista);

    if (cajitaLista.innerHTML != " "){
        cajitaLista.classList.remove('oculta');
    } else {
        cajitaLista.classList.add('oculta');
    }
}

function borrarTarea(event){
    event.preventDefault();
    if(event.target.className ==='borrar'){
        event.target.parentElement.remove();
        
  }
}
