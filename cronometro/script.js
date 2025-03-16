var btn = document.getElementById('btn');

var contador = 0;
var intervalo;

function tempo (){
    var cronometro = document.getElementById('cronometro');

    intervalo = setInterval(() => {
        contador++;
        cronometro.innerHTML = contador;
    },1000)
}


btn.addEventListener('click', () =>{
    if(intervalo){
        clearInterval(intervalo);
        intervalo = null;
        btn.innerText = "Continuar";
    }else{
        tempo()
        btn.innerText = "Pausar";
    }
})