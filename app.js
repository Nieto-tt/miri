document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired");
    var div = document.getElementById("ASHU");
    // Trigger reflow
    div.offsetHeight;
    div.style.opacity = 1;
});
onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
        document.addEventListener("DOMContentLoaded", function() {
            console.log("DOMContentLoaded event fired");
            var div = document.getElementById("ASHU");
            // Trigger reflow
            div.offsetHeight;
            div.style.opacity = 1;
        }); 
    }, 1000);
    };


    document.addEventListener("DOMContentLoaded", function() {
        var notaMusical = document.getElementById("nota-musical");
        
        // FunciÃ³n para animar la nota
        function animateNota() {
            // Generar posiciones aleatorias dentro del ancho y alto de la ventana
            var windowHeight = window.innerHeight;
            var windowWidth = window.innerWidth;
            var topPosition = Math.floor(Math.random() * (windowHeight - 100)); // Restamos 100 para evitar que la nota se salga del borde inferior
            var leftPosition = Math.floor(Math.random() * (windowWidth - 100)); // Restamos 100 para evitar que la nota se salga del borde derecho
            
            // Establecer las nuevas posiciones
            notaMusical.style.top = topPosition + "px";
            notaMusical.style.left = leftPosition + "px";
            
            // Hacer visible la nota
            notaMusical.style.opacity = 1;
            
            // Esperar un tiempo aleatorio antes de ocultar la nota
            var randomDelay = Math.floor(Math.random() * 2000) + 1000; // Delay aleatorio entre 1 y 3 segundos
            setTimeout(function() {
                // Ocultar la nota
                notaMusical.style.opacity = 0;
                
                // Llamar a la funciÃ³n de animaciÃ³n nuevamente despuÃ©s de un tiempo aleatorio
                setTimeout(animateNota, randomDelay);
            }, randomDelay);
        }
        
        // Iniciar la animaciÃ³n
        setTimeout(animateNota, 2000);
    });