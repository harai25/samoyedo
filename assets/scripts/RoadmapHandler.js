
function roadmapHandler() {
    if (window.scrollY > roadmapPosition.top && window.scrollY + window.innerHeight < roadmapPosition.bottom) {
        console.log('effect')
    }
}