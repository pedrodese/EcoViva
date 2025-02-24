document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];

  const validUser = users.find(user => user.email === email && user.password === password);

  if (validUser) {
    Swal.fire({
      icon: 'success',
      title: `Bem-vindo, ${validUser.name}!`,
      text: 'Redirecionando...',
      showConfirmButton: false,
      timer: 2000
    }).then(() => {
      window.location.href = "../pages/home.html";
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Login Inválido',
      text: 'E-mail ou senha incorretos. Tente novamente.',
    });
  }
});
