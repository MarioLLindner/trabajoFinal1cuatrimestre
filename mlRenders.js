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



        document.getElementById([VALOR_INPUT]).addEvenListener('change',FUNCION)
        FUNCION
        document.getElementById([VALOR_INPUT]).classList.add('is-invalid') 