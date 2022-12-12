mainPosition = {
    top: 0,
    bottom: 0,
    height: 0,
}
barPosition = {
    top: 0,
    bottom: 0,
    height: 0,
}
roadmapPosition = {
    top: 0,
    bottom: 0,
    height: 0,
}

function resizeHandler() {
    mainPosition = getVerticalPositionById('main')
    barPosition = getVerticalPositionById('bar')
    roadmapPosition = getVerticalPositionById('roadmap')
}

function getVerticalPositionById(id) {
    const el = document.getElementById(id)
    return {
        top: el.offsetTop,
        bottom: el.offsetTop + el.scrollHeight,
        height: el.scrollHeight,
    }
}

resizeHandler()
window.addEventListener('resize', resizeHandler)