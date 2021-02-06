// Função para trocar a imagem através do src

var image = document.querySelector('.fotos')

function changeImg(){
    if(image.src.match('imagens/ronaldo1.jpg')){
        image.src = 'imagens/ronaldo2.jpg'
    }else {
        image.src = 'imagens/ronaldo1.jpg'
    }
}


// Função para mudar o texto através do innerHTML
var titulo = document.getElementById('title')

function changeText(){
    if(titulo.innerHTML == 'RONALDO'){
        titulo.innerHTML = 'O FENÔMENO'
    } else{
        titulo.innerHTML = 'RONALDO'
    }
}



// Função que exibe na string a data de acesso ao site
document.querySelector('.data').innerHTML = new Date().toLocaleString()