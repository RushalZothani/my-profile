document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const number = document.getElementById('number').value.trim();

        if (name === '' || number === '') {
            alert('Please fill in all fields.');
            return;
        }

        confirmationMessage.style.display = 'block';
        form.reset();
    });
});