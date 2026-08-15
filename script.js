document.addEventListener('DOMContentLoaded', () => {
  // Seleção dos elementos do formulário via DOM
  const form = document.querySelector('#contactForm');
  const nomeInput = document.querySelector('#nome');
  const emailInput = document.querySelector('#email');
  const mensagemInput = document.querySelector('#mensagem');
  const feedbackDiv = document.querySelector('#feedback');

  // Adiciona o ouvinte de evento submit
  form.addEventListener('submit', (event) => {
    // Impede o envio padrão do formulário (recarregamento da página)
    event.preventDefault();

    // Limpa estados prévios da div de feedback
    feedbackDiv.className = 'feedback-msg';
    feedbackDiv.textContent = '';

    // Coleta os valores sem espaços sobressalentes nas pontas
    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const mensagem = mensagemInput.value.trim();

    // Validação 1: Verificar se os campos obrigatórios não estão vazios
    if (!nome || !email || !mensagem) {
      exibirFeedback('Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }

    // Validação 2: Verificar o formato do e-mail via Expressão Regular (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      exibirFeedback('Por favor, insira um e-mail válido (ex: nome@dominio.com).', 'error');
      return;
    }

    // Se a validação for bem-sucedida
    exibirFeedback(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`, 'success');

    // Reseta os campos do formulário
    form.reset();
  });

  // Função auxiliar para exibir a mensagem na div de feedback
  function exibirFeedback(mensagem, tipo) {
    feedbackDiv.textContent = mensagem;
    feedbackDiv.classList.add(tipo);
  }
});