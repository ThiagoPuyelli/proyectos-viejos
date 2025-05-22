$(document).ready(function () {

  var theme = $("#theme");
  console.log(localStorage.getItem("verde"));

  if (localStorage.getItem("verde") == "verde") {
    theme.attr("href", "css/green.css")
  } else if (localStorage.getItem("rojo") == "rojo") {
    theme.attr("href", "css/red.css")
  } else if (localStorage.getItem("azul") == "azul") {
    theme.attr("href", "css/blue.css");
  }
  //SLIDER
  if (window.location.href.indexOf("index") > -1) {
    $(function () {
      $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        response: true
      });
    });
  }

  //POSTS
  if (window.location.href.indexOf("index") > -1) {
    var posts = [
      {
        title: "Prueba de titulo 1",
        date: "Publicado el dia " + moment().date() + " de " + moment().format("MMM") + " de " + moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu ultricies mi, eget sollicitudin sapien. Duis mattis eu velit nec sagittis. Vivamus nisl sapien, pharetra eget dui nec, luctus interdum orci. Nulla a aliquam odio, eget suscipit lectus. Nulla semper leo non ultricies volutpat. Vestibulum eu hendrerit lacus. In feugiat mauris turpis. Vivamus tincidunt lacus ut mauris gravida ullamcorper. Nulla facilisis felis non est aliquet, non sodales sem dignissim.Sed enim urna, tristique non vulputate at, semper bibendum nisl.In hac habitasse platea dictumst.Ut malesuada blandit placerat.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Sed a lorem magna.Cras auctor porttitor ipsum eu placerat."
      },
      {
        title: "Prueba de titulo 2",
        date: "Publicado el dia " + moment().date() + " de " + moment().format("MMM") + " de " + moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu ultricies mi, eget sollicitudin sapien. Duis mattis eu velit nec sagittis. Vivamus nisl sapien, pharetra eget dui nec, luctus interdum orci. Nulla a aliquam odio, eget suscipit lectus. Nulla semper leo non ultricies volutpat. Vestibulum eu hendrerit lacus. In feugiat mauris turpis. Vivamus tincidunt lacus ut mauris gravida ullamcorper. Nulla facilisis felis non est aliquet, non sodales sem dignissim.Sed enim urna, tristique non vulputate at, semper bibendum nisl.In hac habitasse platea dictumst.Ut malesuada blandit placerat.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Sed a lorem magna.Cras auctor porttitor ipsum eu placerat."
      },
      {
        title: "Prueba de titulo 3",
        date: "Publicado el dia " + moment().date() + " de " + moment().format("MMM") + " de " + moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu ultricies mi, eget sollicitudin sapien. Duis mattis eu velit nec sagittis. Vivamus nisl sapien, pharetra eget dui nec, luctus interdum orci. Nulla a aliquam odio, eget suscipit lectus. Nulla semper leo non ultricies volutpat. Vestibulum eu hendrerit lacus. In feugiat mauris turpis. Vivamus tincidunt lacus ut mauris gravida ullamcorper. Nulla facilisis felis non est aliquet, non sodales sem dignissim.Sed enim urna, tristique non vulputate at, semper bibendum nisl.In hac habitasse platea dictumst.Ut malesuada blandit placerat.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Sed a lorem magna.Cras auctor porttitor ipsum eu placerat."
      },
      {
        title: "Prueba de titulo 4",
        date: "Publicado el dia " + moment().date() + " de " + moment().format("MMM") + " de " + moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu ultricies mi, eget sollicitudin sapien. Duis mattis eu velit nec sagittis. Vivamus nisl sapien, pharetra eget dui nec, luctus interdum orci. Nulla a aliquam odio, eget suscipit lectus. Nulla semper leo non ultricies volutpat. Vestibulum eu hendrerit lacus. In feugiat mauris turpis. Vivamus tincidunt lacus ut mauris gravida ullamcorper. Nulla facilisis felis non est aliquet, non sodales sem dignissim.Sed enim urna, tristique non vulputate at, semper bibendum nisl.In hac habitasse platea dictumst.Ut malesuada blandit placerat.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Sed a lorem magna.Cras auctor porttitor ipsum eu placerat."
      },
      {
        title: "Prueba de titulo 5",
        date: "Publicado el dia " + moment().date() + " de " + moment().format("MMM") + " de " + moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu ultricies mi, eget sollicitudin sapien. Duis mattis eu velit nec sagittis. Vivamus nisl sapien, pharetra eget dui nec, luctus interdum orci. Nulla a aliquam odio, eget suscipit lectus. Nulla semper leo non ultricies volutpat. Vestibulum eu hendrerit lacus. In feugiat mauris turpis. Vivamus tincidunt lacus ut mauris gravida ullamcorper. Nulla facilisis felis non est aliquet, non sodales sem dignissim.Sed enim urna, tristique non vulputate at, semper bibendum nisl.In hac habitasse platea dictumst.Ut malesuada blandit placerat.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Sed a lorem magna.Cras auctor porttitor ipsum eu placerat."
      },
      {
        title: "Prueba de titulo 6",
        date: "Publicado el dia " + moment().date() + " de " + moment().format("MMM") + " de " + moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu ultricies mi, eget sollicitudin sapien. Duis mattis eu velit nec sagittis. Vivamus nisl sapien, pharetra eget dui nec, luctus interdum orci. Nulla a aliquam odio, eget suscipit lectus. Nulla semper leo non ultricies volutpat. Vestibulum eu hendrerit lacus. In feugiat mauris turpis. Vivamus tincidunt lacus ut mauris gravida ullamcorper. Nulla facilisis felis non est aliquet, non sodales sem dignissim.Sed enim urna, tristique non vulputate at, semper bibendum nisl.In hac habitasse platea dictumst.Ut malesuada blandit placerat.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Sed a lorem magna.Cras auctor porttitor ipsum eu placerat."
      }
    ];
    posts.forEach((item, index) => {
      var post = `
      <article class="post">
      <h4>${item.title}</h4>
      <span>${item.date}</span>
      <p>${item.content}</p>
      <a href="#" class="leer">Leer más</a>
  </article>
      `;

      $("#posts").append(post);
    });
  }


  $("#to-green").click(function () {
    theme.attr("href", "css/green.css")
    if (localStorage.getItem("rojo")) {
      localStorage.removeItem("rojo");
    } else if (localStorage.getItem("azul")) {
      localStorage.removeItem("azul");
    } else {
      localStorage.removeItem("green");
    }
    localStorage.setItem("verde", "verde");
  });

  $("#to-red").click(function () {
    theme.attr("href", "css/red.css")
    if (localStorage.getItem("azul")) {
      localStorage.removeItem("azul");
    } else if (localStorage.getItem("verde")) {
      localStorage.removeItem("verde");
    } else {
      localStorage.removeItem("rojo");
    }
    localStorage.setItem("rojo", "rojo");
  });

  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css")
    if (localStorage.getItem("verde")) {
      localStorage.removeItem("verde");
    } else if (localStorage.getItem("rojo")) {
      localStorage.removeItem("rojo");
    } else {
      localStorage.removeItem("azul");
    }
    localStorage.setItem("azul", "azul");
  });

  $(".subir").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, 500);
  });

  $("#login form").submit(function () {
    var form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");
  if (form_name != null && form_name != "undefined") {
    var about_parrafo = $("#about p");
    about_parrafo.html("<strong>Bienvenido " + form_name + "</strong>");
    about_parrafo.append("<a href='#' id='logout'>Cerrar</a>");
    $("#login").hide();

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });
  }
  //ACORDEON
  if (window.location.href.indexOf("about") > -1) {
      $("#acordeon").accordion();
  }
  //RELOJ
  if (window.location.href.indexOf("reloj") > -1) {
    setInterval(function (){
      var reloj = moment().format("h:mm:ss");
      $("#reloj").html(reloj);
    }, 1000);
      var reloj = moment().format("h:mm:ss");
      $("#reloj").html(reloj);
  };

  if (window.location.href.indexOf("contact") > -1) {
    $.validate({
      lang: "es",
      errorMessagePosition: "top",
      scrollToTopOnError: true
    });
  };
});