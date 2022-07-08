// variables necesarias para cambiar el aside
const asideImagen = document.querySelector('.div-imagen')
const asideTexto = document.querySelector('.div-texto')

const btnNavImagen = document.querySelector('#btn-imagen')
const btnNavTexto = document.querySelector('#btn-texto')
const btnModoOscuro = document.querySelector('#btn-modo-oscuro')
const fondoTodo = document.querySelector('#fondo-home')
const encabezado = document.querySelector('.encabezado')
const fondoAside = document.querySelector('aside')
const btnNavTodos = document.querySelectorAll('.btn-nav')


btnNavImagen.addEventListener('click', ()=>{
   // asideImagen.classList.toggle('mostrar')
    asideImagen.style.display = "block"
    asideTexto.style.display = "none"
})

btnNavTexto.addEventListener('click', ()=>{
    asideImagen.style.display = "none"
    asideTexto.style.display = "block"
})

// btnModoOscuro.addEventListener('click', ()=>{  //traerme las variables locales
//     encabezado.classList.toggle('navegador')
//     fondoTodo.classList.toggle('fondoMain')
//     fondoAside.classList.toggle('fondoAside')
//})
