// Smooth Scroll for navigation with active class for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Adding 'active' class to the current section in the nav bar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Scroll-triggered parallax effect on the hero section background
window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset;
  const heroSection = document.querySelector('.hero');
  heroSection.style.backgroundPositionY = `${scrollTop * 0.5}px`; // Parallax effect
});

// Animation when elements come into view with delay for each section
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.style.transitionDelay = entry.target.dataset.delay || '0s'; // Apply delay
    } else {
      entry.target.classList.remove('visible');
    }
  });
});

// Observing each section
sections.forEach(section => {
  observer.observe(section);
});
