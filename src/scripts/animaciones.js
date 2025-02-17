/*ANIMACION DE ICONOS*/ 
window.addEventListener("load", () => {
    document.querySelectorAll(".icono").forEach((icono, index) => {
        setTimeout(() => {
            icono.classList.add("activo");
        }, index * 200);
    });
});


/*DESCARGAR CV*/

function descargarPDF() {
    // Reemplaza 'archivo.pdf' con la ruta real de tu archivo
    const enlace = document.createElement("a");
    enlace.href = "/public/CV_Dario Rodriguez Quispe.pdf";
    enlace.download = "/public/CV_Dario Rodriguez Quispe.pdf";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}
document.getElementById("descargar-cv").addEventListener("click", descargarPDF);

/*PARA ANIMACION DE LAS TARJETAS*/ 

/*titulos*/

document.addEventListener("DOMContentLoaded", () => {
    const casilleros = document.querySelectorAll(".tit1");
    const observer = new IntersectionObserver(entries => {
        let delay = 0;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, delay);
                delay += 300; // Retraso entre casilleros
            }
        });
    }, { threshold: 0.5 });

    casilleros.forEach(casillero => observer.observe(casillero));
});

/*certificados*/

document.addEventListener("DOMContentLoaded", () => {
    const casilleros = document.querySelectorAll(".cert1");
    const observer = new IntersectionObserver(entries => {
        let delay = 0;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, delay);
                delay += 300; // Retraso entre casilleros
            }
        });
    }, { threshold: 0.5 });

    casilleros.forEach(casillero => observer.observe(casillero));
});

/*Skills*/
document.addEventListener("DOMContentLoaded", () => {
    const casilleros = document.querySelectorAll(".skill1");
    const observer = new IntersectionObserver(entries => {
        let delay = 0;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, delay);
                delay += 300; // Retraso entre casilleros
            }
        });
    }, { threshold: 0.5 });

    casilleros.forEach(casillero => observer.observe(casillero));
});

/*SoftSkills*/ 

document.addEventListener("DOMContentLoaded", () => {
    const casilleros = document.querySelectorAll(".sofskill1");
    const observer = new IntersectionObserver(entries => {
        let delay = 0;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, delay);
                delay += 300; // Retraso entre casilleros
            }
        });
    }, { threshold: 0.5 });

    casilleros.forEach(casillero => observer.observe(casillero));
});



document.addEventListener("DOMContentLoaded", function () {
  function toggleMenu() {
    const navLinks = document.querySelector(".nav__links");
    navLinks.classList.toggle("show");
  }

  // Asocia manualmente la función al botón hamburguesa
  const menuButton = document.querySelector(".menu-hamburguesa");
  menuButton.addEventListener("click", toggleMenu);
});

