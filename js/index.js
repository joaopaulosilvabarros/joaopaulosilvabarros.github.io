let header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 200) {
            header.style.background = '#0c0c0c'

        } else {
            header.style.background = 'transparent'
        }
    })