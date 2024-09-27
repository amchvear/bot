const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop - viewportHeight / 2 && scrollPosition < sectionTop + sectionHeight - viewportHeight / 2) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
});
