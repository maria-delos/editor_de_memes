///////////   TODO LO DEL HEAD Y BOTONES NAV //////////////
const asideImagen = document.querySelector('.div-imagen')
const asideTexto = document.querySelector('.div-texto')

const btnNavImagen = document.querySelector('#btn-imagen')
const btnNavTexto = document.querySelector('#btn-texto')
const btnModoOscuro = document.querySelector('#btn-modo-oscuro')
const fondoTodo = document.querySelector('#fondo-home')
const encabezado = document.querySelector('.encabezado')
const fondoAside = document.querySelector('aside')
const btnNavTodos = document.querySelectorAll('.btn-nav')
const body = document.querySelector('body')

btnNavImagen.addEventListener('click', ()=>{
    asideImagen.style.display = "block"
    asideTexto.style.display = "none"
})

btnNavTexto.addEventListener('click', ()=>{
    asideImagen.style.display = "none"
    asideTexto.style.display = "block"
})

////////////////////   MODO OSCURO   /////////////////////
btnModoOscuro.addEventListener('click', ()=>{
    body.classList.toggle('dark')
})


////////////////////   IMAGEN MEME  /////////////////////
let inputUrl = document.querySelector('#url')
let cajaMeme = document.querySelector('#cont-imagen')


inputUrl.addEventListener("input", (event)=>{
    let imagenIngresada = event.target.value
    cajaMeme.innerHTML = `<img src="${imagenIngresada}">`
    cajaMeme.style.backgroundSize = 'cover'
})

/////////////////// TOP TEXT  &  BOTTOM TEXT  /////////////////////
let topTextBox = document.querySelector('#top-texto')
let topTextIngresado = document.querySelector('#text-superior')

let bottomText = document.querySelector('#bottom-text')
let bottomTextIngresado = document.querySelector('#text-inferior')

topTextIngresado.addEventListener('input', (e)=>{
    let infoText = e.target.value
    topTextBox.innerHTML = infoText
})

bottomTextIngresado.addEventListener('input',(e)=>{
    let infoText = e.target.value
    bottomText.innerHTML = infoText
})

