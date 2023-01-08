const btnizq = document.getElementById("start")
const btnder = document.getElementById("stop")
const imgg = document.getElementById("obten")
btnizq.addEventListener("click",cambio,stopp)


function cambio() {
    
setTimeout(() => {
    return imgg.src = "/src/poke.png"
}, 12000);
setTimeout(() => {
    return imgg.src = "/src/zapato.png"
}, 17000);


setTimeout(() => {
    return imgg.src ="/src/imagen-slider.png"
 
   
}, 20000);
}

 