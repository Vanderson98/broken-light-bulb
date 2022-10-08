//Colocar ultimo ano no cop
data = new Date()
ano = document.getElementById('ano')
ano.innerHTML = data.getFullYear()

let queimar = 0
lampada = function(acao){
    //Mudar img
    let img = document.querySelector('#lampadaImg')
    let textoLampada = document.querySelector('#textoLampada')
    if(acao === 'ligar'){
        //Mudar imagem para "lampada ligada"
       img.setAttribute('src', 'img/ligada.jpg')
       textoLampada.innerHTML = "ligada"

       queimar++
       //Caso a variavel queimar seja maior ou igual a 3 e menor que 5, irá dar uma aviso para o usuario ter cuidado para nao queimar a lampada
       if(queimar >= 3 && queimar < 5){
           textoLampada.innerHTML += ", cuidado você vai acabar queimando a lampada!"
       }else if(queimar >= 5){ //Caso seja maior que 5 a lampada estára queimada!
           img.setAttribute('src', 'img/quebrada.jpg')
           textoLampada.innerHTML='queimada!'
       }
    }else if(acao === 'desligar'){ //Desligar lampada
        if(queimar < 5){ //Caso a lampada não tenha sido ligada 5 vezes seguidas, ela não irá queimar
            img.setAttribute('src', 'img/desligada.jpg')
            textoLampada.innerHTML = "desligada"
        }else{ //Senão ela queima
            img.setAttribute('src', 'img/quebrada.jpg')
           textoLampada.innerHTML='queimada!'
        }
    }
}