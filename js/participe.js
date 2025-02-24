document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('participateForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value.trim();
  
      if (!name || !email || !subject || !message) {
        Swal.fire({
          icon: 'error',
          title: 'Campos Incompletos',
          text: 'Por favor, preencha todos os campos antes de enviar!',
        });
        return;
      }
  
      Swal.fire({
        icon: 'success',
        title: 'Mensagem Enviada!',
        text: 'Obrigado por participar. Responderemos em breve!',
      });
  
      form.reset();
    });
  });
  