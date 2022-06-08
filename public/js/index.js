function Mudarestado(el, id) {
    id = parseInt(id);
    let display = document.querySelectorAll(el)[id - 1].style.display;

    if (display == "none") {
        document.querySelectorAll(el)[id - 1].style.display = 'flex';
    }
    else {
        document.querySelectorAll(el)[id - 1].style.display = 'none';
    }
}
const closeMessage = document.querySelector("#close")
const message = document.querySelector("#message")

closeMessage.addEventListener("click", function (){
    message.style.display = "none"
});




const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0 ;

function carrossel() {
    idx++;

    if( idx > img.length -1){
        i = 0;

    }
    
    imgs.style.trasform =`translateX(${-idx * 500}px)`;
}
setInterval(carrossel, 1800);