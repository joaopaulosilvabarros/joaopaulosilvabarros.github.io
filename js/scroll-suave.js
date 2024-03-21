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