// Example of assets/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Year Update
    document.getElementById('year').textContent = new Date().getFullYear();

    // 2. Theme Toggling (Advanced UX Feature)
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            document.body.classList.toggle('light-mode');
            // Store preference in local storage for persistence
            const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', currentTheme);
        });
        
        // Apply saved theme on load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
    }

    // 3. Simple Scroll Spy/Active Navigation Link (Advanced Polish)
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section-padding');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100) {
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
});
