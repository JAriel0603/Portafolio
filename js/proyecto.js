document.addEventListener('DOMContentLoaded', function() {
    const filtro = document.getElementById('filtro-categoria');
    if (filtro) {
        filtro.addEventListener('change', function() {
            const categoria = this.value;
            const proyectos = document.querySelectorAll('.proyecto');
            proyectos.forEach(proyecto => {
                if (categoria === 'todos' || proyecto.dataset.categoria === categoria) {
                    proyecto.style.display = 'block';
                } else {
                    proyecto.style.display = 'none';
                }
            });
        });
    }
});
