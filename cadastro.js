document.addEventListener("DOMContentLoaded", function() {
  // CPF
  document.getElementById('cpf').addEventListener('input', function(e) {
      var value = e.target.value;
      var cpfPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
                          .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
                          .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
                          .replace(/(\d{3})(\d)/, '$1-$2') // Adiciona traço após o nono dígito
                          .replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
      e.target.value = cpfPattern;
  });

  // Validação de Senhas Iguais
  let passwordca = document.getElementById('passwordca');
  let repeatpassword = document.getElementById('repeatpassword');

  function validarSenha() {
      if (passwordca.value !== repeatpassword.value) {
          repeatpassword.setCustomValidity("Senhas diferentes!");
          repeatpassword.reportValidity();
          return false;
      } else {
          repeatpassword.setCustomValidity("");
          return true;
      }
  }

  // Configuração do Botão Cadastrar
  const name = document.getElementById('name');
  const surname = document.getElementById('surname');
  const cpf = document.getElementById('cpf');
  const email = document.getElementById('email');
  const btnCadastrar = document.getElementById('cadastrar');

  // Função para verificar se todos os campos estão preenchidos
  function verificarCamposPreenchidos() {
      return name.value !== '' &&
             surname.value !== '' &&
             cpf.value !== '' &&
             email.value !== '' &&
             passwordca.value !== '' &&
             repeatpassword.value !== '';
  }

  // Função para habilitar ou desabilitar o botão de cadastro
  function atualizarEstadoBotaoCadastro() {
      btnCadastrar.disabled = !verificarCamposPreenchidos();
  }

  // Adicionando eventos de input para cada campo
  name.addEventListener('input', atualizarEstadoBotaoCadastro);
  surname.addEventListener('input', atualizarEstadoBotaoCadastro);
  cpf.addEventListener('input', atualizarEstadoBotaoCadastro);
  email.addEventListener('input', atualizarEstadoBotaoCadastro);
  passwordca.addEventListener('input', atualizarEstadoBotaoCadastro);
  repeatpassword.addEventListener('input', atualizarEstadoBotaoCadastro);

  // Função para enviar para o Google
  function enviarParaGoogle() {
      if (validarSenha()) {
          // Redireciona para o Google após 2 segundos
          setTimeout(function() {
              window.location.href = "index.html";
          }, 100);
      }
  }

  // Adicionando evento de clique ao botão de cadastro
  btnCadastrar.addEventListener("click", function() {
      if (verificarCamposPreenchidos()) {
          enviarParaGoogle();
      }
  });
});
