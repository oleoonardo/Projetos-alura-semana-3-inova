let numSorteados = [];
let texto = 'Números sorteados:  nenhum até agora';

function sortear(){
    let qtdNum = parseInt(document.getElementById('quantidade').value);
    let deNum = parseInt(document.getElementById('de').value);
    let ateNum = parseInt(document.getElementById('ate').value);

    if(isNaN(qtdNum) || isNaN(deNum) || isNaN(ateNum)){
        alert('Preencha todos os campos para realizar o sorteio');
    } else if (qtdNum > (ateNum - deNum)){
        alert('O intervalo de números não pode ser menor que a quantidade a ser sorteada');
    }else{
        while(qtdNum > 0){
            let numSorteado = parseInt(Math.random() * (ateNum - deNum + 1)) + deNum;
            if(!numSorteados.includes(numSorteado)){
                numSorteados.push(numSorteado);
                qtdNum--;
            }
        }
        exibeTextoNaTela();
        alterarBotao();
    }
}

function exibeTextoNaTela(){
    if(numSorteados.length != 0){
        texto = `<label class="texto__paragrafo">Números sorteados:  ${numSorteados}.</label>`;     
    }
    document.getElementById('resultado').innerHTML = texto;
}

function reiniciar(){
    numSorteados = [];
    texto = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora.</label>';
    limpaCamposTela(texto);
    alterarBotao();
}

function limpaCamposTela(texto){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = texto;
}

function alterarBotao(){
    if(document.getElementById('btn-sortear').classList.contains('container__botao')){
        document.getElementById('btn-sortear').classList.remove('container__botao');
        document.getElementById('btn-sortear').classList.add('container__botao-desabilitado');
        document.getElementById('btn-sortear').setAttribute('disabled', 'true');
        document.getElementById('btn-reiniciar').classList.remove('container__botao-desabilitado');
        document.getElementById('btn-reiniciar').classList.add('container__botao');
        document.getElementById('btn-reiniciar').removeAttribute('disabled')
    } else{
        document.getElementById('btn-sortear').classList.remove('container__botao-desabilitado');
        document.getElementById('btn-sortear').classList.add('container__botao');
        document.getElementById('btn-sortear').removeAttribute('disabled');
        document.getElementById('btn-reiniciar').classList.remove('container__botao');
        document.getElementById('btn-reiniciar').classList.add('container__botao-desabilitado');
        document.getElementById('btn-reiniciar').setAttribute('disabled', 'true');
    }
}