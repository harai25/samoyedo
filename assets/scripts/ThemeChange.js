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