document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Year Update in Footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Theme Toggling (Dark/Light Mode)
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to apply theme
    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            themeToggle.querySelector('i').className = 'fas fa-moon'; // Show moon icon for light mode
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeToggle.querySelector('i').className = 'fas fa-sun'; // Show sun icon for dark mode
        }
        localStorage.setItem('theme', theme);
    };

    // Initialize theme from local storage or default to dark
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || 'dark';
    applyTheme(initialTheme);

    // Event listener for button click
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
            applyTheme(currentTheme);
        });
    }

    // 3. Simple Project Card Animation (Optional visual polish)
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});
