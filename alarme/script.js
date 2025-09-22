const caixaTimer = document.getElementById("caixa_timer");
const horaAlarme = document.getElementById("hora_alarme");
const relogio = document.getElementById("relogio");
const inputAlarme = document.getElementById("tpm_alarme");
const btnAtivar = document.getElementById("btn_ativar");
const btnParar = document.getElementById("btn_parar");

const audioAlarme = new Audio("alarm-327234.mp3");
audioAlarme.loop = -1;

let tempAtual = null;
let tempAlarme = null;
let alarmeTocando = false;
let alarmeAtivado = false;



btnAtivar.addEventListener("click", () => {
    tempAtual = Date.now();
    tempAlarme = tempAtual + (inputAlarme.value * 1000);
    alarmeAtivado = true;
    const alarmeEm = new Date(tempAlarme);
    horaAlarme.innerHTML = `Hora do Alarme ${alarmeEm.toLocaleTimeString()}`;

})

btnParar.addEventListener("click", () => {
    inputAlarme.value = "0";
    alarmeAtivado = false;
    alarmeTocando = false;
    horaAlarme.innerHTML = "Hora do Alarme:";
    audioAlarme.pause();
    caixaTimer.classList.remove("alarme")
    audioAlarme.currentTime = 0;

})

const atualizarHora = () => {
    const data = new Date();
    relogio.innerHTML = data.toLocaleTimeString();
    
    if(alarmeAtivado && !alarmeTocando){
        if(data.getTime() >= tempAlarme){
            alarmeTocando = true;
            audioAlarme.play();
            caixaTimer.classList.add("alarme");
        }
    }
}

setInterval(atualizarHora, 1000);