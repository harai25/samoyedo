let isBarAppear = false
const wolf1 = document.getElementById('wolf1')
const wolf2 = document.getElementById('wolf2')

function barHandler() {
    if (!isBarAppear) {
        if (barPosition.top - window.innerHeight + barPosition.height / 2 < scrollY) {
            isBarAppear = true
            wolf1.classList.remove('hide')
            wolf2.classList.remove('hide')
        }
    } else {
        if (barPosition.top - window.innerHeight > scrollY) {
            isBarAppear = false
            wolf1.classList.add('hide')
            wolf2.classList.add('hide')
        }
    }
}