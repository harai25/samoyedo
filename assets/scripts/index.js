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
function getVerticalPositionById(id) {
    const el = document.getElementById(id)
    return {
        top: el.offsetTop,
        bottom: el.offsetTop + el.scrollHeight,
        height: el.scrollHeight,
    }
}
function calcElemsPositions() {
    mainPosition = getVerticalPositionById('main')
    barPosition = getVerticalPositionById('bar')
}
calcElemsPositions()
window.addEventListener('resize', calcElemsPositions)

const cloud1El = document.getElementById('cloud-1')
const cloud2El = document.getElementById('cloud-2')
const mainTitleEl = document.getElementById('main-title')

function mainHandle() {
    // cloud1El.style.transform = `translateY(${-window.scrollY/9}px) scale(${1+window.scrollY/mainPosition.height/9})`
    // cloud2El.style.transform = `translateY(${-window.scrollY/12}px) scale(${1+window.scrollY/mainPosition.height/12})`
    mainTitleEl.style.transform = `translateY(${window.scrollY/3.5}px) scale(${1+window.scrollY/mainPosition.height/6})`
}

function scrollHandler(e) {
    const scrollY = window.scrollY

    if (scrollY < mainPosition.bottom - mainPosition.height/4) {
        mainHandle()
    }
}

window.addEventListener('scroll', scrollHandler)

let isDark = true
const mainEl = document.getElementById('main')
const overflowLightEl = document.getElementById('overflow-light')
const overflowDarkEl = document.getElementById('overflow-dark')
mainEl.addEventListener('click', () => {
    if (isDark) {
        overflowDarkEl.classList.remove('overflow-full')
        overflowDarkEl.classList.add('overflow-hide')
        overflowLightEl.classList.remove('overflow-hide')
        overflowLightEl.classList.add('overflow-full')
    } else {
        overflowLightEl.classList.remove('overflow-full')
        overflowLightEl.classList.add('overflow-hide')
        overflowDarkEl.classList.remove('overflow-hide')
        overflowDarkEl.classList.add('overflow-full')
    }
    isDark = !isDark
})