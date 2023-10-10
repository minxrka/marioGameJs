const mario = document.getElementById('mario');
const cactus = document.getElementById('cactus');

document.addEventListener("keydown",function(event){
    jump();
})
function jump(){
    if (mario.classList.add("jump")){
        mario.classList.add("jump")
    }
    setTimeout(function(){
        mario.classList.remove("jump")
    },300)
}
 
let isAlive = setInterval ( function(){
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeft < 50 && cactusLeft > 0 && marioTop >= 140){
        alert("ЕБАТЬ ТЫ ЛОХ!!!")
    }
},10)