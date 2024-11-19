function toggleDetails(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace
    const projectCard = event.target.closest('.project');
    const details = projectCard.querySelector('.project-details');

    if (details.classList.contains('show')) {
        // Contraer el contenido
        details.style.height = `${details.scrollHeight}px`; // Fija la altura actual antes de contraer
        setTimeout(() => {
            details.style.height = '0'; // Transición hacia 0
        }, 10); // Da tiempo a que el navegador registre el cambio de altura

        details.classList.remove('show');
    } else {
        // Expandir el contenido
        details.style.height = '0'; // Resetea la altura antes de animar
        setTimeout(() => {
            details.style.height = `${details.scrollHeight}px`; // Ajusta la altura total para la animación
        }, 10); // Da tiempo a que el navegador registre el cambio de altura

        details.classList.add('show');
    }

    details.addEventListener(
        'transitionend',
        () => {
            if (!details.classList.contains('show')) {
                details.style.height = ''; // Limpia el estilo para mantener el comportamiento dinámico
            }
        },
        { once: true } // Solo una vez por transición
    );
}





document.addEventListener("DOMContentLoaded", function () {
    // Definir el callback que se ejecutará cuando un elemento entre en la vista
    const updateProgressBar = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Obtenemos el ancho objetivo desde el atributo 'data-width'
                const targetWidth = entry.target.getAttribute('data-width');
                
                // Establecemos el valor del ancho usando la variable CSS --target-width
                entry.target.style.setProperty('--target-width', targetWidth);

                // Añadimos la clase 'animate' para activar la animación
                entry.target.classList.add('animate');
                
                // Dejar de observar el elemento después de que se ha activado la animación
                observer.unobserve(entry.target);
            }
        });
    };

    // Crear el IntersectionObserver para observar las barras de progreso
    const observer = new IntersectionObserver(updateProgressBar, {
        threshold: 0.5  // Se activará cuando el 50% del elemento esté visible
    });

    // Observar cada barra de progreso
    const progressBars = document.querySelectorAll('.portcentaje');
    
    // Asignar el atributo 'data-width' con el ancho objetivo para cada barra de progreso
    progressBars.forEach(bar => {
        const width = bar.textContent.replace('%', ''); // Obtener el porcentaje del texto
        bar.setAttribute('data-width', `${width}%`);  // Asignar como data-width
        observer.observe(bar);  // Observar cada barra de progreso
    });
});





// Obtener el botón de contacto y la sección de contacto
const contactBtn = document.getElementById('contact-btn');
const contactoSection = document.getElementById('contacto');

// Agregar un evento de clic al botón
contactBtn.addEventListener('click', () => {
    // Verificar si la sección está oculta
    if (contactoSection.style.display === 'none' || contactoSection.style.display === '') {
        contactoSection.style.display = 'block'; // Mostrar la sección
    } else {
        contactoSection.style.display = 'none'; // Ocultar la sección
    }
});


