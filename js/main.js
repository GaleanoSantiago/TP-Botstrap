/*----------------- Barra de Navegacion -------------------*/
const menu = document.getElementById("menu");
const btn = document.getElementById("btn-submit");
const form = document.getElementById("form");
const cantidad = document.getElementById("cantidad");
const select = document.getElementById("categoria");
const inputResult = document.getElementById("total");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    // console.log(cantidad.value);
    // console.log(select.value);
    let total = 0;
    let descuento = 0;
    let cantidadTicket = cantidad.value;
    
    if(select.value == 1) {
        
        console.log("Estudiante");
        total = 200*cantidadTicket;
        descuento = total*80/100;
        total = total-descuento;
        console.log(total);
    } else if (select.value == 2) {
        
        console.log("Trainee");
        total = 200*cantidadTicket;
        descuento = total*50/100;
        total = total-descuento;
        console.log(total);

    } else {

        console.log("Junior");
        total = 200*cantidadTicket;
        descuento = total*15/100;
        total = total-descuento;
        console.log(total);
    }
    inputResult.value=total;

})

addEventListener("scroll",()=>{
    
    //scroll para que el menu se fije en el top de la pantalla
    
    const heightScreen = 800;
    let pixel = window.scrollY;
    
    if(pixel>heightScreen){
        menu.classList.add("fixed")
    }else{
        menu.classList.remove("fixed");
    }
})