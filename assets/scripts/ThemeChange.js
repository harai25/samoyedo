let isDark = true
const mainEl = document.getElementById('main')
const overflowLightEl = document.getElementById('overflow-light')
const overflowDarkEl = document.getElementById('overflow-dark')

function setMainStyle(el, offset) {
    const calc = offset / 2
    el.style.width = window.innerWidth + window.innerHeight + 'px'
    el.style.height = window.innerWidth + window.innerHeight + 'px'
    el.style.top = -calc + 'px'
    el.style.left = -calc + 'px'

    const mainTheme = el.children[0]
    mainTheme.style.top = calc + 'px'
    mainTheme.style.left = calc + 'px'
}

function setHiddenStyle(el) {
    el.style.width = '10px'
    el.style.height = '10px'
    el.style.top = 'calc(50vh + 50px)'
    el.style.left = '50vw'

    const mainTheme = el.children[0]
    mainTheme.style.top = null
    mainTheme.style.left = null
}

function swapStyles(el1, el2) {
    el1.classList.remove('overflow-hide')
    el1.classList.add('overflow-full')
    el2.classList.remove('overflow-full')
    el2.classList.add('overflow-hide')
}

isDeleteDefault = false

mainEl.addEventListener('click', () => {
    if (!isDeleteDefault) {
        overflowDarkEl.classList.remove('overflow-default')
        isDeleteDefault = true
    }

    isDark = !isDark
    let offset = 0
    if (window.innerWidth > window.innerHeight) {
        offset = window.innerHeight
    } else {
        offset = window.innerWidth 
    }
    if (isDark) {
        setHiddenStyle(overflowLightEl)
        setMainStyle(overflowDarkEl, offset)
        swapStyles(overflowDarkEl, overflowLightEl)
    } else {
        setHiddenStyle(overflowDarkEl)
        setMainStyle(overflowLightEl, offset)
        swapStyles(overflowLightEl, overflowDarkEl)
    }
})