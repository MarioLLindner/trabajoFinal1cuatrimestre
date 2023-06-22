function handleSubmit(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtiene los valores de los campos
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Muestra los datos ingresados por consola
    console.log("Nombre:", name);
    console.log("Email:", email);
}

var form = document.getElementById("myForm");
		form.addEventListener("submit", handleSubmit);