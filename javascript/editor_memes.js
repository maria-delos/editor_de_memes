// variables necesarias para cambiar el aside
const asideImagen = document.querySelector('.div-imagen')
const asideTexto = document.querySelector('.div-texto')

const btnNavImagen = document.querySelector('#btn-imagen')
const btnNavTexto = document.querySelector('#btn-texto')
const btnModoOscuro = document.querySelector('#btn-modo-oscuro')



btnNavImagen.addEventListener('click', ()=>{
   // asideImagen.classList.toggle('mostrar')
    asideImagen.style.display = "block"
    asideTexto.style.display = "none"
})

btnNavTexto.addEventListener('click', ()=>{
    
    asideImagen.style.display = "none"
    asideTexto.style.display = "block"
    
    

})
