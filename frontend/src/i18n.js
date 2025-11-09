import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      // ===== Navbar =====
      navbarSignup: "Cadastre-se",
      navHome: "Início",
      navSobre: "Sobre",
      navDoacoes: "Doações",
      navContato: "Contato",
      navIdioma: "Idioma",
      navLogin: "Entrar",

      // ===== Hero =====
      heroTitle: "Faça parte da mudança!",
      heroText:
        "Cadastre seu grupo e participe de ações que ajudam quem precisa, conectando voluntários, mentores e doações.",
      heroSubtext:
        "Cadastre-se agora e comece a contribuir como voluntário, mentor ou doador.",
      btnAluno: "Aluno",
      btnMentor: "Mentor",
      btnDoador: "Doador",

      // ===== Footer =====
      logoLiderancasAlt: "Logo Lideranças",
      logoCybersirensAlt: "Logo CyberSirens",
      footerNavTitle: "NAVEGAÇÃO",
      footerNavInicio: "Início",
      footerNavSobre: "Sobre Nós",
      footerNavProjetos: "Projetos",
      footerNavBlog: "Blog/Notícias",
      footerContatoTitle: "CONTATO",
      footerContatoEndereco: "Avenida Liberdade, 552",
      footerRedesTitle: "REDES SOCIAIS",
      footerLinkedin: "Linkedin",
      footerInstagram: "Instagram",
      footerCopy: "Lideranças Empáticas — Todos os direitos reservados.",

      // ===== Login / Cadastro =====
      loginTitulo: "Bem-vindo de volta!",
      loginEmail: "E-mail",
      loginSenha: "Senha",
      loginEntrar: "Entrar",
      cadastroTitulo: "Crie sua conta",
      cadastroBtn: "Cadastrar",

      // ===== Dashboard Mentor =====
      mentorDashboardTitulo: "Painel do Mentor",
      mentorAtividades: "Atividades Recentes",
      mentorVerTodas: "Ver todas",
      mentorFiltroPeriodo: "Filtrar por período",
    },
  },

  en: {
    translation: {
      // ===== Navbar =====
      navbarSignup: "Sign up",
      navHome: "Home",
      navSobre: "About",
      navDoacoes: "Donations",
      navContato: "Contact",
      navIdioma: "Language",
      navLogin: "Login",

      // ===== Hero =====
      heroTitle: "Be part of the change!",
      heroText:
        "Register your group and join actions that help those in need, connecting volunteers, mentors, and donations.",
      heroSubtext:
        "Sign up now and start contributing as a volunteer, mentor, or donor.",
      btnAluno: "Student",
      btnMentor: "Mentor",
      btnDoador: "Donor",

      // ===== Footer =====
      logoLiderancasAlt: "Lideranças Logo",
      logoCybersirensAlt: "CyberSirens Logo",
      footerNavTitle: "NAVIGATION",
      footerNavInicio: "Home",
      footerNavSobre: "About Us",
      footerNavProjetos: "Projects",
      footerNavBlog: "Blog/News",
      footerContatoTitle: "CONTACT",
      footerContatoEndereco: "Avenida Liberdade, 552",
      footerRedesTitle: "SOCIAL MEDIA",
      footerLinkedin: "LinkedIn",
      footerInstagram: "Instagram",
      footerCopy: "Lideranças Empáticas — All rights reserved.",

      // ===== Login / Cadastro =====
      loginTitulo: "Welcome back!",
      loginEmail: "Email",
      loginSenha: "Password",
      loginEntrar: "Login",
      cadastroTitulo: "Create your account",
      cadastroBtn: "Sign up",

      // ===== Dashboard Mentor =====
      mentorDashboardTitulo: "Mentor Dashboard",
      mentorAtividades: "Recent Activities",
      mentorVerTodas: "View all",
      mentorFiltroPeriodo: "Filter by date range",
    },
  },

  es: {
    translation: {
      // ===== Navbar =====
      navbarSignup: "Regístrate",
      navHome: "Inicio",
      navSobre: "Acerca de",
      navDoacoes: "Donaciones",
      navContato: "Contacto",
      navIdioma: "Idioma",
      navLogin: "Iniciar sesión",

      // ===== Hero =====
      heroTitle: "¡Sé parte del cambio!",
      heroText:
        "Registra tu grupo y participa en acciones que ayudan a quienes lo necesitan, conectando voluntarios, mentores y donaciones.",
      heroSubtext:
        "Regístrate ahora y comienza a contribuir como voluntario, mentor o donante.",
      btnAluno: "Alumno",
      btnMentor: "Mentor",
      btnDoador: "Donante",

      // ===== Footer =====
      logoLiderancasAlt: "Logo de Lideranças",
      logoCybersirensAlt: "Logo de CyberSirens",
      footerNavTitle: "NAVEGACIÓN",
      footerNavInicio: "Inicio",
      footerNavSobre: "Sobre Nosotros",
      footerNavProjetos: "Proyectos",
      footerNavBlog: "Blog/Noticias",
      footerContatoTitle: "CONTACTO",
      footerContatoEndereco: "Avenida Liberdade, 552",
      footerRedesTitle: "REDES SOCIALES",
      footerLinkedin: "LinkedIn",
      footerInstagram: "Instagram",
      footerCopy: "Lideranças Empáticas — Todos los derechos reservados.",

      // ===== Login / Cadastro =====
      loginTitulo: "¡Bienvenido de nuevo!",
      loginEmail: "Correo electrónico",
      loginSenha: "Contraseña",
      loginEntrar: "Entrar",
      cadastroTitulo: "Crea tu cuenta",
      cadastroBtn: "Registrarse",

      // ===== Dashboard Mentor =====
      mentorDashboardTitulo: "Panel del Mentor",
      mentorAtividades: "Actividades Recientes",
      mentorVerTodas: "Ver todas",
      mentorFiltroPeriodo: "Filtrar por periodo",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt", // idioma padrão
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
