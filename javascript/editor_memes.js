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

/////////////////////////////////////////////////////////////////

//                A S I D E   I M A G E N

///////////////////////////////////////////////////////////////

////////////////////   U R L    /////////////////////

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
    //console.log(valorColor)
    img.style.backgroundColor = `${event.target.value}`
    codigoColor.innerHTML = `${valorColor}`
})

///// modo de fusion

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
    saturate(${iSaturado.value}%)
    invert(${iNegativo.value})`
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

/////////////////// REESTABLECER FILTROS  /////////////////////

const btnReestablecerFiltros = document.querySelector('#reestablecer-filtros')

const reestablecerFiltros = (e)=>{
    e.preventDefault()   
    img.style.filter = `brightness(1)
     opacity(1)
     contrast(100%)
     blur(0px)
     grayscale(0%)
     sepia(0%)
     hue-rotate(0)
     saturate(100%)
     invert(0)`
     iBrillo.value = 1
     iOpacidad.value = 1
     iContraste.value = 100
     iDesenfoque.value = 0
     iEscalaGrises.value = 0
     iSepia.value = 0
     iHue.value = 0
     iSaturado.value = 100
     iNegativo.value = 0
}

btnReestablecerFiltros.addEventListener('click', reestablecerFiltros)


/////////////////////////////////////////////////////////////////

//                A S I D E   T E X T O

///////////////////////////////////////////////////////////////

/////////////////// TOP TEXT  &  BOTTOM TEXT  /////////////////////

let topTextBox = document.querySelector('#top-texto')
let topTextIngresado = document.querySelector('#text-superior')

let bottomText = document.querySelector('#bottom-text')
let bottomTextIngresado = document.querySelector('#text-inferior')

const topChekbox = document.querySelector('#checkbox-superior')
const bottomChekbox = document.querySelector('#checkbox-inferior')

topTextIngresado.addEventListener('input', (e)=>{
    let infoText = e.target.value
    topTextBox.innerHTML = infoText
})

bottomTextIngresado.addEventListener('input',(e)=>{
    let infoText = e.target.value
    bottomText.innerHTML = infoText
})

topChekbox.addEventListener('input', ()=>{
    topTextBox.classList.toggle('ocultar')
})

bottomChekbox.addEventListener('input', ()=>{
    bottomText.classList.toggle('ocultar')
})

//  SELECCION DE TIPOGRAFIA

const tipoLetra = document.querySelector('#fuente')

tipoLetra.addEventListener('input', (e)=>{
    let letraSeleccionada = e.target.value
    topTextBox.style.fontFamily = letraSeleccionada
    bottomText.style.fontFamily = letraSeleccionada
})

//  TAMANIO DE TIPOGRAFIA

const sizeFont = document.querySelector('#size-letra')


sizeFont.addEventListener('input', ()=>{
   topTextBox.style.fontSize = `${sizeFont.value}px`
   bottomText.style.fontSize = `${sizeFont.value}px`   
})

// ALINEADO DEL TEXTO MEME

const btnAlineadoIzquierda = document.querySelector('#btn-izquierda')
const botonAlineadoCentro = document.querySelector('#btn-centro')
const botonAlineadoDerecha = document.querySelector('#btn-derecha')

btnAlineadoIzquierda.addEventListener('click', ()=>{
    topTextBox.style.textAlign = 'left'
    bottomText.style.textAlign = 'left'
})

botonAlineadoCentro.addEventListener('click', ()=>{
    topTextBox.style.textAlign = 'center'
    bottomText.style.textAlign = 'center'
})

botonAlineadoDerecha.addEventListener('click', ()=>{
    topTextBox.style.textAlign = 'right'
    bottomText.style.textAlign = 'right'
})


////////////  CHECKBOX FONDO TRANSPARENTE
const colorTextoMeme = document.querySelector('#icolorTexto')
const colorFondoTexto = document.querySelector('#icolorFondoTexto')
const contenedorPadre = document.querySelector('#padre')

const checkboxFondoTransparente = document.querySelector('#fondo-transparente')

checkboxFondoTransparente.addEventListener('input', ()=>{ 
//     topTextBox.classList.toggle('fondoTransparente')
//     bottomText.classList.toggle('fondoTransparente')
//    // img.classList.toggle('agrandarMeme')
//     img.style.border = `2px solid red`
//     padre.style.border = `2px solid blue`
//     topTextBox.classList.toggle('posicionTextotop')
//     bottomText.classList.toggle('posicionTextobottom')

//     const agrandar =()=> {
//      return img.style.height = `450px`
//     } 
//     agrandar()
//
                           //-------
    if (checkboxFondoTransparente.checked){
        img.classList.toggle('agrandarMeme')
        topTextBox.style.backgroundColor = 'transparent'
        bottomText.style.backgroundColor = 'transparent'
        topTextBox.classList.toggle('posicionTextotop')
        bottomText.classList.toggle('posicionTextobottom')
        
        //img.style.border = `2px solid red`
        //padre.style.border = `2px solid red`
       
        
    } else {
        topTextBox.style.backgroundColor = colorFondoTexto.value
        bottomText.style.backgroundColor = colorFondoTexto.value
    }

})   


///////////////// COLOR DEL TEXTO Y COLOR DEL FONDO DEL TEXTO ///////////////

colorTextoMeme.addEventListener('input', (event)=>{
    const spanColor = document.querySelector('#span-color-texto')
    let color = event.target.value
    topTextBox.style.color = color
    bottomText.style.color = color
    spanColor.innerHTML = color
})

cambioColorFondoTexto =(event)=>{
    const spanColorfondo = document.querySelector('#span-color-fondo')
    let color = event.target.value
    spanColorfondo.innerHTML = color
    topTextBox.style.backgroundColor = color
    bottomText.style.backgroundColor = color
}

colorFondoTexto.addEventListener('input', cambioColorFondoTexto)

////////////////////////    C O N T O R N O     ////////////////////////

const btnNinguno = document.querySelector('#btn-ninguno')
const btnClaro = document.querySelector('#btn-claro')
const btnOscuro = document.querySelector('#btn-oscuro')

const noContorno =()=>{
    topTextBox.style.textShadow = 'none'
    bottomText.style.textShadow = 'none'
}

btnNinguno.addEventListener('click', noContorno)

const contornoClaro =()=>{
    topTextBox.style.textShadow = '2px 2px #ffffff'
    bottomText.style.textShadow = '2px 2px #ffffff'
}

btnClaro.addEventListener('click', contornoClaro)

const contornoOscuro =()=>{
    topTextBox.style.textShadow = '2px 2px #000000'
    bottomText.style.textShadow = '2px 2px #000000'
}

btnOscuro.addEventListener('click', contornoOscuro)

////////////////////////    E S P A C I A D O     ////////////////////////

const espaciado = document.querySelector('#input-espaciado')

espaciado.addEventListener('input',(e)=>{
    topTextBox.style.padding = `${e.target.value}px`
    bottomText.style.padding = `${e.target.value}px`
})

////////////////////////    I N T E R L I N E A D O     ////////////////////////

const interlineado = document.querySelector('#input-interlineado')

interlineado.addEventListener('input', ()=>{
    const valorinterlineado = interlineado.value
    topTextBox.style.lineHeight = valorinterlineado
    bottomText.style.lineHeight = valorinterlineado
})


////////////////////////  D E S C A R G A   I M G    ////////////////////////

const btnDescarga = document.getElementById("btn-descarga");

btnDescarga.addEventListener("click", () =>
  domtoimage
    .toBlob(document.getElementById("padre"))
    .then((blob) => saveAs(blob, "mi-meme.png"))
);

// no me funciono bien, solo se descarga una pequeña porcion de la imagen

























