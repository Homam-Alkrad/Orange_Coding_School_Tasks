// Wait for DOM to be fully loaded before executing script
document.addEventListener('DOMContentLoaded', function () {

    // Function to reveal elements when they scroll into view
    function revealOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');  // Add 'visible' class when the section is in view
                observer.unobserve(entry.target);  // Stop observing once the section is revealed
            }
        });
    }

    // Create an IntersectionObserver for the sections
    const observer = new IntersectionObserver(revealOnScroll, {
        threshold: 0.1  // Trigger when 10% of the section is visible
    });

    // Select all sections to be observed
    const sections = document.querySelectorAll('.reveal-on-bottom');

    if (sections.length) {
        // Observe each section if it exists
        sections.forEach(section => {
            observer.observe(section);
        });
    } else {
        console.warn('No sections found to observe.');
    }
});