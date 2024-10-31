//************* Variáveis globais que devem ser inicializadas no início do jogo *************************************

//variável que irá guardar o personagem sorteado
let personagemPrincipal = ""
//variável que irá guardar o número sorteado no dado
let sorteioDado = 0
//variável que irá guardar a consequência de cada número sorteado no desafio da caverna
const consequenciasCaverna = [
    'Você encontrou um troll! Você terá que lutar com ele.',
    'Você encontrou um troll de dificuldade média e deve enfrentá-lo.',
    'Você passou pela entrada da caverna sem nenhum problema!'    
]


//************************************* Funções que serão repetidas ao longo do jogo *************************************
function endgame(){
    
    alert('tente novamente!')
    return(iniciar())
 
    
}
  // Função para rolar um dado (1 a 20)
  function rolarDado() {
    if (personagemPrincipal == "Mago"){
        sorteioDado++
    }
    return Math.floor(Math.random() * 20) + 1;

    
  }

  // Função para batalha de nível fácil
  function batalhaFacil(){

    var vidaPersonagem = ""
    if(personagemPrincipal == "Guerreiro"){
        vidaPersonagem = 10
    }
    if(personagemPrincipal == "Mago"){
        vidaPersonagem = 10-2
    }
    if(personagemPrincipal == "Arqueiro"){
        vidaPersonagem = 12
    }
    let vidaInimigo = 5

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 2
            alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! Nada acontece.")
        }
    }
    if(vidaPersonagem <= 0){
        alert("Você perdeu! O jogo acabou.")
        endgame()
        
    }
    else{
        alert("Você venceu! Agora a história continua")
        alert('continuando dentro da caverna, você se depara com um rosto familiar quando acende sua tocha')
            const mineradorD1 = prompt(`ola ${personagemPrincipal}!, ja faz um tempo!)
            1-perguntar o que ele faz aqui
            2-sair da caverna`)
            
            const mineradorD3 = ""
            if(mineradorD1 == 1){
                const mineradorD2 = prompt(`nada de mais, só explorando, eu vi uma eu vi um covil com muitas aranhas no norte desta caverna se você quiser ir lá ver, acho que da caminho para o seu destino
                1-ir para o covil de aranhas
                2-sair da caverna`)
                if(mineradorD2 == 1){
                    mineshaft()
                }
            }else(mineradorD3 =alert('oh, okay, até mais!'))
        
}

}
    // Função para batalha de nível médio
    function batalhaMedia(){

        var vidaPersonagem = ""
    if(personagemPrincipal == "Guerreiro"){
        vidaPersonagem = 10
    }
    if(personagemPrincipal == "Mago"){
        vidaPersonagem = 10-2
    }
    if(personagemPrincipal == "Arqueiro"){
        vidaPersonagem = 12
    }
        let vidaInimigo = 8

        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}`)

        while (vidaPersonagem >=0 && vidaInimigo >=0){
            alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
            let numeroSorteadoPersonagem = rolarDado()
            alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`)
            let numeroSorteadoInimigo = rolarDado()
            if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
                vidaInimigo -= 2
                alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`)
            }
            else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
                vidaPersonagem -= 2
                alert(`O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
            }
            else{
                alert("Empate! Nada acontece.")
            }
        }
        if(vidaPersonagem <= 0){
            alert("Você perdeu! O jogo acabou.")
            endgame()
        
        }
        else{
            alert("Você venceu!")
            alert('continuando dentro da caverna, você se depara com um rosto familiar quando acende sua tocha')
            const mineradorD1 = prompt(`ola ${personagemPrincipal}!, ja faz um tempo)
            1-perguntar o que ele faz aqui
            2-sair da caverna`)
            const mineradorD3 = ""
            if(mineradorD1 == 1){
                const mineradorD2 = prompt(`nada de mais, só explorando, eu vi uma eu vi um covil com muitas aranhas no norte desta caverna se você quiser ir lá ver, acho que da caminho para o seu destino
                1-ir para o covil das aranhas
                2-sair da caverna`)
                if(mineradorD2 == 1){
                    mineshaft()
                }
            }else(mineradorD3 =alert('oh, okay, até mais!'))}


}
 
//************************************* Função que roda ao iniciar o jogo *************************************

function iniciar(){opção
    const personagem = prompt(`Seja bem-vindo a uma incrivel aventura medieval onde seu rei mandou você caçar a cabeça do dragão que ja atacou o reino no passado. Mas primeiro vamos sortear seu personagem:: 
        1 - Sortear Personagem
        2 - Sair do Jogo`)

    switch(personagem){
        case "1":
            personagemPrincipal = sortearPersonagem()
            alert(`você jogará de ${personagemPrincipal}`)
            if(personagemPrincipal === "Guerreiro")
                iniciarJornadaGuerreiro()
            else if(personagemPrincipal === "Mago")
                iniciarJornadaMago()
            else
                iniciarJornadaArqueiro()
        break
        case "2":
            alert("Sem um personagem não dá para jogar...")
        break
        default:
            alert('isso não é uma opção...eu acho')
    
}
}

//************************************* Função para sortear personagem *************************************
function sortearPersonagem() {
    const personagens = ["Guerreiro", "Mago", "Arqueiro"];

    const sorteado = Math.floor(Math.random() * personagens.length);
    return personagens[sorteado];
  }


//************************************* Funções para jornada de cada personagem *************************************

// Função para iniciar a jornada do arqueiro
function iniciarJornadaArqueiro(){
    const opcao1 = prompt(`enquanto explorava, você acaba achando uma caverna escura. O que você faz?
        1 - Entro pra ver o que é
        2 - Vou pra outro lado`)
    if(opcao1 == "1"){
        const rolarDados = confirm("Agora vamos tentar sua sorte! Preparado para rolar os dados?")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 7) { 
                alert ( `${consequenciasCaverna[0]}`)
                batalhaMedia()
            }
            else if (sorteioDado >=8 && sorteioDado <=14 ){
                alert ( `${consequenciasCaverna[1]}`)
                batalhaFacil()
            }
            else {alert ( `${consequenciasCaverna[2]}`) 
            alert('continuando dentro da caverna, você se depara com um rosto familiar quando acende sua tocha')
            const mineradorD1 = prompt(`ola ${personagemPrincipal}!, ja faz um tempo
            1-perguntar o que ele faz aqui
            2-sair da caverna`)
            
            const mineradorD3 = ""
            if(mineradorD1 == 1){
                const mineradorD2 = prompt(`nada de mais, só explorando, eu vi uma eu vi um covil com muitas aranhas no norte desta caverna se você quiser ir lá ver, acho que da caminho para o seu destino
                1-ir para o covil de aranhas
                2-sair da caverna`)
                if(mineradorD2 == 1){
                    mineshaft()
                }
            }else(mineradorD3 =alert('oh, okay, até mais!'))}
            
        }
        else{
            alert(`talvez seja melhor tentar depois mesmo`)
            return
        }
    }
    else{
        alert(`voltando para sua base...`)
        return
    }
}

// Função para iniciar a jornada do guerreiro
function iniciarJornadaGuerreiro(){
    const opcao1 = prompt(`enquanto explorava, você acaba achando uma caverna escura. O que você faz?
        1 - Entro pra ver o que é
        2 - Vou pra outro lado`)
    if(opcao1 == "1"){
        const rolarDados = confirm("Agora vamos tentar sua sorte! Preparado para rolar os dados?")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 7) { 
                alert ( `${consequenciasCaverna[0]}`)
                batalhaMedia()
            }
            else if (sorteioDado >=8 && sorteioDado <=14 ){
                alert ( `${consequenciasCaverna[1]}`)
                batalhaFacil()
            }
            else {alert ( `${consequenciasCaverna[2]}`) }
            alert('continuando dentro da caverna, você se depara com um rosto familiar quando acende sua tocha')
            const mineradorD1 = prompt(`ola ${personagemPrincipal}!, ja faz um tempo
            1-perguntar o que ele faz aqui
            2-sair da caverna`)
            
            const mineradorD3 = ""
            if(mineradorD1 == 1){
                const mineradorD2 = prompt(`nada de mais, só explorando, eu vi uma eu vi um covil com muitas aranhas no norte desta caverna se você quiser ir lá ver, acho que da caminho para o seu destino
                1-ir para o covil de aranhas
                2-sair da caverna`)
                if(mineradorD2 == 1){
                    mineshaft()
                }
            }else(mineradorD3 =alert('oh, okay, até mais!'))
        }
        else{
            alert(`Melhor se equipar melhor, não acha?`)
            return
        }
    }
    else{
        alert(`voltando para sua base...`)
        return
    }
}

// Função para iniciar a jornada do mago
function iniciarJornadaMago(){
    const opcao1 = prompt(`enquanto explorava, você acaba achando uma caverna escura. O que você faz?
        1 - Entro pra ver o que é
        2 - Decido não entrar`)
    if(opcao1 == "1"){
        const rolarDados = confirm("Agora vamos tentar sua sorte! Preparado para rolar os dados?")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 7) { 
                alert ( `${consequenciasCaverna[0]}`)
                batalhaMedia()
            }
            else if (sorteioDado >=8 && sorteioDado <=14 ){
                alert ( `${consequenciasCaverna[1]}`)
                batalhaFacil()
            }
            else {alert ( `${consequenciasCaverna[2]}`) }
            alert('continuando dentro da caverna, você se depara com um rosto familiar quando acende sua tocha')
            const mineradorD1 = prompt(`ola ${personagemPrincipal}!, ja faz um tempo)
            1-perguntar o que ele faz aqui
            2-sair da caverna`)
            const mineradorD3 = ""
            if(mineradorD1 == 1){
                const mineradorD2 = prompt(`nada de mais, só explorando, eu vi uma eu vi um covil com muitas aranhas no norte desta caverna se você quiser ir lá ver, acho que da caminho para o seu destino
                1-ir para ao covil das aranhas
                2-sair da caverna`)
                if(mineradorD2 == 1){
                    mineshaft()
                }
            }else(mineradorD3 =alert('oh, okay, até mais!'))
        }
        else{
            alert(`tudo bem, depois você joga!`)
            return
        }
    }
    else{
        alert(`Melhor se equipar, não acha?`)
        return
    }
}

function mineshaft(){
   
alert('parece que voce esta pronto para explorar! boa sorte!')

const spider = prompt(`continuando para dentro da caverna, você se depara com muitas aranhas! Deseja enfrentar?
    1-ir em frente a batalha
    2- tentar outro caminho mais seguro`)
    if(spider == 1){
        alert('hora da ação!')
        spiderBTL()
    }
    if(spider == 2){
        sorteioDado = rolarDado()
        if (sorteioDado >= 15){
            alert('voce consegue passar por um caminho onde elas nao te acham, continuando sua jornada!')
            portal()
        }else{
            alert('Parece que voce não foi cuidadoso, uma aranha te ataca!')
            spiderBTL()
        }

    }
    else{
        alert('talvez essa caverna nao seja tudo isso..')
        endgame()
    }

}
function spiderBTL(){

    var vidaPersonagem = ""
if(personagemPrincipal == "Guerreiro"){
    vidaPersonagem = 10
}
if(personagemPrincipal == "Mago"){
    vidaPersonagem = 10-2
}
if(personagemPrincipal == "Arqueiro"){
    vidaPersonagem = 12
}
    let vidaInimigo = 5

    alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}`)

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez da aranha!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 2
            alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou a aranha!! Agora é vida dela é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`A aranha tirou ${numeroSorteadoInimigo} e acertou você! Agora sua vida é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! Nada acontece.")
            alert('a aranha curou 1 de vida!')
            vidaInimigo++
        }
    }
    if(vidaPersonagem <= 0){
        alert(`${personagemPrincipal} Morreu envenenado por uma aranha das cavernas`)
    }
    else{
        alert("Você venceu!")
        rolarDado()
     sorteioDado = rolarDado()
     if(sorteioDado >= 10){
     alert('parece que essas aranhas estao bem bravas! outra vem e te ataca por tras!')
     }spiderBTL2()

}
}

function spiderBTL2(){

    var vidaPersonagem = ""
if(personagemPrincipal == "Guerreiro"){
    vidaPersonagem = 10
}
if(personagemPrincipal == "Mago"){
    vidaPersonagem = 10-2
}
if(personagemPrincipal == "Arqueiro"){
    vidaPersonagem = 12
}
    let vidaInimigo = 3

    alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}`)

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez da aranha!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 2
            alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou a aranha!! Agora é vida dela é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`A aranha tirou ${numeroSorteadoInimigo} e acertou você! Agora sua vida é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! Nada acontece.")
            alert('a aranha curou 1 de vida!')
            vidaInimigo++
        }
    }
    if(vidaPersonagem <= 0){
        alert(`${personagemPrincipal} Morreu envenenado por uma aranha das cavernas`)
    }
    else{
        alert("Você venceu!")
        nether()
    
    }
}

function portal(){
    alert('após seu confronto com as chatas aranhas, você segue em frente a caverna, e se depara com algo que não esperava...')
    alert('uma porta enorme! Mas parece estar trancada')
    const decisãonether = prompt(`convenientemente, você tem algo em seu bolso, deseja ver o que é?
    1-Sim
    2-Não`)
    if(decisãonether == 1){
       const portal = prompt(`Voce pegou uma chave que seu rei tinha te entregado, Deseja abrir a porta?
       1-sim
       2- ir embora`)
        if(portal == 1){
            nether()
        }
    }else{
        alert('melhor não arriscar né')
        endgame()
    }
}
function nether(){    
    alert('entrando na porta, você se depara com um lugar de dar medo com uma paisagem vermelha coberta de lava, mas infelizmente, você entrou perto de uma fortaleza e acaba se deparando com o guardião do dragão')
const fortaleza = prompt(`deseja lutar contra o guardião?
1-sim
2-não`)
if( fortaleza == '1'){
alert('ta na hora de matar esse guardião!')
blaze()
}else{
    alert(' esse lugar nem é tudo isso mesmo')
    endgame()
}
}

function blaze(){
    var vidaPersonagem = ""
    if(personagemPrincipal == "Guerreiro"){
        vidaPersonagem = 10
    }
    if(personagemPrincipal == "Mago"){
        vidaPersonagem = 10-2
    }
    if(personagemPrincipal == "Arqueiro"){
        vidaPersonagem = 12
    }
        let vidaInimigo = 6
    
        
    
        while (vidaPersonagem >=0 && vidaInimigo >=0){
            alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
            let numeroSorteadoPersonagem = rolarDado()
            alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do guardião!`)
            let numeroSorteadoInimigo = rolarDado()
            if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
                vidaInimigo -= 2
                alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o guardião!! Agora é vida dele é ${vidaInimigo}`)
            }
            else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
                vidaPersonagem -= 2
                alert(`o guardião tirou ${numeroSorteadoInimigo} e acertou você! Agora sua vida é ${vidaPersonagem}`)
            }
            else{
                alert("Empate! Nada acontece.")
                alert('o guardião curou 1 de vida!')
                vidaInimigo++
            }
        }
        if(vidaPersonagem <= 0){
            alert(`${personagemPrincipal} Morreu queimado pelo Guardião`)
            endgame()
        }
        else{
            alert("Você venceu!")
            ender()
           
    }
}
function end(){
alert('agora que você tem tudo a seu dispor, você está pronto para a batalha final!')
alert('depois de muito tempo se aventurando, você chega ao local para a grandiosa batalha final contra o Dragão')
const portalEND = alert(`Deseja entrar?
1-Sim
2-Não`)
if(portalEND == 1){
alert('você sente toda sua experiencia e determinação de sua jornada se acumular em seu coração...')
alert(`${personagemPrincipal} ganhou `)
enderDragon()
}
}
function enderDragon(){
    var vidaPersonagem = ""
    if(personagemPrincipal == "Guerreiro"){
        vidaPersonagem = 15
    }
    if(personagemPrincipal == "Mago"){
        vidaPersonagem = 15-2
    }
    if(personagemPrincipal == "Arqueiro"){
        vidaPersonagem = 17
    }
        let vidaInimigo = 13
    
        
    
        while (vidaPersonagem >=0 && vidaInimigo >=0){
            alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
            let numeroSorteadoPersonagem = rolarDado()
            alert(`Você tirou ${numeroSorteadoPersonagem}! Agora o Dragão atacará`)
            let numeroSorteadoInimigo = rolarDado()
            if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
                vidaInimigo -= 2
                alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o Dragão! Agora é vida dela é ${vidaInimigo}`)
            }
            else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
                vidaPersonagem -= 2
                alert(`o Dragão tirou ${numeroSorteadoInimigo} e acertou você! Agora sua vida é ${vidaPersonagem}`)
            }
            else{
                alert("Empate! Nada acontece.")
                alert('o Dragão se enfraquece!')
                vidaInimigo--
            }
        }
        if(vidaPersonagem <= 0){
            alert(`${personagemPrincipal} Morreu Pela furia do Dragão`)
        }
        else{
            alert("Você venceu!")
            final()
}
}
function final(){
alert('com o Dragão derrotado, sua jornada chega a o fim...')
alert('Obrigado por jogar.')
endgame()
}