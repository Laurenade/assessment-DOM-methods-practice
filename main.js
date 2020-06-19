const parentElementBody = document.querySelector ('.body')
const parentElementMain = document.querySelector ('.main')

const button = document.createElement('button')
const space = document.createElement('br')
const image = document.createElement('img')
const website = document.createElement('a')

document.body.appendChild(button)
document.body.appendChild(space)
parentElementMain.append(image)
parentElementMain.append(website)

image.className = 'image'
website.className = 'link'

image.src = 'https://i.etsystatic.com/isla/266666/41107202/isla_500x500.41107202_23bdxcgn.jpg?version=0'
website.href ='https://www.etsy.com/shop/LaurenAdeOriginals'

button.append('Remove Main')
website.append('Etsy.com')

button.addEventListener('click', function() {
    parentElementMain.remove()
})


// Stretch Goals:

const inputRemove = document.createElement('input')
const buttonRemove = document.createElement('button')

document.body.appendChild(inputRemove)
document.body.appendChild(buttonRemove)

buttonRemove.append('Remove Element')

buttonRemove.addEventListener('click', function() {
    let valueEnteredRemove = document.body.querySelector(inputRemove.value)
    valueEnteredRemove.remove()
})

const space1 = document.createElement('br')
const inputAdd = document.createElement('input')
const buttonAdd = document.createElement('button')

document.body.appendChild(space1)
document.body.appendChild(inputAdd)
document.body.appendChild(buttonAdd)

buttonAdd.append('Add Div')

buttonAdd.addEventListener('click', function() {
    let createDiv = document.createElement('div')
        document.body.appendChild(createDiv)
        createDiv.append(inputAdd.value)
})