
const botonMostrarProyectos = document.querySelector('.btn-mostrar-proyectos');
const proyectosInactivos = document.querySelectorAll('.proyecto:not(.activo)');

botonMostrarProyectos.addEventListener('click', () => {
    proyectosInactivos.forEach(proyectoInactivo => {
        proyectoInactivo.classList.add('activo');
    });

    botonMostrarProyectos.classList.add('remover')

})

