
function scrollToSection(event){
    event.preventDefault();

    const targetId = event.target.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if(targetSection){
        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}

const navbarLinks = document.querySelectorAll("nav a");
navbarLinks.forEach( link => {
    link.addEventListener("click", scrollToSection);
});