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
const img = document.querySelector('#cont-imagen') // caja meme

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
//let cajaMeme = document.querySelector('#cont-imagen')


inputUrl.addEventListener("input", (event)=>{
   let imagenIngresada = event.target.value
   // img.innerHTML = `<img src="${imagenIngresada}">`
   img.style = `background-image: url(${imagenIngresada});`
})

/////////////////// COLOR DE FONDO DE LA IMG Y MODO  /////////////////////

const colorFondoMeme = document.querySelector('#color-fondo')
const codigoColor = document.querySelector('#codigo-color')

const modoFusion = document.querySelector('#opcion-color')

colorFondoMeme.addEventListener('input', (event)=>{
    let valorColor = event.target.value
    console.log(valorColor)
    img.style.backgroundColor = valorColor
    codigoColor.innerHTML = `${valorColor}`
})

// modo de fusion

modoFusion.addEventListener('input', (event)=>{
    let valorModoFusion = event.target.value
    img.style.backgroundBlendMode = valorModoFusion
})




/////////////////// F I L T R O S  /////////////////////

const iBrillo = document.querySelector('#brillo')
const iOpacidad = document.querySelector('#opacidad')
const iContraste = document.querySelector('#contraste')
const iDesenfoque = document.querySelector('#desenfoque')
const iEscalaGrises = document.querySelector('#grises')
const iSepia = document.querySelector('#sepia')
const iHue = document.querySelector('#hue')
const iSaturado = document.querySelector('#saturado')
const iNegativo = document.querySelector('#negativo')



const filtros = () =>{
    img.style.filter = `brightness(${iBrillo.value})
    opacity(${iOpacidad.value})
    contrast(${iContraste.value}%)
    blur(${iDesenfoque.value}px)
    grayscale(${iEscalaGrises.value}%)
    sepia(${iSepia.value}%)
    hue-rotate(${iHue.value}deg)
    saturation(${iSaturado.value}%)
    invert(${iNegativo.value})`

    console.log(iBrillo.value)
}

iBrillo.addEventListener('input', filtros)
iOpacidad .addEventListener('input', filtros)
iContraste.addEventListener('input', filtros)
iDesenfoque.addEventListener('input', filtros)
iEscalaGrises.addEventListener('input', filtros)
iSepia.addEventListener('input', filtros)
iHue.addEventListener('input', filtros)
iSaturado.addEventListener('input', filtros)
iNegativo.addEventListener('input', filtros)

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

