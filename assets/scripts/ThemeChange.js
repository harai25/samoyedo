const themes = document.querySelectorAll('.main-theme')

document.addEventListener('click', () => {
    themes.forEach((e) => {
        e.classList.toggle('visible-theme')

        e.classList.toggle('hidden-theme')
    })
})