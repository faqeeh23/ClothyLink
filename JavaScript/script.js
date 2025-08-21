window.addEventListener('scroll', () => {
    const splash = document.getElementById('splash');
    const main = document.getElementById('main');


    if (!splash.classList.contains('hide')) {
        splash.classList.add('hide');      
        main.style.display = 'block';      
    }
});
