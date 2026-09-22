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
    about_fact_engine_label: "Motor",
    about_fact_lang_label: "Lenguaje",
    about_fact_edu_label: "Formación",
    about_fact_edu_value: "Estudiante de desarrollo de videojuegos",

    projects_kicker: "Proyectos",
    projects_title: "Lo que he construido",
    projects_lede: "Una selección de proyectos en solitario y equipo.",
    project_cover_placeholder: "Carátula del juego",
    project_view: "Ver proyecto",
    sort_newest: "Más nuevo primero",
    sort_oldest: "Más antiguo primero",

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

    modal_date: "Fecha de creación",
    modal_date_updated: "Última actualización",
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
    about_fact_engine_label: "Engine",
    about_fact_lang_label: "Language",
    about_fact_edu_label: "Education",
    about_fact_edu_value: "Game development student",

    projects_kicker: "Projects",
    projects_title: "What I've built",
    projects_lede: "A selection of solo and team projects.",
    project_cover_placeholder: "Game cover art",
    project_view: "View project",
    sort_newest: "Newest first",
    sort_oldest: "Oldest first",

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

    modal_date: "Creation date",
    modal_date_updated: "Last updated",
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
   Cada proyecto nuevo va aquí arriba de la lista (el orden
   visual en pantalla lo decide getSortedProjects() a partir
   de "dateCreated", no la posición en este array).

   Campos:
   - cover: ruta a la carátula. Solo se ve en la tarjeta
     cerrada; el modal usa "gallery".
   - gallery: array de rutas, en el orden en que se ven en el
     carrusel del modal (vídeos .mp4/.webm/.mov o imágenes).
   - mode: "solo" | "team". Si es "solo", el campo "studio" no
     se muestra en el modal (déjalo en null).
   - dateCreated / dateUpdated: formato "MM/YYYY".
   - tags: etiquetas propias de este proyecto (además de las
     fijas Unity/C#/gamedev/gamedesign que se añaden solas).
   - es/en: título, rol, descripción corta, descripción larga
     y mecánicas destacadas (o aportación si es en equipo), en
     cada idioma.
   ========================================================= */
const projects = [
    {
      id: "roborunner",
      // PLACEHOLDER de ruta: coloca las imágenes/vídeo en img/roborunner/ (ver mensaje del asistente)
      cover: "img/roborunner/Roborunner0.png",
      mode: "solo",          // "solo" | "team"
      jam: false,
      dateCreated: "12/2025",
      dateUpdated: "12/2025",
      studio: null,           // proyecto en solitario: no se muestra estudio/equipo
      link: "https://raccoonindiegamedev.itch.io/roborunner",
      tags: ["2D", "Endless runner"], // etiquetas propias del proyecto, además de las fijas
      gallery: [
        "img/roborunner/RoborunnerTrailer.mp4",
        "img/roborunner/Roborunner1.png",
        "img/roborunner/Roborunner2.png",
        "img/roborunner/Roborunner3.png",
        "img/roborunner/Roborunner4.png",
        "img/roborunner/Roborunner5.png"
      ],
      es: {
        title: "Roborunner",
        role: "Diseño y desarrollo",
        shortDesc: "No dejes que el robot de seguridad te pille.",
        longDesc: "En esta aventura endless runner 2D eres H3C10r, un robot que fue inventado para entretener y ayudar a la gente en las recreativas, pero con un defecto: ha adquirido consciencia. El guardia de seguridad hará todo lo posible por atraparlo y llevarlo a desmantelación, así que no le queda otra que correr y huir, porque como se detenga un solo instante será su fin. El arte de los personajes y los escenarios es de Denis Bezmaternykh, el arte del HUD viene de la Asset Store, y el resto del arte lo he hecho yo.",
        workDesc: "Generación dinámica de escenarios: hay varios tramos de nivel ya creados que se van encadenando solos de forma aleatoria pero siguiendo una lógica por tipo de escenario (por ejemplo, el escenario 1.1 solo puede ir seguido del 1.2, nunca del 1.3 o del 2.1). Power-ups que cambian la jugabilidad principal, sistema de tienda para comprar mejoras y sistema de misiones que recompensan al jugador."
      },
      en: {
        title: "Roborunner",
        role: "Design & development",
        shortDesc: "2D pixel-art endless runner with a retro look.",
        longDesc: "In this 2D endless runner you play as H3C10r, a robot built to entertain and help people at the arcade — with one flaw: he's become self-aware. The security guard will do everything he can to catch him and send him to be dismantled, so his only option is to run and keep running, because stopping for even a moment means the end. Character and environment art by Denis Bezmaternykh, HUD art from the Asset Store, and everything else made by me.",
        workDesc: "Dynamic level generation: several pre-built level chunks are chained together randomly but following logic by chunk type (for example, chunk 1.1 can only be followed by chunk 1.2, never by 1.3 or 2.1). Power-ups that change the core gameplay, a shop system to buy upgrades, and a mission system that rewards the player."
      }
    },
    {
      id: "callofpomni",
      // PLACEHOLDER de ruta: coloca las imágenes/vídeo en img/roborunner/ (ver mensaje del asistente)
      cover: "img/callofpomni/CallofPomni0.png",
      mode: "solo",          // "solo" | "team"
      jam: false,
      dateCreated: "3/2026",
      dateUpdated: "3/2026",
      studio: null,           // proyecto en solitario: no se muestra estudio/equipo
      link: "https://raccoonindiegamedev.itch.io/call-of-pomni",
      tags: ["3D", "Dual Stick Shooter"], // etiquetas propias del proyecto, además de las fijas
      gallery: [
        "img/callofpomni/CallofPomniTrailer.mp4",
        "img/callofpomni/CallofPomni1.png",
        "img/callofpomni/CallofPomni2.png",
        "img/callofpomni/CallofPomni3.png",
        "img/callofpomni/CallofPomni4.png",
        "img/callofpomni/CallofPomni5.png"
      ],
      es: {
        title: "Call of Pomni",
        role: "Diseño y desarrollo",
        shortDesc: "Aguanta las máximas oleadas posibles e intenta volver al circo digital.",
        longDesc: "En esta aventura endless runner 2D eres H3C10r, un robot que fue inventado para entretener y ayudar a la gente en las recreativas, pero con un defecto: ha adquirido consciencia. El guardia de seguridad hará todo lo posible por atraparlo y llevarlo a desmantelación, así que no le queda otra que correr y huir, porque como se detenga un solo instante será su fin. El arte de los personajes y los escenarios es de Denis Bezmaternykh, el arte del HUD viene de la Asset Store, y el resto del arte lo he hecho yo.",
        workDesc: "Generación dinámica de escenarios: hay varios tramos de nivel ya creados que se van encadenando solos de forma aleatoria pero siguiendo una lógica por tipo de escenario (por ejemplo, el escenario 1.1 solo puede ir seguido del 1.2, nunca del 1.3 o del 2.1). Power-ups que cambian la jugabilidad principal, sistema de tienda para comprar mejoras y sistema de misiones que recompensan al jugador."
      },
      en: {
        title: "Roborunner",
        role: "Design & development",
        shortDesc: "2D pixel-art endless runner with a retro look.",
        longDesc: "In this 2D endless runner you play as H3C10r, a robot built to entertain and help people at the arcade — with one flaw: he's become self-aware. The security guard will do everything he can to catch him and send him to be dismantled, so his only option is to run and keep running, because stopping for even a moment means the end. Character and environment art by Denis Bezmaternykh, HUD art from the Asset Store, and everything else made by me.",
        workDesc: "Dynamic level generation: several pre-built level chunks are chained together randomly but following logic by chunk type (for example, chunk 1.1 can only be followed by chunk 1.2, never by 1.3 or 2.1). Power-ups that change the core gameplay, a shop system to buy upgrades, and a mission system that rewards the player."
      }
    },
    {
      id: "trespasser",
      // PLACEHOLDER de ruta: coloca las imágenes/vídeo en img/roborunner/ (ver mensaje del asistente)
      cover: "img/trespasser/Trespasser0.png",
      mode: "solo",          // "solo" | "team"
      jam: false,
      dateCreated: "6/2026",
      dateUpdated: "6/2026",
      studio: null,           // proyecto en solitario: no se muestra estudio/equipo
      link: "https://raccoonindiegamedev.itch.io/trespasser",
      tags: ["3D", "First Person Adventure"], // etiquetas propias del proyecto, además de las fijas
      gallery: [
        "img/trespasser/TrespasserTrailer.mp4",
        "img/trespasser/Trespasser1.png",
        "img/trespasser/Trespasser2.png",
        "img/trespasser/Trespasser3.png",
        "img/trespasser/Trespasser4.png",
        "img/trespasser/Trespasser5.png"
      ],
      es: {
        title: "Trespasser",
        role: "Diseño y desarrollo",
        shortDesc: "Explora el hospital abandonado y consigue las mejores fotos en el proceso.",
        longDesc: "En esta aventura endless runner 2D eres H3C10r, un robot que fue inventado para entretener y ayudar a la gente en las recreativas, pero con un defecto: ha adquirido consciencia. El guardia de seguridad hará todo lo posible por atraparlo y llevarlo a desmantelación, así que no le queda otra que correr y huir, porque como se detenga un solo instante será su fin. El arte de los personajes y los escenarios es de Denis Bezmaternykh, el arte del HUD viene de la Asset Store, y el resto del arte lo he hecho yo.",
        workDesc: "Generación dinámica de escenarios: hay varios tramos de nivel ya creados que se van encadenando solos de forma aleatoria pero siguiendo una lógica por tipo de escenario (por ejemplo, el escenario 1.1 solo puede ir seguido del 1.2, nunca del 1.3 o del 2.1). Power-ups que cambian la jugabilidad principal, sistema de tienda para comprar mejoras y sistema de misiones que recompensan al jugador."
      },
      en: {
        title: "Roborunner",
        role: "Design & development",
        shortDesc: "2D pixel-art endless runner with a retro look.",
        longDesc: "In this 2D endless runner you play as H3C10r, a robot built to entertain and help people at the arcade — with one flaw: he's become self-aware. The security guard will do everything he can to catch him and send him to be dismantled, so his only option is to run and keep running, because stopping for even a moment means the end. Character and environment art by Denis Bezmaternykh, HUD art from the Asset Store, and everything else made by me.",
        workDesc: "Dynamic level generation: several pre-built level chunks are chained together randomly but following logic by chunk type (for example, chunk 1.1 can only be followed by chunk 1.2, never by 1.3 or 2.1). Power-ups that change the core gameplay, a shop system to buy upgrades, and a mission system that rewards the player."
      }
    },
    {
      id: "goodnightmom",
      // PLACEHOLDER de ruta: coloca las imágenes/vídeo en img/roborunner/ (ver mensaje del asistente)
      cover: "img/goodnightmom/GoodnightMom0.png",
      mode: "team",          // "solo" | "team"
      jam: true,
      dateCreated: "2/2026",
      dateUpdated: "2/2026",
      studio: null,           // proyecto en solitario: no se muestra estudio/equipo
      link: "https://sofia-vanh.itch.io/good-night-mom",
      tags: ["2D", "3D", "Casual", "Minigames"], // etiquetas propias del proyecto, además de las fijas
      gallery: [
        "img/goodnightmom/GoodnightMomTrailer.mp4",
        "img/goodnightmom/GoodnightMom1.png",
        "img/goodnightmom/GoodnightMom2.png",
        "img/goodnightmom/GoodnightMom3.png",
        "img/goodnightmom/GoodnightMom4.png",
        "img/goodnightmom/GoodnightMom5.png"
      ],
      es: {
        title: "Good Night Mom",
        role: "Diseño y desarrollo",
        shortDesc: "Juega con tu consola sin que te pille mamá.",
        longDesc: "En esta aventura endless runner 2D eres H3C10r, un robot que fue inventado para entretener y ayudar a la gente en las recreativas, pero con un defecto: ha adquirido consciencia. El guardia de seguridad hará todo lo posible por atraparlo y llevarlo a desmantelación, así que no le queda otra que correr y huir, porque como se detenga un solo instante será su fin. El arte de los personajes y los escenarios es de Denis Bezmaternykh, el arte del HUD viene de la Asset Store, y el resto del arte lo he hecho yo.",
        workDesc: "Generación dinámica de escenarios: hay varios tramos de nivel ya creados que se van encadenando solos de forma aleatoria pero siguiendo una lógica por tipo de escenario (por ejemplo, el escenario 1.1 solo puede ir seguido del 1.2, nunca del 1.3 o del 2.1). Power-ups que cambian la jugabilidad principal, sistema de tienda para comprar mejoras y sistema de misiones que recompensan al jugador."
      },
      en: {
        title: "Roborunner",
        role: "Design & development",
        shortDesc: "2D pixel-art endless runner with a retro look.",
        longDesc: "In this 2D endless runner you play as H3C10r, a robot built to entertain and help people at the arcade — with one flaw: he's become self-aware. The security guard will do everything he can to catch him and send him to be dismantled, so his only option is to run and keep running, because stopping for even a moment means the end. Character and environment art by Denis Bezmaternykh, HUD art from the Asset Store, and everything else made by me.",
        workDesc: "Dynamic level generation: several pre-built level chunks are chained together randomly but following logic by chunk type (for example, chunk 1.1 can only be followed by chunk 1.2, never by 1.3 or 2.1). Power-ups that change the core gameplay, a shop system to buy upgrades, and a mission system that rewards the player."
      }
    },
    {
      id: "monsterdiscofever",
      // PLACEHOLDER de ruta: coloca las imágenes/vídeo en img/roborunner/ (ver mensaje del asistente)
      cover: "img/monsterdiscofever/MonsterDiscoFever0.png",
      mode: "team",          // "solo" | "team"
      jam: true,
      dateCreated: "3/2026",
      dateUpdated: "3/2026",
      studio: null,           // proyecto en solitario: no se muestra estudio/equipo
      link: "https://raccoonindiegamedev.itch.io/monster-disco-fever",
      tags: ["2D", "3D", "Casual", "Minigames"], // etiquetas propias del proyecto, además de las fijas
      gallery: [
        "img/monsterdiscofever/MonsterDiscoFeverTrailer.mp4",
        "img/monsterdiscofever/MonsterDiscoFever1.png",
        "img/monsterdiscofever/MonsterDiscoFever2.png",
        "img/monsterdiscofever/MonsterDiscoFever3.png",
        "img/monsterdiscofever/MonsterDiscoFever4.png",
        "img/monsterdiscofever/MonsterDiscoFever5.png"
      ],
      es: {
        title: "Monster Disco Fever",
        role: "Diseño y desarrollo",
        shortDesc: "Controla que ningún monstruo entre a la discoteca sin permiso.",
        longDesc: "En esta aventura endless runner 2D eres H3C10r, un robot que fue inventado para entretener y ayudar a la gente en las recreativas, pero con un defecto: ha adquirido consciencia. El guardia de seguridad hará todo lo posible por atraparlo y llevarlo a desmantelación, así que no le queda otra que correr y huir, porque como se detenga un solo instante será su fin. El arte de los personajes y los escenarios es de Denis Bezmaternykh, el arte del HUD viene de la Asset Store, y el resto del arte lo he hecho yo.",
        workDesc: "Generación dinámica de escenarios: hay varios tramos de nivel ya creados que se van encadenando solos de forma aleatoria pero siguiendo una lógica por tipo de escenario (por ejemplo, el escenario 1.1 solo puede ir seguido del 1.2, nunca del 1.3 o del 2.1). Power-ups que cambian la jugabilidad principal, sistema de tienda para comprar mejoras y sistema de misiones que recompensan al jugador."
      },
      en: {
        title: "Roborunner",
        role: "Design & development",
        shortDesc: "2D pixel-art endless runner with a retro look.",
        longDesc: "In this 2D endless runner you play as H3C10r, a robot built to entertain and help people at the arcade — with one flaw: he's become self-aware. The security guard will do everything he can to catch him and send him to be dismantled, so his only option is to run and keep running, because stopping for even a moment means the end. Character and environment art by Denis Bezmaternykh, HUD art from the Asset Store, and everything else made by me.",
        workDesc: "Dynamic level generation: several pre-built level chunks are chained together randomly but following logic by chunk type (for example, chunk 1.1 can only be followed by chunk 1.2, never by 1.3 or 2.1). Power-ups that change the core gameplay, a shop system to buy upgrades, and a mission system that rewards the player."
      }
    },
    {
      id: "therisingodnecromancy",
      // PLACEHOLDER de ruta: coloca las imágenes/vídeo en img/roborunner/ (ver mensaje del asistente)
      cover: "img/therisingofnecromancy/TheRisingOfNecromancy0.png",
      mode: "team",          // "solo" | "team"
      jam: false,
      dateCreated: "9/2026",
      dateUpdated: "9/2026",
      studio: "Pinwu Studios",           // proyecto en solitario: no se muestra estudio/equipo
      link: null,
      tags: ["3D", "Roguelite", "Conquista"], // etiquetas propias del proyecto, además de las fijas
      gallery: [
        "img/therisingofnecromancy/TheRisingOfNecromancyTrailer.mp4",
        "img/therisingofnecromancy/TheRisingOfNecromancy1.png",
        "img/therisingofnecromancy/TheRisingOfNecromancy2.png",
        "img/therisingofnecromancy/TheRisingOfNecromancy3.png",
        "img/therisingofnecromancy/TheRisingOfNecromancy4.png",
        "img/therisingofnecromancy/TheRisingOfNecromancy5.png"
      ],
      es: {
        title: "The Rising of Necromancy",
        role: "Diseño y desarrollo",
        shortDesc: "Conquista todo el reino con tu ejercito de no muertos.",
        longDesc: "En esta aventura endless runner 2D eres H3C10r, un robot que fue inventado para entretener y ayudar a la gente en las recreativas, pero con un defecto: ha adquirido consciencia. El guardia de seguridad hará todo lo posible por atraparlo y llevarlo a desmantelación, así que no le queda otra que correr y huir, porque como se detenga un solo instante será su fin. El arte de los personajes y los escenarios es de Denis Bezmaternykh, el arte del HUD viene de la Asset Store, y el resto del arte lo he hecho yo.",
        workDesc: "Generación dinámica de escenarios: hay varios tramos de nivel ya creados que se van encadenando solos de forma aleatoria pero siguiendo una lógica por tipo de escenario (por ejemplo, el escenario 1.1 solo puede ir seguido del 1.2, nunca del 1.3 o del 2.1). Power-ups que cambian la jugabilidad principal, sistema de tienda para comprar mejoras y sistema de misiones que recompensan al jugador."
      },
      en: {
        title: "Roborunner",
        role: "Design & development",
        shortDesc: "2D pixel-art endless runner with a retro look.",
        longDesc: "In this 2D endless runner you play as H3C10r, a robot built to entertain and help people at the arcade — with one flaw: he's become self-aware. The security guard will do everything he can to catch him and send him to be dismantled, so his only option is to run and keep running, because stopping for even a moment means the end. Character and environment art by Denis Bezmaternykh, HUD art from the Asset Store, and everything else made by me.",
        workDesc: "Dynamic level generation: several pre-built level chunks are chained together randomly but following logic by chunk type (for example, chunk 1.1 can only be followed by chunk 1.2, never by 1.3 or 2.1). Power-ups that change the core gameplay, a shop system to buy upgrades, and a mission system that rewards the player."
      }
    }
  ];

/* =========================================================
   3) ESTADO
   ========================================================= */
let currentLang = "es";
let currentCarouselIndex = 0;
let openProjectId = null;
let sortDirection = "desc"; // "desc" = más nuevo primero, "asc" = más antiguo primero

/* Convierte "MM/YYYY" en un valor numérico comparable para ordenar */
function parseProjectDate(str) {
  const [month, year] = String(str).split("/").map(Number);
  return new Date(year || 0, (month || 1) - 1, 1).getTime();
}

function getSortedProjects() {
  const sorted = [...projects].sort((a, b) => parseProjectDate(a.dateCreated) - parseProjectDate(b.dateCreated));
  return sortDirection === "desc" ? sorted.reverse() : sorted;
}

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

  const flags = { es: "🇪🇸", en: "🇬🇧" };
  const langFlagCurrent = document.getElementById("langFlagCurrent");
  const langCodeCurrent = document.getElementById("langCodeCurrent");
  if (langFlagCurrent) langFlagCurrent.textContent = flags[lang];
  if (langCodeCurrent) langCodeCurrent.textContent = lang.toUpperCase();

  document.querySelectorAll("#langMenu li").forEach(li => {
    li.setAttribute("aria-selected", String(li.dataset.lang === lang));
  });
}

function setLanguage(lang) {
  currentLang = lang;
  applyI18n(lang);
  updateSortToggleLabel();
  renderProjects(lang);
  if (openProjectId) fillModal(openProjectId, lang);
}

/* =========================================================
   5) TARJETAS DE PROYECTO
   ========================================================= */
function buildTagsHtml(project, lang) {
  const customTags = (project.tags || []).map(tag => `<li>${tag}</li>`).join("");
  const modeTagText = project.mode === "solo" ? dict[lang].tag_solo : dict[lang].tag_team;
  const jamTagHtml = project.jam ? `<li class="tag-jam">${dict[lang].tag_jam}</li>` : "";
  return `
    ${customTags}
    <li>Unity</li>
    <li>C#</li>
    <li>gamedev</li>
    <li>gamedesign</li>
    <li class="tag-mode">${modeTagText}</li>
    ${jamTagHtml}
  `;
}

function renderProjects(lang) {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const sortedProjects = getSortedProjects();

  sortedProjects.forEach((project, index) => {
    const t = project[lang];
    const layoutClass = index % 2 === 0 ? "project-a" : "project-b";
    const thumbClass = `thumb-${(index % 4) + 1}`;

    const card = document.createElement("article");
    card.className = `project ${layoutClass}`;

    const coverHtml = project.cover
      ? `<img src="${project.cover}" alt="${t.title}">`
      : `<span>${dict[lang].project_cover_placeholder}</span>`;

    card.innerHTML = `
      <div class="project-thumb placeholder-thumb ${thumbClass}">
        ${coverHtml}
      </div>
      <div class="project-copy">
        <h2>${t.title}</h2>
        <p>${t.shortDesc}</p>
        <ul class="project-tags">
          ${buildTagsHtml(project, lang)}
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
  document.getElementById("modalDate").textContent = project.dateCreated;
  document.getElementById("modalDateUpdated").textContent = project.dateUpdated;

  const studioRow = document.getElementById("modalStudioRow");
  if (project.studio) {
    studioRow.style.display = "";
    document.getElementById("modalStudio").textContent = project.studio;
  } else {
    studioRow.style.display = "none";
  }

  document.getElementById("modalRole").textContent = t.role;
  document.getElementById("modalLongDesc").textContent = t.longDesc;
  document.getElementById("modalWorkDesc").textContent = t.workDesc;
  document.getElementById("modalWorkLabel").textContent =
    project.mode === "solo" ? dict[lang].modal_contribution_solo : dict[lang].modal_contribution_team;
  document.getElementById("modalLink").href = project.link;

  document.getElementById("modalTags").innerHTML = buildTagsHtml(project, lang);

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
   6bis) ORDEN DE PROYECTOS (más nuevo / más antiguo primero)
   ========================================================= */
const sortToggle = document.getElementById("sortToggle");
const sortToggleLabel = document.getElementById("sortToggleLabel");

function updateSortToggleLabel() {
  if (!sortToggleLabel) return;
  sortToggleLabel.textContent = sortDirection === "desc"
    ? dict[currentLang].sort_newest
    : dict[currentLang].sort_oldest;
}

if (sortToggle) {
  sortToggle.addEventListener("click", () => {
    sortDirection = sortDirection === "desc" ? "asc" : "desc";
    updateSortToggleLabel();
    renderProjects(currentLang);
  });
}

/* =========================================================
   7) SELECTOR DE IDIOMA (desplegable con banderas)
   ========================================================= */
const langToggle = document.getElementById("langToggle");
const langMenu = document.getElementById("langMenu");
const langDropdown = document.getElementById("langDropdown");

function openLangMenu() {
  langMenu.hidden = false;
  langToggle.setAttribute("aria-expanded", "true");
}
function closeLangMenu() {
  langMenu.hidden = true;
  langToggle.setAttribute("aria-expanded", "false");
}

if (langToggle && langMenu) {
  langToggle.addEventListener("click", () => {
    langMenu.hidden ? openLangMenu() : closeLangMenu();
  });

  langMenu.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
      setLanguage(li.dataset.lang);
      closeLangMenu();
    });
  });

  document.addEventListener("click", e => {
    if (langDropdown && !langDropdown.contains(e.target)) closeLangMenu();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeLangMenu();
  });
}

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
applyI18n(currentLang);
updateSortToggleLabel();
renderProjects(currentLang);
