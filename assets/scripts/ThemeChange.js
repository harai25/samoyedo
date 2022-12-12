const themes = document.querySelectorAll('.main-theme')

const dark = document.getElementById('dark-theme')
const light = document.getElementById('light-theme')

let isDark = true
let timeout = null
let isStop = false

function switchTheme(one, two) {
    one.classList.add('visible-theme')
    one.classList.remove('hidden-theme')
    two.classList.remove('visible-theme')
    isStop = true
    one.addEventListener('transitionend', () => {
        two.classList.add('hidden-theme')
        isStop = false

    }, {once: true})
}

main.addEventListener('click', () => {
    if (isStop) {
        return
    }
    
    if (isDark) {
        switchTheme(light, dark)
    } else {
        switchTheme(dark, light)
    }
    isDark = !isDark
})