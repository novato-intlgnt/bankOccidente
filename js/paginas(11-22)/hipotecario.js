
document.querySelectorAll('.question-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.question-item');
        item.classList.toggle('active');
    });
});

