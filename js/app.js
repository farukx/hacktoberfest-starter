const $confettiButton = document.querySelector('#confetti-button')
const $hacktoberfestTitle = document.querySelector('#hacktoberfest-title')
const headerTitle = $hacktoberfestTitle.innerHTML
let wannaParty = false

$confettiButton.addEventListener('click', () => {
    wannaParty = !wannaParty
    if (wannaParty) {
        startParty()
    } else {
        stopParty()
    }
})

const startParty = () => {
    confetti.start()
    $confettiButton.innerHTML = 'Detén el confetti 😅'
    $hacktoberfestTitle.innerHTML = '¡Feliz Hacktoberfest!'
}

const stopParty = () => {
    confetti.stop()
    $confettiButton.innerHTML = '¡Activa la fiesta! 🎉'
    $hacktoberfestTitle.innerHTML = headerTitle
}
