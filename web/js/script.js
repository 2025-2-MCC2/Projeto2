document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os dropdowns
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(drop => {
    const btn = drop.querySelector("button");
    const menu = drop.querySelector(".dropdown-content");

    // Abre/fecha ao clicar no botão
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // evita fechar imediatamente
      menu.classList.toggle("show");
    });
  });

  // Fecha todos os dropdowns ao clicar fora
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-content").forEach(menu => {
      menu.classList.remove("show");
    });
  });
});
