var btn = document.getElementById('btn');
var res = document.getElementById('res');

btn.addEventListener('click', function (){
    var nome = document.getElementById('nome').value.toLowerCase().trim();

    if(nome === ""){
        alert("Por favor, insira um nome para proseguir.");
        return;
    }

   var nomeIvertido = nome.split('').reverse().join('');

   res.innerHTML = `Nome invertido: <strong>${nomeIvertido}</strong>`;
   res.style.paddingRight = '50px'
})