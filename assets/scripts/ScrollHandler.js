// const cloud1El = document.getElementById('cloud-1')
// const cloud2El = document.getElementById('cloud-2')
const mainTitleEl = document.getElementById('main-title')
const mainTitle2El = document.getElementById('main-title2')

function mainHandle() {
    const transformTitle = `translateY(${window.scrollY/3.5}px) scale(${1+window.scrollY/mainPosition.height/6})`
    // cloud1El.style.transform = `translateY(${-window.scrollY/9}px) scale(${1+window.scrollY/mainPosition.height/9})`
    // cloud2El.style.transform = `translateY(${-window.scrollY/12}px) scale(${1+window.scrollY/mainPosition.height/12})`
    mainTitleEl.style.transform = transformTitle
    mainTitle2El.style.transform = transformTitle
}

function scrollHandler(e) {
    const scrollY = window.scrollY

    if (scrollY < mainPosition.bottom - mainPosition.height/4) {
        mainHandle()
    }
}

window.addEventListener('scroll', scrollHandler)