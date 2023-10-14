const menus = document.getElementsByClassName("navegador_principal-secciones")
const redes = document.getElementsByClassName("navegador_principal-redes")
const navegador = document.getElementsByClassName("navegador_principal")
const boton = document.getElementsByClassName("icon")
const botomF = document.getElementsByClassName("boton_filtros")[0]
const divFiltros = document.getElementsByClassName("tipo_Defiltros-PorComida-filtro")
const galeria = document.getElementsByClassName("galeria")[0]
let i = 2
boton[0].addEventListener('click',() =>{
    navegador[0].classList.toggle('size')
})

botomF.addEventListener('click',() =>{
    divFiltros[0].classList.toggle('quitarFiltros')
    console.log(divFiltros[0])
})


function cambioDeImagen(){
    if(i == 4){
        i  = 2
        galeria.style.backgroundImage = `url(./build/img/pic${i}.webp)`
    }else{
        i++
        galeria.style.backgroundImage = `url(./build/img/pic${i}.webp)`
    }
}

const intervalo = setInterval(cambioDeImagen, 10000);

console.log(galeria)


