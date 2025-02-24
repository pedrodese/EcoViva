document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (!name || !email || !password || !confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Campos Incompletos',
        text: 'Por favor, preencha todos os campos.',
      });
      return;
    }
  
    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Senhas Diferentes',
        text: 'As senhas não coincidem. Tente novamente.',
      });
      return;
    }
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    const userExists = users.find(user => user.email === email);
  
    if (userExists) {
      Swal.fire({
        icon: 'error',
        title: 'E-mail Já Cadastrado',
        text: 'O e-mail informado já está registrado.',
      });
      return;
    }
  
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
  
    Swal.fire({
      icon: 'success',
      title: 'Cadastro Realizado!',
      text: 'Você pode agora fazer login.',
      confirmButtonText: 'Ir para Login',
    }).then(() => {
      window.location.href = 'login.html';
    });
  });
  