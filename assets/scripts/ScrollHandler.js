
function scrollHandler(e) {
    const scrollY = window.scrollY

    if (scrollY > window.innerHeight) {
        headerEl.classList.add('sticky-header')
    } else {
        headerEl.classList.remove('sticky-header')
    }

    
    if (scrollY < mainPosition.bottom - window.innerHeight) {
        mainHandle(1 - (mainPosition.bottom - window.innerHeight - scrollY) / window.innerHeight)
    }

    barHandler()

    roadmapHandler()
}

window.addEventListener('scroll', scrollHandler)