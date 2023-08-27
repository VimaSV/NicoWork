window.onscroll = function() { stickyMenu() };

var navbar = document.querySelector('.navbar');
var sticky = navbar.offsetTop;

function stickyMenu() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}
const preguntas = [
    {
        pregunta: "¿En qué año nació Ana Frank?",
        opciones: ["1929", "1933", "1942"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿En qué país se desarrolla la historia de Ana Frank?",
        opciones: ["Alemania", "Holanda", "Francia"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cómo se llamaba el lugar donde Ana Frank y su familia se escondieron?",
        opciones: ["La Mansión", "La Guarida", "El Anexo"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Qué famoso puente de París mencionó Ana Frank en su diario?",
        opciones: ["Puente de Londres", "Puente de Brooklyn", "Puente de las Artes"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Qué escribió Ana Frank en su diario sobre la gente?",
        opciones: ["Creo que las personas son inherentemente malas", "A pesar de todo, creo que la gente es realmente buena en el fondo", "La gente no importa"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Qué enfermedad causó la muerte de Ana Frank?",
        opciones: ["Cáncer", "Tuberculosis", "Tifus"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Quién fue el único miembro de la familia Frank que sobrevivió a la guerra?",
        opciones: ["Ana", "Margot", "Otto"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Qué hizo Miep Gies por la familia Frank?",
        opciones: ["Les delató", "Les ayudó proporcionándoles comida y suministros", "Les robó"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Qué edad tenía Ana Frank cuando murió?",
        opciones: ["14 años", "16 años", "19 años"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Qué organismo de las Naciones Unidas se estableció en 1950 para ayudar a los refugiados?",
        opciones: ["UNESCO", "UNICEF", "ACNUR"],
        respuestaCorrecta: 2
    }
    // Agrega más preguntas aquí
];

let preguntaActual = 0;

function cargarPregunta(pregunta) {
    const preguntaDiv = document.getElementById("pregunta");
    const opcionesDiv = document.getElementById("opciones");

    preguntaDiv.textContent = pregunta.pregunta;

    opcionesDiv.innerHTML = "";
    pregunta.opciones.forEach((opcion, index) => {
        const button = document.createElement("button");
        button.textContent = opcion;
        button.onclick = () => verificarRespuesta(index, pregunta.respuestaCorrecta);
        opcionesDiv.appendChild(button);
    });
}

function verificarRespuesta(respuestaSeleccionada, respuestaCorrecta) {
    if (respuestaSeleccionada === respuestaCorrecta) {
        alert("¡Respuesta correcta!");
    } else {
        alert("Respuesta incorrecta. ¡Inténtalo de nuevo!");
    }
}

function cargarSiguientePregunta() {
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
        cargarPregunta(preguntas[preguntaActual]);
    } else {
        alert("¡Fin del juego!");
    }
}

cargarPregunta(preguntas[preguntaActual]);
