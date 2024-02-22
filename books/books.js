// book.js

document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const packageId = button.getAttribute('data-package-id');
        const packageName = document.querySelector(`#${packageId}-details h3`).textContent;
        document.getElementById('package-name').textContent = packageName;
        document.getElementById(`${packageId}-book`).style.display = 'block';
    });
});
