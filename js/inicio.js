// scripts/inicio.js
// Archivo JavaScript específico para la página de inicio
document.addEventListener('DOMContentLoaded', function() {
    // Función para desplazamiento suave al hacer clic en los enlaces de navegación
    const enlaces = document.querySelectorAll('nav ul li a');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const destino = document.querySelector(this.getAttribute('href'));

            window.scrollTo({
                top: destino.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Función para animar el texto de bienvenida
    const textoBienvenida = document.querySelector('#bienvenida h1');
    const opciones = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, opciones);

    observer.observe(textoBienvenida);

    console.log('Página de inicio cargada');
});
