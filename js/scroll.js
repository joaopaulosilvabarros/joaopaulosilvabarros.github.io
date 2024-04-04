// scroll animation
const scrollAnima = document.querySelector('[data-anima="scroll"]');
const metadeWindow = window.innerHeight * 3;

function animarScroll() {
    const topoItem = scrollAnima.getBoundingClientRect().top
    const itemVisivel = topoItem - metadeWindow < 0;

    if(itemVisivel) {
        scrollAnima.classList.add('show-button')
    } else {
        scrollAnima.classList.remove('show-button')
    }
}
window.addEventListener('scroll', animarScroll);

// scroll suave
const linkInterno = document.querySelector('[data-scroll="suave"] a[herf="#"]')

function scrollTop(event) {
    event.preventFault()

    const href = event.currentTarget.getAttribute('href')

    const topo = document.querySelector(href)

    topo.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
}


linkInterno.addEventListener('click', scrollTop)