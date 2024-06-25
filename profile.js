document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            alert('You clicked a link!');
        });
    });
});