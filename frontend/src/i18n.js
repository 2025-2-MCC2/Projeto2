import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Defina aqui os textos para cada idioma
const resources = {
  pt: {
    translation: {
      heroTitle: "Faça parte da mudança!",
      heroText: "Cadastre seu grupo e participe de ações que ajudam quem precisa, conectando voluntários, mentores e doações.",
      heroSubtext: "Cadastre-se agora e comece a contribuir como voluntário, mentor ou doador",
      btnAluno: "Aluno",
      btnMentor: "Mentor",
      btnDoador: "Doador",
    },
  },
  en: {
    translation: {
      heroTitle: "Be part of the change!",
      heroText: "Register your group and participate in actions that help those in need, connecting volunteers, mentors, and donations.",
      heroSubtext: "Sign up now and start contributing as a volunteer, mentor, or donor",
      btnAluno: "Student",
      btnMentor: "Mentor",
      btnDoador: "Donor",
    },
  },
  es: {
    translation: {
      heroTitle: "¡Sé parte del cambio!",
      heroText: "Registra tu grupo y participa en acciones que ayudan a quienes lo necesitan, conectando voluntarios, mentores y donaciones.",
      heroSubtext: "Regístrate ahora y comienza a contribuir como voluntario, mentor o donante",
      btnAluno: "Alumno",
      btnMentor: "Mentor",
      btnDoador: "Donante",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt", // idioma padrão
  fallbackLng: "pt",
  interpolation: {escapeValue: false},
});

export default i18n;
