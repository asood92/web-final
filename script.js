//  All the output/display variables
const display = document.querySelector('#display')
const showSize = document.querySelector("#show-size")
const showFont = document.querySelector('#show-font')
const showColor = document.querySelector("#show-color")
const showBackground = document.querySelector("#show-bg-color")
// All the user input variables
const inputSize = document.querySelector("#input-size")
const inputFont = document.querySelector('#select-font')
const inputColor = document.querySelector('#input-color')
const inputBackground = document.querySelector("#input-bg-color")
const inputText = document.querySelector("#enter-text")


function handleSize() {
    // get the font size:
    const fontSize = inputSize.value + 'px'
    // Set the style
    display.style.fontSize = fontSize
    // Show the size
    showSize.innerHTML = fontSize
}

function handleFont() {
    // get the font name
    const fontName = inputFont.value
    // set the font
    display.style.fontFamily = fontName;
    // output the font
    showFont.innerHTML = fontName;
}

function handleColor() {
    // get the color name
    const colorName = inputColor.value
    // set the color
    display.style.color = colorName;
    // output the color in the font
    showColor.innerHTML = colorName;
}

function handleBackground() {
    // get the background color name
    const backgroundColor = inputBackground.value
    // set the background color
    display.style.backgroundColor = backgroundColor;
    // output the background color
    showBackground.innerHTML = backgroundColor;
}

function handleText() {
    // store text input
    const userText = inputText.value
    // output the text
    display.innerHTML = userText
}

// listener calls, auto updates output as the user changes any of the inputs
inputSize.addEventListener('input', handleSize)
inputFont.addEventListener('input', handleFont)
inputColor.addEventListener('input', handleColor)
inputBackground.addEventListener('input', handleBackground)
inputText.addEventListener('input', handleText)