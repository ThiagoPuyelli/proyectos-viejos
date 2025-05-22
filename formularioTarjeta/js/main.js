var tarjeta = document.querySelector("#tarjeta"),
    formulario = document.querySelector("#formulario"),
    mostrarFormulario = document.querySelector("#mostrarFormulario"),
    mes = document.querySelector("#mes"),
    year = document.querySelector("#year"),
    mesTarjeta = document.querySelector(".mes"),
    yearTarjeta = document.querySelector(".year"),
    numeroTarjeta = document.querySelector("#numeroTarjeta"),
    numero = document.querySelector(".numero"),
    logoImagen = document.querySelector("#logo-marca"),
    nombre = document.querySelector("#nombreForm"),
    nombreTarjeta = document.querySelector(".nombre"),
    firma = document.querySelector(".firma"),
    ccv = document.querySelector("#ccvForm"),
    ccvTarjeta = document.querySelector(".ccvTarjeta");

tarjeta.addEventListener("click", function(){
    if(tarjeta.className == "tarjeta"){
        mostrarTrasero();
    } else {
        mostrarFrente();
    }
})

function mostrarFrente(){
    tarjeta.className = "tarjeta"
}

function mostrarTrasero(){
    tarjeta.className = "tarjeta active"
}

mostrarFormulario.addEventListener("click", function(){
    if(formulario.className == "formulario"){
        mostrarFormulario.style.transform = "rotateZ(45deg)"
        formulario.className = "formulario active"
    } else {
        mostrarFormulario.style.transform = "rotateZ(0deg)"
        formulario.className = "formulario"
    }
})

for(let i = 1; i <= 11; i++){
    let option = document.createElement("option");
    option.append(i);
    mes.append(option)
}

for(let i = 2020; i <= 2028; i++){
    let option = document.createElement("option");
    option.append(i);
    year.append(option)
}

numeroTarjeta.addEventListener("keyup", (e) => {
    let valorInput = e.target.value
    numeroTarjeta.value = valorInput
    .replace(/\s/g, '')
	.replace(/\D/g, '')
	.replace(/([0-9]{4})/g, '$1 ')
	.trim();

    numero.innerHTML = valorInput
    if(valorInput == ""){
        numero.innerHTML = "#### #### #### ####"
    }

    if(valorInput[0] == 4){
        logoImagen.innerHTML = ""
        let imagen = document.createElement("img");
        imagen.src = "img/logos/visa.png"
        logoImagen.append(imagen)
    } else if (valorInput[0] == 5){
        logoImagen.innerHTML = ""
        let imagen = document.createElement("img");
        imagen.src = "img/logos/mastercard.png";
        logoImagen.append(imagen)
    } else {
        logoImagen.innerHTML = ""
    }
    mostrarFrente();
})

nombre.addEventListener("keyup", (e) => {
    let valorInput = e.target.value
    nombreTarjeta.innerHTML = valorInput
    if(valorInput == ""){
        nombreTarjeta.innerHTML = "JHON DOE"
    }

    firma.innerHTML = valorInput
})

mes.addEventListener("change", function(e){
    let valorInput = e.target.value
    mesTarjeta.innerHTML = valorInput
    mostrarFrente();
})

year.addEventListener("change", function(e){
    let valorInput = e.target.value
    yearTarjeta.innerHTML = valorInput
    mostrarFrente();
})

ccv.addEventListener("keyup", (e) => {
    let valorInput = e.target.value
    ccv.value = ccv.value
    .replace(/\s/g, '')
    .replace(/\D/g, '')

    ccvTarjeta.value = valorInput
    ccvTarjeta.innerHTML = ccvTarjeta.value
    mostrarTrasero();
})