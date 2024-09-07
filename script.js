document.getElementById('theme-toggle').addEventListener('click', () => {
    const body = document.body;
    const theme = body.getAttribute('data-theme');
    
    if (theme === 'dark') {
        body.removeAttribute('data-theme');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
});
