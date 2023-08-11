document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 800, // Duración de la animación (en milisegundos)
        offset: 100,   // Desplazamiento antes de que se inicie la animación (en píxeles)
    });

    //FUNCION QUE ME APLICA EL ESTILO A LA OPCION SELECCIONADA EN EL MENU Y QUITA LA PREVIAMENTE SELECCIONADA
    function seleccionar(link) {
        var opciones = document.querySelectorAll("#links a");
        opciones[0].className = "";
        opciones[1].className = "";
        opciones[2].className = "";
        opciones[3].className = "";
        opciones[4].className = "";    
        link.className = "seleccionado";

        //hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive
        var x = document.getElementById("nav");
        x.className = "";
    }

    //FUNCION QUE MUESTRA EL MENU RESPONSIVE
    function responsiveMenu() {
        var x = document.getElementById("nav");
        if (x.className === "") {
            x.className = "responsive";
        } else {
            x.className = "";
        }
    }

    //DETECTO EL SCROLLING PARA ANIMAR
    window.onscroll = function() {
        efectoHabilidades();
    };

    //funcion que aplica la animacion de la barra de habilidades
    function efectoHabilidades() {
        var skills = document.getElementById("skills");
        var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
        if (distancia_skills >= 300) {
            document.getElementById("html").classList.add("barra-progreso1");
            document.getElementById("js").classList.add("barra-progreso2");
            document.getElementById("bd").classList.add("barra-progreso3");
            document.getElementById("ps").classList.add("barra-progreso4");
        }
    }

    // Mostrar el modal automáticamente cuando la página se carga
    const modal = document.getElementById("cookie-modal");
    const overlay = document.getElementById("modal-overlay");

    function openModal() {
        modal.style.display = "block";
        overlay.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
        overlay.style.display = "none";
    }

    const acceptButton = document.getElementById("accept-cookies");
    const rejectButton = document.getElementById("reject-cookies");

    acceptButton.addEventListener("click", closeModal);
    rejectButton.addEventListener("click", closeModal);

    // Mostrar el modal automáticamente cuando la página se carga
    openModal();

    // Al cargar la página, desplazarse al principio
    window.scrollTo(0, 0);
});