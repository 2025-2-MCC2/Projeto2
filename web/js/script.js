// Dropdowns
document.addEventListener("DOMContentLoaded", () => {
  const langArrow = document.querySelector(".language-dropdown .arrow");
  const langOptions = document.querySelector(".language-options");

  langArrow.addEventListener("click", () => {
      langOptions.classList.toggle("show");
  });

  const signupArrow = document.querySelector(".signup-dropdown .arrow");
  const signupOptions = document.querySelector(".signup-options");

  signupArrow.addEventListener("click", () => {
      signupOptions.classList.toggle("show");
  });

  // Fecha ao clicar fora
  document.addEventListener("click", (e) => {
      if (!e.target.closest(".language-dropdown")) langOptions.classList.remove("show");
      if (!e.target.closest(".signup-dropdown")) signupOptions.classList.remove("show");
  });
});
