/* ==================================================
   IDEABAAZ v4 Interactions
   ================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ===================== GLOBAL GLOW CURSOR TRACKING =====================
    const root = document.documentElement;

    document.addEventListener('mousemove', (e) => {
        // Update CSS variables for the radial gradients to track the cursor
        root.style.setProperty('--mouse-x', `${e.clientX}px`);
        root.style.setProperty('--mouse-y', `${e.clientY}px`);
    });

    // ===================== NAVBAR SCROLL =====================
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===================== MOBILE MENU =====================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // ===================== TITANS INTERACTION MOUSE SYNC =====================
    // To make the Titan pillar hover effect highly interactive
    const titanBox = document.getElementById('titan-interactive');
    const cursorLight = document.querySelector('.cursor-light');

    if (titanBox && cursorLight) {
        titanBox.addEventListener('mousemove', (e) => {
            const rect = titanBox.getBoundingClientRect();
            const x = e.clientX - rect.left - 50; // offset center
            const y = e.clientY - rect.top - 50;
            cursorLight.style.transform = `translate(${x}px, ${y}px)`;
        });
    }

});
