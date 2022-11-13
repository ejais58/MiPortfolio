//animacion barra skills
window.addEventListener('scroll', function(){
    let animacion1 = document.getElementById('animado1');
    let animacion2 = document.getElementById('animado2');
    let animacion3 = document.getElementById('animado3');
    let animacion4 = document.getElementById('animado4');
    let animacion5 = document.getElementById('animado5');
    let animacion6 = document.getElementById('animado6');
    let posicion = animacion1.getBoundingClientRect().top;
    let tamanioDePantalla = window.innerHeight/2;
    if (posicion < tamanioDePantalla){
        animacion1.style.animation = 'htmlanimation 2s forwards';
        animacion2.style.animation = 'cssanimation 2s forwards';
        animacion3.style.animation = 'javaanimation 2s forwards';
        animacion4.style.animation = 'angularanimation 2s forwards';
        animacion5.style.animation = 'netanimation 2s forwards';
        animacion6.style.animation = 'nodeanimation 2s forwards';
    }
})