  window.onload = function() {
            var loading = document.getElementById('loading');
            var content = document.getElementById('content');

            // Oculta el loading después de tres segundos
            setTimeout(function() {
                loading.style.opacity = '0';
                loading.style.backgroundColor = '#000';
                loading.style.pointerEvents = 'none';
                content.style.display = 'block';
                setTimeout(function() {
                    content.style.opacity = '1';
                }, 100);
            }, 3000);
        };

//FUNCION QUE ME APLICA EL ESTILO A LA OPCION SELECCIONADA EN EL MENU Y QUITA LA PREVIAMENTE SELECCIONADA
function seleccionar(link){
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
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className === ""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}


//DETECTO EL SCROLLING PARA ANIMAR
window.onscroll = function(){
    efectoHabilidades()
};

//funcion que aplica la animacion de la barra de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}

var colors = ["#B9F87D", "#919292", "#8882FC", "#fff"]; // Lista de colores predefinidos
var colorIndex = 0;

function changeTextColor() {
    var text = document.getElementById("text");
    text.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; // Avanza al siguiente color en la lista
}

setInterval(changeTextColor, 1000);













