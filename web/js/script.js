// Login simples fake
const formLogin = document.getElementById('formLogin');
const mensagemLogin = document.getElementById('mensagemLogin');

if(formLogin){
  formLogin.addEventListener('submit', function(e){
    e.preventDefault();
    const usuario = formLogin.usuario.value;

    if(usuario.toLowerCase().includes('mentor')){
      window.location.href = 'mentor.html';
    } else {
      window.location.href = 'voluntario.html';
    }
  });
}