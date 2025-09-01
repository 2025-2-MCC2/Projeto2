// script.js

// Exemplo: mensagem no console só pra confirmar que está funcionando
console.log("Script carregado! 🚀");

// Caso queira deixar o dropdown abrir só ao clicar (em vez de hover)
document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.querySelector(".dropdown .btn");
  const dropdownContent = document.querySelector(".dropdown-content");

  if (dropdownBtn && dropdownContent) {
    dropdownBtn.addEventListener("click", (e) => {
      e.preventDefault();
      dropdownContent.classList.toggle("show");
    });

    // Fecha o dropdown se clicar fora
    document.addEventListener("click", (e) => {
      if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
        dropdownContent.classList.remove("show");
      }
    });
  }
});

