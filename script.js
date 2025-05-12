document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Activar o desactivar el menú en móviles
    navToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Efecto fade al cambiar de sección
    const sections = document.querySelectorAll(".section");
    window.addEventListener("scroll", function () {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    });

});

let indiceActual = 0;

function mostrarTestimonio(index) {
    const testimonios = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');

    testimonios.forEach((t, i) => {
        t.classList.remove('activo');
        dots[i].classList.remove('activo');
    });

    testimonios[index].classList.add('activo');
    dots[index].classList.add('activo');
    indiceActual = index;
}

function moverCarrusel(direccion) {
    const testimonios = document.querySelectorAll('.testimonial');
    let nuevoIndice = indiceActual + direccion;

    if (nuevoIndice >= testimonios.length) nuevoIndice = 0;
    if (nuevoIndice < 0) nuevoIndice = testimonios.length - 1;

    mostrarTestimonio(nuevoIndice);
}

function seleccionarTestimonio(index) {
    mostrarTestimonio(index);
}

// Mostrar el primero por defecto
window.addEventListener('load', () => mostrarTestimonio(0));
