const select = document.querySelector('select')
const input = document.querySelector('input')
const speak = document.querySelector('button')

const message = new SpeechSynthesisUtterance()

const setTextMessage = (text) => {
    message.text = text
}

const speakText = () => {
    speechSynthesis.speak(message)
}

const setVoice = (e) => {
    message.voice = voices.find(voice => voice.name === e.target.value)
}

speak.addEventListener('click', () => {
    setTextMessage(input.value)
    speakText()
})

let voices = []
const getVoices = () => {
    voices = speechSynthesis.getVoices()
    voices.forEach(voice => {
        const option = document.createElement('option')
        option.value = voice.name
        option.innerText = `${voice.name} ${voice.lang}`
        select.appendChild(option)
    })
}

select.addEventListener('change', setVoice)

speechSynthesis.addEventListener('voiceschanged',getVoices)

getVoices()