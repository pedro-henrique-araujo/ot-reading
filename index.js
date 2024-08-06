document.addEventListener('DOMContentLoaded', (event) => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        const checked = localStorage.getItem(checkbox.id) === 'true';
        checkbox.checked = checked;

        checkbox.addEventListener('change', (event) => {
            localStorage.setItem(checkbox.id, event.target.checked);
        });
    });
});
