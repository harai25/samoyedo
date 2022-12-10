const headerEl = document.getElementById('header')

const sSky = document.querySelectorAll('.s-sky')
const sMiddle = document.querySelectorAll('.s-middle')
const sWater = document.querySelectorAll('.s-water')
const sSun = document.querySelectorAll('.s-sun')
const sMirror = document.querySelectorAll('.s-mirror')

function mainHandle(process) {
    const skyTransform = `translateY(${-process * 6.8580542}%)`
    const middleTransform = `translateY(${-process * 45.0617284}%)`
    const waterTransform = `translateY(${-process * 32.6210826}%)`
    const sunTransform = `translateY(${-process * 48.8188976}%) translateX(-50%)`
    const mirrorTransform = `translateY(${-process * 252.8735632}%) translateX(-50%) scaleY(${1 - process * 0.586206897}) scaleX(${1 - -process * 0.0857142857})`

    sSky.forEach(e => {
        e.style.transform = skyTransform
    })
    sMiddle.forEach(e => {
        e.style.transform = middleTransform
    })
    sWater.forEach(e => {
        e.style.transform = waterTransform
    })
    sSun.forEach(e => {
        e.style.transform = sunTransform
    })
    sMirror.forEach(e => {
        e.style.transform = mirrorTransform
    })

    console.log('handler')

}

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
}

window.addEventListener('scroll', scrollHandler)