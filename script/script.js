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