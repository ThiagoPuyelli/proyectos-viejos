class Producto{
    constructor(nombre, precio, fecha){
        this.nombre = nombre;
        this.precio = precio;
        this.fecha = fecha
    }
}

var formulario = document.querySelector("#product-form"),
    product = document.querySelector("#product"),
    aplicacion = document.querySelector("#aplicacion"),
    container = document.querySelector(".container");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let productName = document.querySelector("#name").value,
        productPrice = parseInt(document.querySelector("#price").value),
        productYear = document.querySelector("#year").value;

    if(productName == "" || productPrice == 0 || productPrice == "" || productPrice == isNaN){
        let alertaError = document.createElement("div");

        alertaError.className = "alert alert-danger"
        alertaError.innerHTML = "Hay algo mal dentro del formulario, por favor revíselo"

        container.insertBefore(alertaError, aplicacion)

        setTimeout(function(){
            alertaError.remove();
        }, 3000)

    } else {
        const produccion = new Producto(productName, productPrice, productYear);
        
    let div = document.createElement("div"),
        boton = document.createElement("input"),
        alertaSuccess = document.createElement("div");

    alertaSuccess.className = "alert alert-success"
    alertaSuccess.innerHTML = "Se ha subido su producto correctamente"
    container.insertBefore(alertaSuccess, aplicacion)

    setTimeout(function(){
        alertaSuccess.remove()
    }, 3000)

    div.className = "card-body text-center"
    boton.className = "btn btn-danger"
    boton.setAttribute("type", "button")
    boton.setAttribute("value", "Delete")

    var pija = `
        <strong> Product</strong>: ${produccion.nombre} 
        <strong> Price</strong>: ${produccion.precio}
        <strong> Year</strong>: ${produccion.fecha}
    `
    div.innerHTML = pija
    div.append(boton)
    product.append(div);

    formulario.reset();

    boton.addEventListener("click", function(){
        this.remove();
        div.remove();
        delete produccion;
    })
    }
})