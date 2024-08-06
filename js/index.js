document.addEventListener('DOMContentLoaded', () => {
    const entradaTarea = document.getElementById('entrada-nueva-tarea');
    const botonAgregarTarea = document.getElementById('boton-agregar-tarea');
    const listaTareas = document.getElementById('lista-tareas');

    botonAgregarTarea.addEventListener('click', agregarTarea);

    function agregarTarea() {
        const textoTarea = entradaTarea.value.trim();
        if (textoTarea) {
            const li = crearElementoTarea(textoTarea);
            listaTareas.appendChild(li);
            entradaTarea.value = '';
        }
    }

    function crearElementoTarea(texto) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = texto;
        li.appendChild(span);

        const botonCompletar = crearBoton('Completar', () => {
            li.classList.toggle('completada');
        });

        const botonEliminar = crearBoton('Eliminar', () => {
            li.remove();
        });

        li.appendChild(botonCompletar);
        li.appendChild(botonEliminar);
        return li;
    }

    function crearBoton(texto, accion) {
        const boton = document.createElement('button');
        boton.textContent = texto;
        boton.addEventListener('click', accion);
        return boton;
    }
});
