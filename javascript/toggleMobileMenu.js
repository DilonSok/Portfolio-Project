function toggleMobileMenu(){
    const navbarMenu = document.getElementById("mobile-menu-links");
    navbarMenu.style.display = navbarMenu.style.display === "flex" ? "none" : "flex";
}

const navbarButton = document.getElementById("menu-button");
navbarButton.addEventListener("click", toggleMobileMenu);