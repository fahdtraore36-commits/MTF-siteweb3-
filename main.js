console.log('Hello World!');
const observer = new IntersectionObserver((entries) => {
    // On filtre pour ne garder que les éléments qui entrent dans l'écran
    const visibleEntries = entries.filter(entry => entry.isIntersecting);

    visibleEntries.forEach((entry, index) => {
        // On ajoute un délai de 200ms (0.2s) multiplié par l'index de l'élément
        // Le 1er aura 0ms, le 2ème 200ms, le 3ème 400ms, etc.
        entry.target.style.transitionDelay = `${index * 0.2}s`;
        
        entry.target.classList.add('active');
    });
}, {
    threshold: 0.1
});

const elements = document.querySelectorAll('.service-card');
elements.forEach((el) => observer.observe(el));
const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
    header.addEventListener("click", () => {
        const item = header.parentElement;
        item.classList.toggle("active");
    });
});