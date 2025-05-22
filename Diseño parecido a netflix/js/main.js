//MENU DE PELICULAS

var contenedor_peliculas = document.querySelector(".contenedor_peliculas");
var flecha_adelante = document.querySelector(".flecha_adelante")
var flecha_atras = document.querySelector(".flecha_atras");
var contador = 0;
var pelicula = document.querySelectorAll(".pelicula");
var boton = document.createElement("button");
var boton2 = document.createElement("button");
var boton3 = document.createElement("button");
var boton4 = document.createElement("button");
var boton5 = document.createElement("button");
var boton6 = document.createElement("button");
console.log(pelicula.length);

switch (pelicula.length) {
    case 10:
        contenedor_peliculas.style.width = "2600px";
        break;
    case 15:
        contenedor_peliculas.style.width = "3900px";
        break;
    case 20:
        contenedor_peliculas.style.width = "5200px";
        break;
    case 25:
        contenedor_peliculas.style.width = "6500px";
        break;
    case 30:
        contenedor_peliculas.style.width = "7800px";
        break;
    default:
        contenedor_peliculas.style.width = "1300px";
        break;
}

flecha_adelante.addEventListener("click", function () {
    flecha_atras.style.display = "block"
    if (contador == 0 && pelicula.length > 5) {
        contenedor_peliculas.style.marginLeft = "-1300px";
        boton.style.background = "white";
        boton2.style.background = "#E50914";

        if (pelicula.length <= 10) {
            this.style.display = "none";
        }
    } else if (contador == 1 && pelicula.length > 10) {
        contenedor_peliculas.style.marginLeft = "-2600px";

        boton2.style.background = "white";
        boton3.style.background = "#E50914";

        if (pelicula.length <= 15) {
            this.style.display = "none";
        }
    } else if (contador == 2 && pelicula.length > 15) {
        contenedor_peliculas.style.marginLeft = "-3900px";

        boton3.style.background = "white";
        boton4.style.background = "#E50914";

        if (pelicula.length <= 20) {
            this.style.display = "none";
        }
    } else if (contador == 3 && pelicula.length > 20) {
        contenedor_peliculas.style.marginLeft = "-5200px";

        boton4.style.background = "white";
        boton5.style.background = "#E50914";

        if (pelicula.length <= 25) {
            this.style.display = "none";
        }
    } else if (contador == 4 && pelicula.length > 25) {
        contenedor_peliculas.style.marginLeft = "-6500px";

        boton5.style.background = "white";
        boton6.style.background = "#E50914";

        if (pelicula.length <= 30) {
            this.style.display = "none";
        }
    } else if (contador == 5 && pelicula.length > 30) {
        contenedor_peliculas.style.marginLeft = "-7800px";

        boton6.style.background = "white";
        boton7.style.background = "#E50914";

        if (pelicula.length <= 35) {
            this.style.display = "none";
        }
    }
    contador += 1;
});

flecha_atras.addEventListener("click", function () {
    switch (contador) {
        case 1:
            contenedor_peliculas.style.marginLeft = "0px";
            flecha_atras.style.display = "none";
            flecha_adelante.style.display = "block";
            boton.style.background = "#E50914"
            boton2.style.background = "white";
            break;
        case 2:
            contenedor_peliculas.style.marginLeft = "-1300px";
            flecha_adelante.style.display = "block";
            boton2.style.background = "#E50914"
            boton3.style.background = "white";
            break;
        case 3:
            contenedor_peliculas.style.marginLeft = "-2600px";
            flecha_adelante.style.display = "block";
            boton3.style.background = "#E50914"
            boton4.style.background = "white";
            break;
        case 4:
            contenedor_peliculas.style.marginLeft = "-3900px";
            flecha_adelante.style.display = "block";
            boton4.style.background = "#E50914"
            boton5.style.background = "white";
            break;
        case 5:
            contenedor_peliculas.style.marginLeft = "-5200px";
            flecha_adelante.style.display = "block";
            boton5.style.background = "#E50914"
            boton6.style.background = "white";
            break;
        case 6:
            contenedor_peliculas.style.marginLeft = "-6500px";
            flecha_adelante.style.display = "block";
            boton6.style.background = "#E50914"
            boton7.style.background = "white";
            break;
    }
    contador -= 1;
});

if (contador == 0) {
    flecha_atras.style.display = "none";
}

//MARCADOR DE PELICULAS

var peliculas_marcador = document.querySelector(".peliculas_marcador");

switch (pelicula.length) {
    case 5:
        peliculas_marcador.append(boton);
        break;
    case 10:
        peliculas_marcador.append(boton, boton2);
        break;
    case 15:
        peliculas_marcador.append(boton, boton2, boton3);
        break;
    case 20:
        peliculas_marcador.append(boton, boton2, boton3, boton4);
        break;
    case 25:
        peliculas_marcador.append(boton, boton2, boton3, boton4, boton5);
        break;
    case 30:
        peliculas_marcador.append(boton, boton2, boton3, boton4, boton5, boton6);
        break;
}

boton.style.background = "#E50914";
var botones = document.querySelectorAll(".peliculas_marcador button");
console.log(botones);

boton.addEventListener("click", function(){
    botones.forEach((element, i) => {
        element.style.background = "white";
    });
    this.style.background = "#E50914";
    contenedor_peliculas.style.marginLeft = "0px";
    contador = 0;
    flecha_atras.style.display = "none";
    if(pelicula.length == 5){
        flecha_adelante.style.display = "none"
    } else {
        flecha_adelante.style.display = "block";
    }
});

boton2.addEventListener("click", function(){
    botones.forEach((element, i) => {
        element.style.background = "white";
    });
    this.style.background = "#E50914";
    contenedor_peliculas.style.marginLeft = "-1300px";
    contador = 1;
    flecha_atras.style.display = "block";
    if(pelicula.length == 10){
        flecha_adelante.style.display = "none";
    } else {
        flecha_adelante.style.display = "block";
    }
});

boton3.addEventListener("click", function(){
    botones.forEach((element, i) => {
        element.style.background = "white";
    });
    this.style.background = "#E50914";
    contenedor_peliculas.style.marginLeft = "-2600px";
    contador = 2;
    flecha_atras.style.display = "block";
    if(pelicula.length == 15){
        flecha_adelante.style.display = "none";
    } else {
        flecha_adelante.style.display = "block";
    }
});

boton4.addEventListener("click", function(){
    botones.forEach((element, i) => {
        element.style.background = "white";
    });
    this.style.background = "#E50914";
    contenedor_peliculas.style.marginLeft = "-3900px";
    contador = 3;
    flecha_atras.style.display = "block";
    if(pelicula.length == 20){
        flecha_adelante.style.display = "none";
    } else {
        flecha_adelante.style.display = "block";
    }
});

boton5.addEventListener("click", function(){
    botones.forEach((element, i) => {
        element.style.background = "white";
    });
    this.style.background = "#E50914";
    contenedor_peliculas.style.marginLeft = "-5200px";
    contador = 4;
    flecha_atras.style.display = "block";
    if(pelicula.length == 25){
        flecha_adelante.style.display = "none";
    } else {
        flecha_adelante.style.display = "block";
    }
});

boton6.addEventListener("click", function(){
    botones.forEach((element, i) => {
        element.style.background = "white";
    });
    this.style.background = "#E50914";
    contenedor_peliculas.style.marginLeft = "-6500px";
    contador = 5;
    flecha_atras.style.display = "block";
    if(pelicula.length == 30){
        flecha_adelante.style.display = "none";
    } else {
        flecha_adelante.style.display = "block";
    }
});
//CAMBIO DE IMAGEN DEL BANNER



var fondoBanner = document.querySelector("#fondoBanner");

var textoNarcos = `
    <h2>Narcos</h2>
    <p>La verdadera historia de los poderosos y violentos cárteles de droga colombianos es el marco de esta serie dramática sobre el narco.</p>
`;

var textoAstronauta = `
    <h2>Interstellar</h2>
    <p>Interstellar, una película de ciencia-ficción en la que la ciencia es (casi) más importante que la ficción</p>
`;

setInterval(function(){
    var bannerTexto = document.querySelector(".banner_texto");
    var directorioBanner = fondoBanner.getAttribute("href");
    if(directorioBanner == "css/narcos.css"){
        fondoBanner.setAttribute("href", "css/astronauta.css");
        bannerTexto.innerHTML = textoAstronauta;
    } else if (directorioBanner == "css/astronauta.css"){
        fondoBanner.setAttribute("href", "css/narcos.css");
        bannerTexto.innerHTML = textoNarcos;
    }

}, 10000);




