const dark = document.getElementById('dark-theme')
const light = document.getElementById('light-theme')

let isDark = true

document.addEventListener('click', () => {
    console.log(123)

    if(isDark) {
        light.classList.add('opening-theme')
        light.classList.remove('hidden-theme')
        setTimeout(() => {
            console.log('animationend light')
            light.classList.remove('opening-theme')
            light.classList.add('visible-theme')
            dark.classList.remove('visible-theme')
            dark.classList.add('hidden-theme')
        }, 2000)
        // light.addEventListener('animationend ', () => {
            
        // }, {once: true})
    } else {
        dark.classList.remove('hidden-theme')
        dark.classList.add('opening-theme')
        setTimeout(() => {
            console.log('animationend dark')
            dark.classList.remove('opening-theme')
            dark.classList.add('visible-theme')
            light.classList.remove('visible-theme')
            light.classList.add('hidden-theme')
        }, 2000)
        // dark.addEventListener('animationend', () => {
        //     console.log('animationend dark')
        //     dark.classList.remove('opening-theme')
        //     dark.classList.add('visible-theme')
        //     light.classList.remove('visible-theme')
        //     light.classList.add('hidden-theme')
        // }, {once: true})
    }
    isDark = !isDark

    // themes.forEach((e) => {
    //     e.classList.toggle('opening-theme')
    //     // e.classList.toggle('hidden-theme')

    //     e.addEventListener('animationed', () => {
    //         e.classList.toggle('hidden-theme')

    //     }, {once: true})
    // })
})