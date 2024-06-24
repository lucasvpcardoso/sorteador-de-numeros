function sortear() {
  let quantidade = parseInt(document.getElementById('quantidade').value);
  let de = parseInt(document.getElementById('de').value);
  let ate = parseInt(document.getElementById('ate').value);

  if (de >= ate) {
    alert ('O número inserido no campo "até o número" deve ser maior do que no campo "do número", por favor insira-os novamente.')
  } 
  
  if (quantidade > (ate - de + 1)) {
  alert('A quantidade de números a serem sorteados excede algum dos limites')
  }

  let sorteados = [];
  
    
  for (let i = 0; i<quantidade; i++){
    let numero = obterNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
      
    }

    sorteados.push(numero);
  }
}
 

  let resultado = document.getElementById('resultado');
  resultado.innerHTML =  `<label class="texto__paragrafo">Números sorteados:${sorteados}</label>`;
  alterarStatusBotao();   

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}
  
function alterarStatusBotao() {
  let botao = document.getElementById ('btn-reiniciar');
  if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
  } else {
    add
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
  }
}

function reiniciar () {
  document.getElementById('quantidade').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('de').value = '';
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
  alterarStatusBotao();

  
}