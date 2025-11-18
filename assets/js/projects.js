document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            
            // Update active state of buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter the project cards
            projectCards.forEach(card => {
                const discipline = card.getAttribute('data-discipline');
                
                if (filterValue === 'all' || discipline === filterValue) {
                    // Show the card
                    card.style.display = 'block';
                    // Optional: Add a fade-in effect for aesthetics
                    card.style.opacity = '0';
                    setTimeout(() => { card.style.opacity = '1'; }, 50);
                } else {
                    // Hide the card
                    card.style.display = 'none';
                }
            });
        });
    });

    // You can remove this function if you are combining scripts
    // It's included here for completeness of the projects page
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
