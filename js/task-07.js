// Напиши скрипт, который реагирует на изменение 
//значения input#font - size - control(событие 
//input) и изменяет инлайн - стиль span#text 
//обновляя свойство font - size.В результате при
//перетаскивании ползунка будет меняться размер 
//текста.

const fontSizeRef = document.querySelector('#font-size-control')
const spanRef = document.querySelector('#text')

fontSizeRef.addEventListener('input', onMoveInput)

function onMoveInput(event) { 
    spanRef.style.fontSize = `${event.currentTarget.value}px `

};