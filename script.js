// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add edit buttons next to section headers
document.querySelectorAll('.wiki-content h2').forEach(heading => {
    const editButton = document.createElement('a');
    editButton.href = '#';
    editButton.className = 'text-sm text-blue-600 ml-2 hover:underline';
    editButton.textContent = '[edit]';
    heading.appendChild(editButton);
}); 