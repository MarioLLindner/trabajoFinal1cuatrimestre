const cargar = document.getElementById('btn-cargar');
const input = document.getElementById('input');
const listado = document.getElementById('lista');


let array = [];
let id = 1;

cargar.addEventListener('click', () => cargarTarea())


const completarTarea = (btn) => {
    const id = btn.dataset.id
    const elemento = array.find((tarea) => tarea.id === Number(id));
    console.log(elemento);
    elemento.isComplete = true;

    console.log(array);
    mostrarLista();
}

const eliminarTarea = (btn) => {
    const id = btn.dataset.id
    array = array.filter((t) => t.id !== Number(id));
    mostrarLista();
}


const mostrarLista = () => {
    let str = '';

    array.forEach((tarea) => {
        str += `
    <div class="tarea">
    <div>
      <p>${tarea.value}</p>
    </div>
    <div>
    <div>
    <button data-id=${tarea.id} class="btn-${tarea.isComplete ? 'eliminar' : 'completar'}">${tarea.isComplete ? 'Finalizado' : 'Completar tarea'}</button>
    </div>
    <div>
      <button class="${!tarea.isComplete ? 'disabled' : ''}">Eliminar tarea</button>
    </div>
    </div>
  </div>
    `
    })

    listado.innerHTML = str;
    const btnComplete = document.querySelectorAll('.btn-completar');
    btnComplete.forEach((btn) => {
        btn.addEventListener('click', (e) => completarTarea(btn))
    })

    const btnDelete = document.querySelectorAll('.btn-eliminar');
    btnDelete.forEach((btn) => {
        btn.addEventListener('click', (e) => eliminarTarea(btn))
    })
}

const cargarTarea = () => {

    const value = input.value;
    console.log(input.value)

    array.push({ id, value, isComplete: false })
    id += 1;

    mostrarLista();

}




















function handleSubmit(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtiene los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;

    // Muestra los datos ingresados por consola
    console.log("Nombre:", nombre);
    console.log("Email:", email);
}

var form = document.getElementById("myForm");
form.addEventListener("submit", handleSubmit);









