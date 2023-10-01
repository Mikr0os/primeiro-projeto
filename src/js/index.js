const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    const botaoSelecionado = desselecionarBotao();
    const personagemSelecionado = desselecionarPersonagem();

    if (botaoSelecionado) {
      botaoSelecionado.classList.remove("selecionado");
    }

    botao.classList.add("selecionado");
    
    if (personagemSelecionado) {
      personagemSelecionado.classList.remove("selecionado");
    }

    personagens[indice].classList.add("selecionado");
  });
});

function desselecionarBotao() {
  return document.querySelector(".botao.selecionado");
}

function desselecionarPersonagem() {
  return document.querySelector(".personagem.selecionado");
}
