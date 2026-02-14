// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    // Posición horizontal aleatoria en toda la pantalla
    heart.style.left = Math.random() * 100 + "vw";

    // Tamaño aleatorio
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";

    // Color aleatorio en RGB
    const colors = [
        "rgb(255, 99, 71)",   // rojo tomate
        "rgb(255, 105, 180)", // rosa fuerte
        "rgb(186, 85, 211)",  // violeta claro
        "rgb(255, 215, 0)",   // dorado
        "rgb(30, 144, 255)"   // azul brillante
        
    ];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    document.getElementById("hearts-container").appendChild(heart);

    // Eliminar corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Crear corazones cada cierto tiempo
setInterval(createHeart, 400);

