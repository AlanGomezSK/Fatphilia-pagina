import {listas} from "../datos.js";

var map = L.map('map').setView([20.66787647268066, -103.34118385331277], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

const antojitosMexicanos = document.getElementById("antojitosMexicanos")
const cafeteria = document.getElementById("cafeteria")
const brunch = document.getElementById("brunch")
const hamburgesas = document.getElementById("hamburgesas")
const mariscos = document.getElementById("mariscos")
const pizzeria = document.getElementById("pizzeria")
const taqueria = document.getElementById("taqueria")
const cortes = document.getElementById("cortes")
const sushi = document.getElementById("sushi")
const hamYhotDog = document.getElementById("hamYhotDog")
const cocinaOriental = document.getElementById("cocinaOriental")
const bbqYAhu = document.getElementById("bbqYAhu")
const tortasAhogadas = document.getElementById("tortasAhogadas")
const menuderia = document.getElementById("menuderia")
const gusgeria = document.getElementById("gusgeria")
const hotDogs = document.getElementById("hotDogs")
const alitas = document.getElementById("alitas")
const panaderia = document.getElementById("panaderia")
const bar = document.getElementById("bar")
const nieves = document.getElementById("nieves")
const lonches = document.getElementById("lonches")
const munchie = document.getElementById("munchie")
const comidaArgentina = document.getElementById("comidaArgentina")
const comidaItaliana = document.getElementById("comidaItaliana")
const hoteles = document.getElementById("hoteles")

const precio1 = document.getElementById("precio1")
const precio2 = document.getElementById("precio2")

let boton = document.getElementById("boton_enviar")
/*
for(var i =0; i<antojitos_Mexicanos.length;i++){
    var datos = `<img class = "estrellas" src="build/img/${antojitos_Mexicanos[i].options.imagen}.webp"><br><h1>${antojitos_Mexicanos[i].options.nombre}</h1><br><h2>${antojitos_Mexicanos[i].options.direccion} </h2><h3>Ticket promedio por persona:${antojitos_Mexicanos[i].options.ticket}</h3>`
    antojitos_Mexicanos[i].bindPopup(datos)
    antojitos_Mexicanos[i].addTo(map)
}*/
var filtroDiv = L.DomUtil.get('tipo_Defiltros-PorComida-filtro')
L.DomEvent.disableClickPropagation(filtroDiv)
L.DomEvent.disableScrollPropagation(filtroDiv)
listas.forEach(lista => {
    lista.forEach(elemento => {
    var datos = `<h1>${elemento.options.nombre}</h1><br><h2>${elemento.options.direccion} </h2><h3>Ticket promedio por persona: $${elemento.options.ticket}</h3>`
    var myIcon = L.icon({
        iconUrl: 'build/img/Pinubicacion-07.webp',
        iconSize: [30, 40], // Tamaño del icono [ancho, alto]
        iconAnchor: [15, 40], // Punto de anclaje del icono (generalmente la mitad del ancho y la altura)
        popupAnchor: [0, -40] // Punto de anclaje del pop-up en relación al icono
    });
    elemento.setIcon(myIcon)
    elemento.bindPopup(datos)
    elemento.addTo(map)
    });
});
function añadirOEliminarM(remove,indice){
    for(var i = 0; i<listas[indice].length;i++){
        if(remove == true){
            listas[indice][i].removeFrom(map)
        }else{
            if((precio1.value >= 0 && precio2.value >= 0) && (precio1.value <= listas[indice][i].options.ticket && listas[indice][i].options.ticket <= precio2.value)){
                listas[indice][i].addTo(map)
            }else if(precio1.value == 0 && precio2.value == 0){
                listas[indice][i].addTo(map)
            }else{
                listas[indice][i].removeFrom(map)
            }
        }
    }
}


boton.addEventListener("click",funcionBuscar)
function funcionBuscar(){
    if(antojitosMexicanos.checked == true){
        añadirOEliminarM(false,0)
    }
    else if(antojitosMexicanos.checked == false ){
        añadirOEliminarM(true,0)
    }
    //Condicional para cafeteria -------------------------------------------------------------
    if(cafeteria.checked == true){
        añadirOEliminarM(false,2)
    }
    else if(cafeteria.checked == false ){
        añadirOEliminarM(true,2)
    }
    //Condicional para hamburgesas -------------------------------------------------------------
    if(hamburgesas.checked == true){
        añadirOEliminarM(false,6)
    }
    else if(hamburgesas.checked == false){
        añadirOEliminarM(true,6)
    }
    //Condicional para MARICOS -------------------------------------------------------------
    if(mariscos.checked == true){
        añadirOEliminarM(false,3)
    }
    else if(mariscos.checked == false){
        añadirOEliminarM(true,3)
    }
    //Condicional para PIZZERIA -------------------------------------------------------------
    if(pizzeria.checked == true){
        añadirOEliminarM(false,1)
    }
    else if(pizzeria.checked == false ){
        añadirOEliminarM(true,1)
    }
    //Condicional para TAQUERIA -------------------------------------------------------------
    if(taqueria.checked == true){
        añadirOEliminarM(false,4)
    }
    else if(taqueria.checked == false){
        añadirOEliminarM(true,4)
    }
    //Condicional para TAQUERIA -------------------------------------------------------------
    if(brunch.checked == true){
        añadirOEliminarM(false,5)
    }
    else if(brunch.checked == false){
        añadirOEliminarM(true,5)
    }
    if(cortes.checked == true){
        añadirOEliminarM(false,7)
    }
    else if(cortes.checked == false){
        añadirOEliminarM(true,7)
    }
    if(sushi.checked == true){
        añadirOEliminarM(false,8)
    }
    else if(sushi.checked == false){
        añadirOEliminarM(true,8)
    }
    if(hamYhotDog.checked == true){
        añadirOEliminarM(false,9)
    }
    else if(hamYhotDog.checked == false){
        añadirOEliminarM(true,9)
    }
    if(cocinaOriental.checked == true){
        añadirOEliminarM(false,10)
    }
    else if(cocinaOriental.checked == false){
        añadirOEliminarM(true,10)
    }
    if(bbqYAhu.checked == true){
        añadirOEliminarM(false,11)
    }
    else if(bbqYAhu.checked == false){
        añadirOEliminarM(true,11)
    }
    if(tortasAhogadas.checked == true){
        añadirOEliminarM(false,12)
    }
    else if(tortasAhogadas.checked == false){
        añadirOEliminarM(true,12)
    }
    if(menuderia.checked == true){
        añadirOEliminarM(false,13)
    }
    else if(menuderia.checked == false){
        añadirOEliminarM(true,13)
    }
    if(gusgeria.checked == true){
        añadirOEliminarM(false,15)
    }
    else if(gusgeria.checked == false){
        añadirOEliminarM(true,15)
    }
    if(hotDogs.checked == true){
        añadirOEliminarM(false,14)
    }
    else if(hotDogs.checked == false){
        añadirOEliminarM(true,14)
    }
    if(alitas.checked == true){
        añadirOEliminarM(false,16)
    }
    else if(alitas.checked == false){
        añadirOEliminarM(true,16)
    }
    if(panaderia.checked == true){
        añadirOEliminarM(false,17)
    }
    else if(panaderia.checked == false){
        añadirOEliminarM(true,17)
    }
    if(bar.checked == true){
        añadirOEliminarM(false,18)
    }
    else if(bar.checked == false){
        añadirOEliminarM(true,18)
    }
    if(nieves.checked == true){
        añadirOEliminarM(false,19)
    }
    else if(nieves.checked == false){
        añadirOEliminarM(true,19)
    }
    if(lonches.checked == true){
        añadirOEliminarM(false,20)
    }
    else if(lonches.checked == false){
        añadirOEliminarM(true,20)
    }
    if(munchie.checked == true){
        añadirOEliminarM(false,21)
    }
    else if(munchie.checked == false){
        añadirOEliminarM(true,21)
    }
    if(comidaArgentina.checked == true){
        añadirOEliminarM(false,22)
    }
    else if(comidaArgentina.checked == false){
        añadirOEliminarM(true,22)
    }
    if(comidaItaliana.checked == true){
        añadirOEliminarM(false,23)
    }
    else if(comidaItaliana.checked == false){
        añadirOEliminarM(true,23)
    }
    if(hoteles.checked == true){
        añadirOEliminarM(false,24)
    }
    else if(hoteles.checked == false){
        añadirOEliminarM(true,24)
    }
    
}


