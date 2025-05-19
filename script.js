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



document.addEventListener("DOMContentLoaded", function () {
    const aceptarBtn = document.getElementById("btn-aceptar");
    const cookiesPopup = document.getElementById("cookies-popup");
  
    cookiesPopup.style.display = "flex"; // Siempre mostrarlo
  
    if (aceptarBtn) {
      aceptarBtn.addEventListener("click", function () {
        cookiesPopup.style.display = "none";
        // No guardar nada en localStorage para que vuelva a aparecer
      });
    }
  });
  

  
 
  
  

document.addEventListener("DOMContentLoaded", function () {
    const promos = document.querySelectorAll(".promo");
    const selectTema = document.getElementById("tema");
  
    promos.forEach(promo => {
      promo.addEventListener("click", () => {
        const texto = promo.querySelector("h3")?.textContent.toLowerCase();
  
        if (texto.includes("20")) {
          selectTema.value = "20-descuento";
        } else if (texto.includes("2x1")) {
          selectTema.value = "2x1";
        } else if (texto.includes("consulta")) {
          selectTema.value = "consulta";
        }
        // Lleva automáticamente al formulario
        document.getElementById("contacto").scrollIntoView({ behavior: "smooth" });
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-consulta");
    const mensaje = document.getElementById("mensaje-exito");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const tema = document.getElementById("tema").value;
        const descripcion = document.getElementById("descripcion").value.trim();
        const metodo = document.getElementById("metodo-pago").value; // <- este es el nuevo campo correcto
  
        if (nombre && email && tema && descripcion && metodo) {
          mensaje.style.display = "block";
          mensaje.style.color = "green";
          mensaje.textContent = "¡Tu consulta fue enviada correctamente!";
          form.reset();
  
          setTimeout(() => {
            mensaje.style.display = "none";
          }, 4000);
        } else {
          mensaje.style.display = "block";
          mensaje.style.color = "red";
          mensaje.textContent = "Por favor completa todos los campos obligatorios.";
        }
      });
    }
  });
  
