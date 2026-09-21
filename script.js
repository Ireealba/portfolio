/* =========================================================
   1) TEXTOS DE LA INTERFAZ (ES / EN)
   ========================================================= */
const dict = {
  es: {
    nav_about: "Sobre mí",
    nav_projects: "Proyectos",
    nav_skills: "Habilidades",
    nav_contact: "Contacto",

    hero_kicker: "Desarrolladora de videojuegos · Unity",
    hero_title: 'Construyo mundos <span class="hero-highlight">jugables</span> desde Córdoba',
    hero_lede: "Estudiante y desarrolladora en Unity. Me muevo entre el terror en primera persona y la vida tranquila de un pueblo lleno de monstruos — y disfruto igual programando la IA de un enemigo que el sistema de cariño de una mascota.",
    btn_projects: "Ver proyectos",
    btn_contact: "Hablemos",

    about_kicker: "Sobre mí",
    about_title: "De clase de diseño a la sala de máquinas del motor",
    about_p1: "Combino proyectos en solitario con trabajo en equipo dentro de mis estudios. Me interesa especialmente la arquitectura del código tanto como el diseño del juego: máquinas de estados, eventos desacoplados y sistemas que un equipo entero pueda entender y ampliar sin miedo a romper nada.",
    about_p2: "Cuando no estoy dentro del editor de Unity, suelo estar pensando en la narrativa de mi próximo proyecto o revisando cómo otros juegos resuelven un problema que tengo entre manos.",
    about_photo_placeholder: "Tu foto aquí",
    about_fact_engine_label: "Motor",
    about_fact_lang_label: "Lenguaje",
    about_fact_edu_label: "Formación",
    about_fact_edu_value: "Estudiante de desarrollo de videojuegos",

    projects_kicker: "Proyectos",
    projects_title: "Lo que he construido",
    projects_lede: "Una selección de proyectos en solitario y equipo.",
    project_cover_placeholder: "Carátula del juego",
    project_view: "Ver proyecto",
    project_future_kicker: "Próximamente",
    project_future_text: "Nuevos proyectos en desarrollo. Vuelve pronto para verlos.",

    skills_kicker: "Habilidades",
    skills_title: "La caja de herramientas",
    skill_group_lang: "Lenguajes",
    skill_group_engine: "Motor y render",
    skill_group_arch: "Arquitectura",
    skill_group_tools: "Herramientas",
    skill_fsm: "Máquinas de estados (FSM)",
    skill_events: "Eventos desacoplados",
    skill_observer: "Patrón Observer",
    skill_pooling: "Pooling de objetos",
    skill_teamwork: "Trabajo en equipo",

    contact_kicker: "Contacto",
    contact_title: "¿Hacemos algo juntos?",
    contact_lede: "Abierta a colaboraciones, prácticas y proyectos en equipo.",

    footer_text: "Hecho con Unity, café y demasiadas ventanas de consola abiertas.",

    modal_date: "Fecha",
    modal_studio: "Estudio / equipo",
    modal_role: "Rol",
    modal_about: "Sobre el juego",
    modal_contribution_solo: "Mecánicas destacadas",
    modal_contribution_team: "Mi aportación",
    modal_try: "Pruébalo",
    modal_close: "Cerrar",

    tag_solo: "En solitario",
    tag_team: "En equipo",
    tag_jam: "Game Jam"
  },

  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",

    hero_kicker: "Game Developer · Unity",
    hero_title: 'I build <span class="hero-highlight">playable</span> worlds from Córdoba',
    hero_lede: "Student and Unity developer. I move between first-person horror and the slow life of a town full of monsters — and I enjoy programming an enemy's AI as much as a pet's affection system.",
    btn_projects: "View projects",
    btn_contact: "Get in touch",

    about_kicker: "About me",
    about_title: "From the design classroom to the engine's engine room",
    about_p1: "I combine solo projects with team work throughout my studies. I care about code architecture as much as game design: state machines, decoupled events, and systems a whole team can understand and extend without fear of breaking anything.",
    about_p2: "When I'm not inside the Unity editor, I'm usually thinking about my next project's narrative or looking at how other games solve a problem I'm currently facing.",
    about_photo_placeholder: "Your photo here",
    about_fact_engine_label: "Engine",
    about_fact_lang_label: "Language",
    about_fact_edu_label: "Education",
    about_fact_edu_value: "Game development student",

    projects_kicker: "Projects",
    projects_title: "What I've built",
    projects_lede: "A selection of solo and team projects.",
    project_cover_placeholder: "Game cover art",
    project_view: "View project",
    project_future_kicker: "Coming soon",
    project_future_text: "New projects in the works. Check back soon.",

    skills_kicker: "Skills",
    skills_title: "The toolbox",
    skill_group_lang: "Languages",
    skill_group_engine: "Engine & rendering",
    skill_group_arch: "Architecture",
    skill_group_tools: "Tools",
    skill_fsm: "State machines (FSM)",
    skill_events: "Decoupled events",
    skill_observer: "Observer pattern",
    skill_pooling: "Object pooling",
    skill_teamwork: "Teamwork",

    contact_kicker: "Contact",
    contact_title: "Want to build something together?",
    contact_lede: "Open to collaborations, internships and team projects.",

    footer_text: "Made with Unity, coffee and too many open console windows.",

    modal_date: "Date",
    modal_studio: "Studio / team",
    modal_role: "Role",
    modal_about: "About the game",
    modal_contribution_solo: "Notable mechanics",
    modal_contribution_team: "My contribution",
    modal_try: "Try it out",
    modal_close: "Close",

    tag_solo: "Solo",
    tag_team: "Team",
    tag_jam: "Game Jam"
  }
};

/* =========================================================
   2) DATOS DE PROYECTOS
   PLACEHOLDER: sustituye cada campo por la información real
   de tu juego. "cover" y "gallery" son rutas a imágenes/vídeos
   (ver README para dónde colocarlas); de momento se muestran
   como bloques de color con texto.
   ========================================================= */
const projects = [
  {
    id: "proyecto-1",
    cover: null,          // PLACEHOLDER: "img/proyecto-1-cover.jpg"
    mode: "solo",         // "solo" | "team"
    jam: false,
    date: "[Fecha]",
    studio: "[Estudio o equipo]",
    role: "[Tu rol / roles]",
    link: "#",            // PLACEHOLDER: enlace a la página del juego en GitHub
    gallery: [null, null], // PLACEHOLDER: ["img/proyecto-1-1.jpg", "img/proyecto-1-2.mp4"]
    es: {
      title: "[Nombre del proyecto]",
      shortDesc: "Una frase describiendo de qué trata el juego y qué lo hace interesante.",
      longDesc: "Descripción más extensa del juego: género, ambientación y qué lo hace especial.",
      workDesc: "Mecánicas destacadas que implementaste, o tu aportación si fue un proyecto en equipo."
    },
    en: {
      title: "[Project name]",
      shortDesc: "A sentence describing what the game is about and what makes it interesting.",
      longDesc: "A longer description of the game: genre, setting and what makes it special.",
      workDesc: "Notable mechanics you implemented, or your contribution if it was a team project."
    }
  },
  {
    id: "proyecto-2",
    cover: null,
    mode: "team",
    jam: false,
    date: "[Fecha]",
    studio: "[Estudio o equipo]",
    role: "[Tu rol / roles]",
    link: "#",
    gallery: [null, null],
    es: {
      title: "[Nombre del proyecto]",
      shortDesc: "Una frase describiendo de qué trata el juego y qué lo hace interesante.",
      longDesc: "Descripción más extensa del juego: género, ambientación y qué lo hace especial.",
      workDesc: "Mecánicas destacadas que implementaste, o tu aportación si fue un proyecto en equipo."
    },
    en: {
      title: "[Project name]",
      shortDesc: "A sentence describing what the game is about and what makes it interesting.",
      longDesc: "A longer description of the game: genre, setting and what makes it special.",
      workDesc: "Notable mechanics you implemented, or your contribution if it was a team project."
    }
  },
  {
    id: "proyecto-3",
    cover: null,
    mode: "solo",
    jam: true,
    date: "[Fecha]",
    studio: "[Estudio o equipo]",
    role: "[Tu rol / roles]",
    link: "#",
    gallery: [null],
    es: {
      title: "[Nombre del proyecto]",
      shortDesc: "Una frase describiendo de qué trata el juego y qué lo hace interesante.",
      longDesc: "Descripción más extensa del juego: género, ambientación y qué lo hace especial.",
      workDesc: "Mecánicas destacadas que implementaste, o tu aportación si fue un proyecto en equipo."
    },
    en: {
      title: "[Project name]",
      shortDesc: "A sentence describing what the game is about and what makes it interesting.",
      longDesc: "A longer description of the game: genre, setting and what makes it special.",
      workDesc: "Notable mechanics you implemented, or your contribution if it was a team project."
    }
  },
  {
    id: "proyecto-4",
    cover: null,
    mode: "team",
    jam: false,
    date: "[Fecha]",
    studio: "[Estudio o equipo]",
    role: "[Tu rol / roles]",
    link: "#",
    gallery: [null, null, null],
    es: {
      title: "[Nombre del proyecto]",
      shortDesc: "Una frase describiendo de qué trata el juego y qué lo hace interesante.",
      longDesc: "Descripción más extensa del juego: género, ambientación y qué lo hace especial.",
      workDesc: "Mecánicas destacadas que implementaste, o tu aportación si fue un proyecto en equipo."
    },
    en: {
      title: "[Project name]",
      shortDesc: "A sentence describing what the game is about and what makes it interesting.",
      longDesc: "A longer description of the game: genre, setting and what makes it special.",
      workDesc: "Notable mechanics you implemented, or your contribution if it was a team project."
    }
  }
];

/* =========================================================
   3) ESTADO
   ========================================================= */
let currentLang = "es";
let currentCarouselIndex = 0;
let openProjectId = null;

/* =========================================================
   4) i18n: aplica el diccionario a toda la página
   ========================================================= */
function applyI18n(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[lang][key] !== undefined) el.textContent = dict[lang][key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[lang][key] !== undefined) el.innerHTML = dict[lang][key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[lang][key] !== undefined) el.setAttribute("aria-label", dict[lang][key]);
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function setLanguage(lang) {
  currentLang = lang;
  applyI18n(lang);
  renderProjects(lang);
  if (openProjectId) fillModal(openProjectId, lang);
}

/* =========================================================
   5) TARJETAS DE PROYECTO
   ========================================================= */
function renderProjects(lang) {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;
  grid.innerHTML = "";

  projects.forEach((project, index) => {
    const t = project[lang];
    const layoutClass = index % 2 === 0 ? "project-a" : "project-b";
    const thumbClass = `thumb-${(index % 4) + 1}`;

    const card = document.createElement("article");
    card.className = `project ${layoutClass}`;

    const coverHtml = project.cover
      ? `<img src="${project.cover}" alt="${t.title}">`
      : `<span>${dict[lang].project_cover_placeholder}</span>`;

    const modeTagText = project.mode === "solo" ? dict[lang].tag_solo : dict[lang].tag_team;
    const jamTagHtml = project.jam ? `<li class="tag-jam">${dict[lang].tag_jam}</li>` : "";

    card.innerHTML = `
      <div class="project-thumb placeholder-thumb ${thumbClass}">
        ${coverHtml}
      </div>
      <div class="project-copy">
        <h3>${t.title}</h3>
        <p>${t.shortDesc}</p>
        <ul class="project-tags">
          <li>Unity</li>
          <li>C#</li>
          <li>gamedev</li>
          <li>gamedesign</li>
          <li class="tag-mode">${modeTagText}</li>
          ${jamTagHtml}
        </ul>
        <button type="button" class="btn btn-ghost project-link-btn" data-project-id="${project.id}">
          ${dict[lang].project_view}
        </button>
      </div>
    `;

    grid.appendChild(card);
  });

  grid.querySelectorAll(".project-link-btn").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.projectId));
  });
}

/* =========================================================
   6) MODAL + CARRUSEL
   ========================================================= */
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const carouselTrack = document.getElementById("carouselTrack");
const carouselDots = document.getElementById("carouselDots");
const carouselPrev = document.getElementById("carouselPrev");
const carouselNext = document.getElementById("carouselNext");

function openModal(projectId) {
  openProjectId = projectId;
  currentCarouselIndex = 0;
  fillModal(projectId, currentLang);
  modalOverlay.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.hidden = true;
  openProjectId = null;
  document.body.style.overflow = "";
}

function fillModal(projectId, lang) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;
  const t = project[lang];

  document.getElementById("modalTitle").textContent = t.title;
  document.getElementById("modalDate").textContent = project.date;
  document.getElementById("modalStudio").textContent = project.studio;
  document.getElementById("modalRole").textContent = project.role;
  document.getElementById("modalLongDesc").textContent = t.longDesc;
  document.getElementById("modalWorkDesc").textContent = t.workDesc;
  document.getElementById("modalWorkLabel").textContent =
    project.mode === "solo" ? dict[lang].modal_contribution_solo : dict[lang].modal_contribution_team;
  document.getElementById("modalLink").href = project.link;

  const modeTagText = project.mode === "solo" ? dict[lang].tag_solo : dict[lang].tag_team;
  const jamTagHtml = project.jam ? `<li class="tag-jam">${dict[lang].tag_jam}</li>` : "";
  document.getElementById("modalTags").innerHTML = `
    <li>Unity</li>
    <li>C#</li>
    <li>gamedev</li>
    <li>gamedesign</li>
    <li class="tag-mode">${modeTagText}</li>
    ${jamTagHtml}
  `;

  renderCarousel(project, lang);
}

function renderCarousel(project, lang) {
  carouselTrack.innerHTML = "";
  carouselDots.innerHTML = "";

  const items = project.gallery && project.gallery.length ? project.gallery : [null];

  items.forEach((src, i) => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";
    slide.style.background = ["var(--accent-berry)", "var(--accent-moss)", "var(--accent-honey)", "var(--ink-soft)"][i % 4];

    if (src) {
      const isVideo = /\.(mp4|webm|mov)$/i.test(src);
      slide.innerHTML = isVideo
        ? `<video src="${src}" controls></video>`
        : `<img src="${src}" alt="">`;
      slide.style.background = "transparent";
    } else {
      slide.innerHTML = `<span>${dict[lang].project_cover_placeholder} ${i + 1}</span>`;
    }
    carouselTrack.appendChild(slide);

    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    carouselDots.appendChild(dot);
  });

  const showNav = items.length > 1;
  carouselPrev.style.display = showNav ? "flex" : "none";
  carouselNext.style.display = showNav ? "flex" : "none";

  updateCarouselPosition();
}

function updateCarouselPosition() {
  carouselTrack.style.transform = `translateX(-${currentCarouselIndex * 100}%)`;
  carouselDots.querySelectorAll("span").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentCarouselIndex);
  });
}

function moveCarousel(direction) {
  const slideCount = carouselTrack.children.length;
  if (!slideCount) return;
  currentCarouselIndex = (currentCarouselIndex + direction + slideCount) % slideCount;
  updateCarouselPosition();
}

if (modalClose) modalClose.addEventListener("click", closeModal);
if (modalOverlay) {
  modalOverlay.addEventListener("click", e => {
    if (e.target === modalOverlay) closeModal();
  });
}
if (carouselPrev) carouselPrev.addEventListener("click", () => moveCarousel(-1));
if (carouselNext) carouselNext.addEventListener("click", () => moveCarousel(1));

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !modalOverlay.hidden) closeModal();
});

/* =========================================================
   7) SELECTOR DE IDIOMA
   ========================================================= */
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

/* =========================================================
   8) MENÚ MÓVIL
   ========================================================= */
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* =========================================================
   9) AÑO AUTOMÁTICO EN EL FOOTER
   ========================================================= */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* =========================================================
   10) INICIALIZACIÓN
   ========================================================= */
renderProjects(currentLang);
