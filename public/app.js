const inp = document.querySelector('#colour')
const form = document.querySelector('form')
const div = document.querySelector('#div')

const fillColour = (e) => {
    e.preventDefault()
    // console.log(`#${inp.value}`)
    div.style.backgroundColor = `${inp.value}`
}


form.addEventListener('submit', fillColour)

