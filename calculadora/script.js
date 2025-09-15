const teclasNum = document.querySelectorAll(".num");
const teclasOperacao = document.querySelectorAll(".op");
const res = document.querySelector(".res")
const display = document.getElementById("display");
const limpar = document.getElementById("tlimpar");
const btnCopy = document.getElementById("tcopy");
const contanerCalc = document.getElementById("contaner_calc");
const btnAbaCalc = document.getElementById("aba_calc");
const imgSeta = document.getElementById("img_seta");

let sinal = false;
let decimal = false;

teclasNum.forEach((teclasN) => {
    teclasN.addEventListener("click", (evt) => {
        sinal = false;
      if(evt.target.innerHTML === ","){
        if(!decimal){
            decimal = true;
            if(evt.target.innerHTML === ","){
                display.innerHTML = "0,";
            }
        }
      }else{
        if(display.innerHTML === "0"){
            display.innerHTML = "";
        }
        display.innerHTML += evt.target.innerHTML;
      }
      
    })
})

teclasOperacao.forEach((teclasOp) => {
    teclasOp.addEventListener("click", (evt) => {
        if(!sinal){
            sinal = true;
            if(display.innerHTML === "0"){
                display.innerHTML = "";
            }
            if(evt.target.innerHTML === "x"){
                display.innerHTML += "*";
            }else{
                  display.innerHTML += evt.target.innerHTML;
            }
          
        } 
    })
})


limpar.addEventListener("click",()=>{
    sinal = false;
    decimal = false;
    display.innerHTML = "0";
})

res.addEventListener("click",()=>{
    sinal = false;
    decimal = false;
   const result = eval(display.innerHTML);
   display.innerHTML = result;
})

btnCopy.addEventListener('click',()=>{
    navigator.clipboard.writeText(display.innerHTML);
})

btnAbaCalc.addEventListener("click",()=>{
    contanerCalc.classList.toggle("abrir_aba");
    if(contanerCalc.classList.contains("abrir_aba")){
        imgSeta.setAttribute("src","esquerda.svg");
    }else{
        imgSeta.setAttribute("src","direita.svg");
    }
})






