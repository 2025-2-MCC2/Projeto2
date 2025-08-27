const btnCadastro = document.getElementById('btn-cadastro');
const dropdownMenu = document.getElementById('dropdown-menu');

btnCadastro.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', (e) => {
  if (!btnCadastro.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.style.display = 'none';
  }
});