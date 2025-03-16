function relogio(){
    var hora = document.getElementById('hora');
    var minutos = document.getElementById('minutos');
    var segundos = document.getElementById('segundos');
    var doc = document.querySelector('body');
    var imagem = document.getElementById('imagem');

    var agora = new Date();
    var horaAtual = agora.getHours().toString().padStart(2,'0');
    var minutosAtual = agora.getMinutes().toString().padStart(2,'0');
    var segundosAtual = agora.getSeconds().toString().padStart(2,'0');

    var horaNumero = parseInt(horaAtual);
    
        hora.innerHTML = `${horaAtual}`;
        minutos.innerHTML = `${minutosAtual}`;
        segundos.innerHTML = `${segundosAtual}`;

        if(horaNumero > 0 && horaNumero <=  12){
           imagem.src = "imagens/bomdia.png";
           doc.style.backgroundImage = "url(imagens/manha.jpg)";
        }else if( horaNumero <= 17){
            imagem.src = "imagens/boatarde.png";
            doc.style.backgroundImage = "url(imagens/tarde.jpg)";
        }else{
            imagem.src = "imagens/boanoite.png";
            doc.style.backgroundImage = "url(imagens/noite.jpg)";
        }

        
}
setInterval(relogio,1000);
relogio();