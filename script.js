document.getElementById("mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

window.addEventListener("load", () => {
  gsap.from(".hero-text h2", { y: -50, opacity: 0, duration: 1 });
  gsap.from(".hero-text p", { y: -30, opacity: 0, duration: 1, delay: 0.3 });
  gsap.from(".cta-button", { scale: 0, opacity: 0, duration: 0.8, delay: 0.6 });
});
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX - 10}px`;
    cursor.style.top = `${e.pageY - 10}px`;
});

const clickableElements = document.querySelectorAll('a, button, .cta-button');
clickableElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-enlarge');
    });
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-enlarge');
    });
});
// Hide the loader once the page is fully loaded
window.addEventListener('load', () => {
  document.querySelector('.loader').style.display = 'none';
});

