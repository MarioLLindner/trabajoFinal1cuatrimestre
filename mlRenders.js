
//Declaro un arrary para guardar las tareas y un ID para asignarle a cada tarea
let array = [];
let id = 1;
//Creo una funcion para obtener el valor de cada selector y guardarlo en un array
function tareas() {
    const tarea1 = "Modelado: " + document.getElementById('select1').value;
    const tarea2 = "Renderizado para: " + document.getElementById('select2').value;
    const tarea3 = "Decoracion: " + document.getElementById('select3').value;
    const tarea4 = "Tiempo de entrega: " + document.getElementById('select4').value;
    document.getElementById("select1").options.selectedIndex=0
    document.getElementById("select2").options.selectedIndex=0
    document.getElementById("select3").options.selectedIndex=0
    document.getElementById("select4").options.selectedIndex=0
    return [tarea1, tarea2, tarea3, tarea4];
}
//A travez del btn-cargar obtengo el valor del array retornado de tareas() y agrego la tarea al array principal, incremento el ID para la sig tarea y muestro la lista actualizada
const cargar = document.getElementById('btn-cargar');
cargar.addEventListener('click', () => {
    const array1 = tareas();
    array.push({ id, value: array1, isComplete: false });
    id += 1;
    mostrarLista();
});
//obtengo el ID de la tarea desde el "data-id" del boton, busco la tarea correspondiente con el .find, le cambio su estado is.complete a "True", y muestro lista actualizada
const completarTarea = (btn) => {
    const id = btn.dataset.id;
    const elemento = array.find((tarea) => tarea.id === Number(id));
    elemento.isComplete = true;
    mostrarLista();
};
//Obtengo el ID de la tarea desde el "data-id" del boton, filtro el array quitando ese ID y muestro nuevamente la lista actualizada
const eliminarTarea = (btn) => {
    const id = btn.dataset.id;
    array = array.filter((t) => t.id !== Number(id));
    mostrarLista();
};
//creo la variable "str" para almacenar la lista de tareas, agrego el valor de la tarea al HTML y agrego un boton de completar o eliminar dependiendo el estado de la tarea.
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
      </div>
    </div>
    `;
    });
    const listado = document.getElementById('listado');//obtengo el elemento html donde se mostrara la lista
    listado.innerHTML = str;//actualizo el contenido con la lista generada
    const btnComplete = document.querySelectorAll('.btn-completar');//Obtiene todos los botones de completar tarea
    btnComplete.forEach((btn) => {
        btn.addEventListener('click', (e) => completarTarea(btn));// Asigna el evento de completar tarea a cada botón
    });
    const btnDelete = document.querySelectorAll('.btn-eliminar');// Obtiene todos los botones de eliminar tarea
    btnDelete.forEach((btn) => {
        btn.addEventListener('click', (e) => eliminarTarea(btn));// Asigna el evento de eliminar tarea a cada botón
    });
};

mostrarLista();


const esEmailValido = (email) => {
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    return emailRegex.test(email)
}

const validarNombre = () => {
    const nombreInput = document.getElementById('nombre');
    if (nombreInput.value.trim() == "") {
        // error de required
        document.getElementById('error-nombre').innerHTML = "El nombre es requerido";
        nombreInput.classList.add('is-invalid');
    } else if (nombreInput.value.trim().length < 2) {
        // error de minLength
        document.getElementById('error-nombre').innerHTML = "El nombre debe tener al menos 5 caracteres";
        nombreInput.classList.add('is-invalid');
    } else {
        document.getElementById('error-nombre').innerHTML = "";
        nombreInput.classList.remove('is-invalid');
    }
}


const enviarFormulario = () => {
    let formularioCorrecto = true;
    const nombreInput = document.getElementById('nombre');
    if (nombreInput.value.trim() == "") {
        // error de required
        document.getElementById('error-nombre').innerHTML = "El nombre es requerido";
        formularioCorrecto = false;
    } else if (nombreInput.value.trim().length < 2) {
        // error de minLength
        document.getElementById('error-nombre').innerHTML = "El nombre debe tener al menos 5 caracteres";
        formularioCorrecto = false;
    } else {
        document.getElementById('error-nombre').innerHTML = "";
    }

    const emailInput = document.getElementById('email');
    if (emailInput.value.trim() == "") {
        // error de required
        document.getElementById('error-email').innerHTML = "El email es requerido";
        formularioCorrecto = false;
    } else if (!esEmailValido(emailInput.value)) {
        // error de minLength
        document.getElementById('error-email').innerHTML = "Direccion de email incorrecta";
        formularioCorrecto = false;
    } else {
        document.getElementById('error-email').innerHTML = "";
    }

    const notificaciones = document.getElementById("notificaciones");
    if (formularioCorrecto) {
        console.log("Nombre:", nombreInput.value);
        console.log("Email:", emailInput.value);
    } else {
        console.log("Formulario incorrecto")
    }

}


const inicializarJs = () => {
    const boton = document.getElementById("enviar-btn");
    boton.addEventListener('click', function (e) {
        enviarFormulario();
    });

    document.getElementById('nombre').addEventListener('blur', function (e) {
        validarNombre();
    })

}

window.addEventListener('load', inicializarJs);