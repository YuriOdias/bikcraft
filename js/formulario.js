const formulario = document.querySelector('form');

function formularioEnviado(reposta) {
  if(reposta.ok){
    formulario.innerHTML = '<p class="font-2-l" style="grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;"><span style="color: #317a00;">Mensagem enviada</span>, em breve entraremos em contato<p/>';
  } else {
    formulario.innerHTML = '<p class="font-2-l" style="grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;"><span style="color: #e00000";>Erro no envio</span>, você pode enviar diretamente para o nosso email em: contato@bikcraft.net<p/>';
  }
}

function enviarFormulario(event){
  event.preventDefault();
  const botao = document.querySelector('form button');
  botao.disabled = true;
  botao.innerText = 'enviando...';

  const data = new FormData(formulario);
  fetch('./enviar.php', {
    method: 'POST',
    body: data
  }).then(formularioEnviado);
}

formulario.addEventListener('submit', enviarFormulario)