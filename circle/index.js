const themes = document.querySelectorAll('.theme')

document.addEventListener('click', () => {
    themes.forEach((e) => {
        e.classList.toggle('visible')

            e.classList.toggle('hidden')

    })
})