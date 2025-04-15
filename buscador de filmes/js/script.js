const botao = document.getElementById('botao');
const res = document.getElementById('filmes');

botao.addEventListener('click',function(){
    const buscarFilme = document.getElementById('busca').value.toLowerCase().trim();

    res.innerHTML = "";

    const filmeEncontrado = filmes.filter(filme => filme.nome.toLowerCase().includes(buscarFilme) || filme.categoria.toLowerCase().includes(buscarFilme));


    if(filmeEncontrado.length > 0){
        filmeEncontrado.forEach(filme =>{
            res.innerHTML +=`
            <div class="filme">
            <img src="${filme.img}"><br>
            <p><strong>${filme.nome}</strong><p>
            <p><strong>${filme.categoria}<strong></p>
            <p><strong>Treiler</strong>:<a href="${filme.link}" target="_blank"</a>Assista aqui</p>     
            </div>
            `
        })
    }else{
        res.innerHTML = `Filme "<strong>${buscarFilme}</strong>" não encontrado`
    }

    document.getElementById("busca").value = "";
    document.getElementById("busca").focus();


})




const filmes = [
    {
        img:"capa-filmes/de-repente-30.jpg",
        nome:"De Repente 30",
        categoria:"Comediaromantica",
        link:"https://www.youtube.com/watch?v=NV7PBRBcxu0",
    },
    {
        img:"capa-filmes/Ela É Demais pra Mim.jpg",
        nome:"Ela É Demais pra Mim",
        categoria:"Comediaromantica",
        link:"https://www.youtube.com/watch?v=hG8292HyMEI",
    },
    {
        img:"capa-filmes/guerra-e-guerra.jpg",
        nome:"Guerra e Guerra",
        categoria:"Ação Comedia Romace",
        link:"https://www.youtube.com/watch?v=aGOkf5ROENs",
    },
    {
        img:"capa-filmes/Juntos Pelo Acaso.jpg",
        nome:"Juntos Pelo Acaso",
        categoria:"Comediaromantica",
        link:"https://www.youtube.com/watch?v=PwNgXYwxTFQ",
    },
    {
        img:"capa-filmes/Um Espião e Meio.jpg",
        nome:"Um Espião e Meio",
        categoria:"Ação Comedia",
        link:"https://www.youtube.com/watch?v=SkD8VBpAcIg",
    },
    {
       img:"capa-filmes/Uma Linda Mulher.jpg",
       nome:"Uma Linda Mulher",
       categoria:"Comediaromantica",
       link:"https://www.youtube.com/watch?v=2EBAVoN8L_U", 
    },
    {
        img:"capa-filmes/Vizinhos Nada Secretos.png",
        nome:"Vizinhos Nada Secretos",
        categoria:"Ação Comedia",
        link:"https://www.youtube.com/watch?v=nNAxT1s8VsM",
    },
    {
        img:"capa-filmes/Aprendiz de Espiã.jpg",
        nome:"Aprendiz de Espiã",
        categoria:"Ação Comedia",
        link:"https://www.youtube.com/watch?v=p60YBf3UgFA",
    },
    {
        img:"capa-filmes/Encontro Explosivo.jpg",
        nome:"Encontro Explosivo",
        categoria:"Ação Romance",
        link:"https://www.youtube.com/watch?v=bvmPCO2qR7g",
    },
    {
        img:"capa-filmes/Uma Longa Jornada.jpg",
        nome:"Uma Longa Jornada",
        categoria:"Drama Romance",
        link:"https://www.youtube.com/watch?v=uoOGULC4H9k",
    },
    {
        img:"capa-filmes/Será Que .jpg",
        nome:"Será Que?",
        categoria:"Comedia Romance",
        link:"https://www.youtube.com/watch?v=SKPT3cOGRnI",
    }

]

