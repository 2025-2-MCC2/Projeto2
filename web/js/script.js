// Dropdown abre/fecha no clique e fecha ao clicar fora
const btnCadastro = document.getElementById('btn-cadastro');
const dropdownMenu = document.getElementById('dropdown-menu');

if (btnCadastro && dropdownMenu) {
  btnCadastro.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdownMenu.style.display === 'block';
    dropdownMenu.style.display = isOpen ? 'none' : 'block';
    btnCadastro.setAttribute('aria-expanded', String(!isOpen));
  });

  window.addEventListener('click', (e) => {
    if (!dropdownMenu.contains(e.target) && !btnCadastro.contains(e.target)) {
      dropdownMenu.style.display = 'none';
      btnCadastro.setAttribute('aria-expanded', 'false');
    }
  });

  // Acessibilidade: ESC fecha
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdownMenu.style.display = 'none';
      btnCadastro.setAttribute('aria-expanded', 'false');
    }
  });
}