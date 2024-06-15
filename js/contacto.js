document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const nombre = document.getElementById('nombre').value;
            const correo = document.getElementById('correo').value;
            const mensaje = document.getElementById('mensaje').value;
            
            if (nombre === "" || correo === "" || mensaje === "") {
                event.preventDefault();
                alert("Por favor, complete todos los campos.");
            }
        });
    }
});
