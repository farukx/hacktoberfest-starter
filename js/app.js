const $confettiButton = document.querySelector('#confetti-button')
const $hacktoberfestTitle = document.querySelector('#hacktoberfest-title');
const $easterEggImg = document.querySelector('#easter-egg-img')
let wannaParty = false

$confettiButton.addEventListener('click', () => {
    wannaParty = !wannaParty
    if (wannaParty) {
        startParty()
    } else {
        stopParty()
    }
})

$easterEggImg.addEventListener('click', () => {
    console.log('Happy Hacking! 🎉');
})

const startParty = () => {
    confetti.start()
    $confettiButton.innerHTML = 'Detén el confetti 😅'
    $hacktoberfestTitle.innerHTML = '¡Feliz Hacktoberfest!'
}

const stopParty = () => {
    confetti.stop()
    $confettiButton.innerHTML = '¡Activa la fiesta! 🎉'
    $hacktoberfestTitle.innerHTML = 'Hacktoberfest Starter'
}
