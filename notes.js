document.addEventListener('DOMContentLoaded', (event) => {
    const textarea = document.querySelector('textarea');
 
    const notesText = localStorage.getItem('notes');
    textarea.value = notesText;
    textarea.addEventListener('keyup', () => {
        localStorage.setItem('notes', textarea.value);
    });
});
