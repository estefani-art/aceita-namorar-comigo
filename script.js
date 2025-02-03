function moverBotao() {
  const botao = document.getElementById("botaoFujao");
  const enamorar = document.querySelector(".enamorar");

  const containerWidth = enamorar.offsetWidth;
  const containerHeight = enamorar.offsetHeight;
  const buttonWidth = botao.offsetWidth;
  const buttonHeight = botao.offsetHeight;

  const posX = Math.floor(Math.random() * (containerWidth - buttonWidth));
  const posY = Math.floor(Math.random() * (containerHeight - buttonHeight));
  botao.style.position = "absolute";

  botao.style.left = posX + "px";
  botao.style.top = posY + "px";
}

function mostrarResposta() {
  document.getElementById("response").innerHTML =
    "💖 Eu sabia que você diria SIM! 💖";
}
