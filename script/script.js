// Navegador

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu_icon");
    const navList = document.getElementById("nav_list");
    const lavander = document.getElementById("lavender_branca");
    const nav = document.getElementById("nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            menuIcon.classList.remove("hidden");
            lavander.classList.add("hidden")
            navList.classList.add("hidden");
            nav.classList.add("center")
        } else {
            menuIcon.classList.add("hidden")
            lavander.classList.remove("hidden");
            navList.classList.remove("hidden");   
        }

    });

    menuIcon.addEventListener("click", () => {
        navList.classList.toggle("hidden");
        navList.style.top = `${window.scrollY}px`;
        menuIcon.classList.toggle("active");

    });

    document.addEventListener("click", (event) => {
        if (!menuIcon.contains(event.target) && !navbar.contains(event.target)) {
            navList.classList.add("hidden");
            menuIcon.classList.add("active");
        }
    });
});

// Contador

const elementoDias = document.querySelector("[data-dias]");
const elementoHoras = document.querySelector("[data-horas]");
const elementoMinutos = document.querySelector("[data-minutos]");
const elementoSegundos = document.querySelector("[data-segundos]");

const render = (dias, horas, minutos, segundos) => {
    elementoDias.innerHTML = String(dias).padStart("2",0);
    elementoHoras.innerHTML = String(horas).padStart("2",0);
    elementoMinutos.innerHTML = String(minutos).padStart("2",0);
    elementoSegundos.innerHTML = String(segundos).padStart("2",0);
};

const countdown = () => {
    const now = new Date();
    const data = new Date(2025, 4, 17, 15, 0, 0, 0);

    const tempoContador = data - now;

    if(tempoContador < 0){
        render(0, 0, 0, 0);
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(tempoContador / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoContador % (1000 * 60 * 60 * 24)) / (1000  * 60* 60));
    const minutos = Math.floor((tempoContador % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoContador % (1000 * 60)) / 1000)

    render(dias, horas, minutos, segundos);

}

const intervalo = setInterval(countdown, 1000);
countdown();