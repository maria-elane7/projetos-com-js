const botaoOnOff = document.getElementById("botaoonoff");
const lampada = document.getElementById("img");

function naoEstaQuebrada(){
    return lampada.src.indexOf("quebrada") === -1;
}

function ligar(){
    if(naoEstaQuebrada()){
        lampada.src = "imagens/ligada.jpg";
    }
}

function desligar(){
    if(naoEstaQuebrada()){
        lampada.src = "imagens/desligada.jpg";
    }
}

function lampadaQuebrada(){
    lampada.src = "imagens/quebrada.jpg";
}

function alternarEstado(){
    if(!naoEstaQuebrada()) return;

    if(lampada.src.indexOf("desligada") !== -1){
        ligar()
        botaoOnOff.textContent = "Desligar"
    }else{
       desligar()
        botaoOnOff.textContent = "Ligar";
    }
}


botaoOnOff.addEventListener("click", alternarEstado);
lampada.addEventListener("mouseover", ligar);
lampada.addEventListener("mouseleave", desligar);
lampada.addEventListener("dblclick", lampadaQuebrada);