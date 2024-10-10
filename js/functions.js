const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

const words= [
    "ohjelmointi",
    "javascript",
    "database",
    "mysql",
    "html",
    "react",
    "nodejs",
    "linux",
    "windows",
    "github",
    "visualstudio",
    "tietokone",
    "monitori",
    "testaaja"
]

let randomizedWord = ''
let maskedWord = ''
let guesses = 0

const newGame = () => {
    const random  =  Math.floor(Math.random() * 10) + 1
    randomizedWord = words[random]
    maskedWord = "*".repeat(randomizedWord.length)
    console.log(randomizedWord)
    output.innerHTML = maskedWord
    guesses = 0
    span.innerHTML = guesses
}

const replaceFoundChars = (guess) => {
    for (let i = 0; i < randomizedWord.length; i++) {
        const char = randomizedWord.substring(i, i + 1)

        if (char === guess) {
            let newstring =maskedWord.split('')
            newstring.splice(i, 1, guess)
            newstring = newstring.join('')
            maskedWord = newstring
        }
    }
    output.innerHTML = maskedWord
}

newGame()

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()

        const guess = input.value
        guesses ++
        span.innerHTML = guesses

        if (guess.toLowerCase() === randomizedWord.toLowerCase()) {
            win()
        } else if (guess.length === 1) {
            replaceFoundChars(guess)
            if (maskedWord.toLocaleLowerCase() === randomizedWord.toLocaleLowerCase()) {
                win()
            }
        } else {
            alert('Arvasit väärin!')
        }

        input.value = ''
    }
})

const win = () => {
    alert(`Olet arvannut oikein, sana on ${randomizedWord} !`)
    newGame()
}