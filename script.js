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
    hero_title: 'Convierto sueños en mundos <span class="hero-highlight">jugables</span> desde Córdoba',
    hero_lede: "Diseñadora y desarrolladora de videojuegos en Unity." +
        " Disfruto haciendo minijuegos estilo WarioWare y juegos cozy," +
        " pero me gusta explorar géneros y mecánicas nuevos fuera de mi zona de confort.",
    btn_projects: "Ver proyectos",
    btn_contact: "Hablemos",

    about_kicker: "Sobre mí",
    about_title: "Iree Alba",
    about_title2: "Indie Gamedev Raccoon",
    about_p1: "Combino proyectos en solitario con trabajo en equipo, tanto en mis estudios como en mi experiencia profesional." +
        " Me interesa tanto la arquitectura del código como el diseño de juego.",
    about_p2: "Cuando no estoy dentro del editor de Unity," +
        " suelo estar pensando en la narrativa de posibles próximos proyectos" +
        " o investigando cómo otros juegos usan mecánicas que tengo en mente." +
        " En mi tiempo libre me gusta dibujar, ver series, escuchar podcasts," +
        " leer o jugar a videojuegos en cualquier plataforma.",
    about_fact_lang_label: "Lenguajes",
    about_fact_lang_value: "C#, C++, Java",
    about_fact_edu_label: "Formación",
    about_fact_edu_value: "Máster en diseño y desarrollo de videojuegos, " +
        "Grado Superior en Desarrollo de Aplicaciones Multiplataforma",
    about_fact_work_label: "Experiencia laboral",
    about_fact_work_value: "06/2023 – 09/2025: programadora junior en ICCA " +
        "(desarrollo web en C# con .NET y trato directo con el cliente)",

    projects_kicker: "Proyectos",
    projects_title: "Sueños hechos juego",
    projects_lede: "Una selección de proyectos en solitario y en equipo.",
    project_cover_placeholder: "Carátula del juego",
    project_view: "Ver proyecto",
    sort_newest: "Más nuevo primero",
    sort_oldest: "Más antiguo primero",
    theme_to_light: "Cambiar a tema claro",
    theme_to_dark: "Cambiar a tema oscuro",

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
    contact_title: "Contacta conmigo",
    contact_lede: "o sigue mi trabajo si lo prefieres",

    footer_text: "Hecho con Unity, Monster y demasiados «Unity Crash Handler».",

    modal_date: "Fecha de creación",
    modal_date_updated: "Última actualización",
    modal_studio: "Estudio / equipo",
    modal_role: "Rol",
    modal_about: "Sobre el juego",
    modal_contribution_solo: "Mecánicas destacadas",
    modal_contribution_team: "Mi aportación",
    modal_try: "Pruébalo",
    modal_in_dev: "En desarrollo",
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

    hero_kicker: "Game developer · Unity",
    hero_title: 'I turn dreams into <span class="hero-highlight">playable</span> worlds from Córdoba',
    hero_lede: "Game designer and developer working in Unity." +
        " I enjoy making WarioWare-style minigames and cozy games," +
        " but I also like exploring new genres and mechanics outside my comfort zone.",
    btn_projects: "View projects",
    btn_contact: "Let's talk",

    about_kicker: "About me",
    about_title: "Iree Alba",
    about_title2: "Indie Gamedev Raccoon",
    about_p1: "I combine solo projects with teamwork, both in my studies and in my professional experience." +
        " I care as much about code architecture as I do about game design.",
    about_p2: "When I'm not inside the Unity editor," +
        " I'm usually thinking about the narrative of possible future projects" +
        " or researching how other games use mechanics I have in mind." +
        " In my free time I like to draw, watch series, listen to podcasts," +
        " read, or play video games on any platform.",
    about_fact_lang_label: "Languages",
    about_fact_lang_value: "C#, C++, Java",
    about_fact_edu_label: "Education",
    about_fact_edu_value: "Master's in video game design and development, " +
        "Higher Vocational Degree in Cross-Platform Application Development",
    about_fact_work_label: "Work experience",
    about_fact_work_value: "06/2023 – 09/2025: junior programmer at ICCA " +
        "(web development in C# with .NET and direct client contact)",

    projects_kicker: "Projects",
    projects_title: "Dreams turned into games",
    projects_lede: "A selection of solo and team projects.",
    project_cover_placeholder: "Game cover art",
    project_view: "View project",
    sort_newest: "Newest first",
    sort_oldest: "Oldest first",
    theme_to_light: "Switch to light theme",
    theme_to_dark: "Switch to dark theme",

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
    contact_title: "Get in touch",
    contact_lede: "or follow my work if you prefer",

    footer_text: "Made with Unity, Monster and way too many “Unity Crash Handler” windows.",

    modal_date: "Creation date",
    modal_date_updated: "Last updated",
    modal_studio: "Studio / team",
    modal_role: "Role",
    modal_about: "About the game",
    modal_contribution_solo: "Notable mechanics",
    modal_contribution_team: "My contribution",
    modal_try: "Try it out",
    modal_in_dev: "In development",
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
   - link: URL del juego. Si es null, en el modal aparece
     "En desarrollo" en lugar del botón "Pruébalo".
   - dateCreated / dateUpdated: formato "MM/YYYY".
   - tags: etiquetas propias de este proyecto (además de las
     fijas Unity/C#/gamedev/gamedesign que se añaden solas).
   - es/en: título, rol, descripción corta, descripción larga
     y mecánicas destacadas (o aportación si es en equipo), en
     cada idioma.
   - Saltos de línea: en longDesc, "\n" crea un párrafo nuevo.
     En workDesc, cada línea que empiece por "* " se muestra
     como un elemento de lista.
   ========================================================= */
const projects = [
    {
      id: "roborunner",
      cover: "img/roborunner/Roborunner0.webp",
      mode: "solo",          // "solo" | "team"
      jam: false,
      dateCreated: "12/2025",
      dateUpdated: "12/2025",
      studio: null,           // proyecto en solitario: no se muestra estudio/equipo
      link: "https://raccoonindiegamedev.itch.io/roborunner",
      tags: ["2D", "Endless runner"], // etiquetas propias del proyecto, además de las fijas
      gallery: [
        "img/roborunner/RoborunnerTrailer.mp4",
        "img/roborunner/Roborunner1.webp",
        "img/roborunner/Roborunner2.webp",
        "img/roborunner/Roborunner3.webp",
        "img/roborunner/Roborunner4.webp",
        "img/roborunner/Roborunner5.webp",
        "img/roborunner/Roborunner6.webp",
        "img/roborunner/Roborunner7.webp",
        "img/roborunner/Roborunner8.webp",
        "img/roborunner/Roborunner9.webp"
      ],
      es: {
        title: "Roborunner",
        role: "Diseño y desarrollo",
        shortDesc: "No dejes que el guardia de seguridad te pille.",
        longDesc: "En esta aventura endless runner 2D eres H3C10r," +
            " un robot creado para entretener y ayudar a la gente en las recreativas," +
            " pero con un defecto: ha adquirido consciencia. El guardia de seguridad hará todo lo posible por atraparlo" +
            " y desmantelarlo, así que no le queda más remedio que correr y huir," +
            " porque como se detenga un solo instante será su fin.\n" +
            "Arte de personajes y escenarios de Denis Bezmaternykh, arte del HUD de la Asset Store" +
            " y todo lo demás hecho por mí.",
        workDesc: "* Generación dinámica de escenarios\n" +
            "* Power-ups que cambian la jugabilidad\n" +
            "* Sistema de tienda para comprar mejoras\n" +
            "* Sistema de misiones que recompensan al jugador"
      },
      en: {
        title: "Roborunner",
        role: "Design & development",
        shortDesc: "Don't let the security guard catch you.",
        longDesc: "In this 2D endless runner adventure you play as H3C10r," +
            " a robot built to entertain and help people at the arcade," +
            " but with one flaw: he has become self-aware. The security guard will do everything he can to catch him" +
            " and dismantle him, so he has no choice but to run and keep running," +
            " because if he stops for even a moment, it's the end.\n" +
            "Character and environment art by Denis Bezmaternykh, HUD art from the Asset Store," +
            " and everything else made by me.",
        workDesc: "* Dynamic level generation\n" +
            "* Power-ups that change the gameplay\n" +
            "* Shop system to buy upgrades\n" +
            "* Mission system that rewards the player"
      }
    },
    {
      id: "callofpomni",
      cover: "img/callofpomni/CallofPomni0.webp",
      mode: "solo",          // "solo" | "team"
      jam: false,
      dateCreated: "3/2026",
      dateUpdated: "3/2026",
      studio: null,           // proyecto en solitario: no se muestra estudio/equipo
      link: "https://raccoonindiegamedev.itch.io/call-of-pomni",
      tags: ["3D", "Dual Stick Shooter"], // etiquetas propias del proyecto, además de las fijas
      gallery: [
        "img/callofpomni/CallofPomniTrailer.mp4",
        "img/callofpomni/CallofPomni1.webp",
        "img/callofpomni/CallofPomni2.webp",
        "img/callofpomni/CallofPomni3.webp",
        "img/callofpomni/CallofPomni4.webp",
        "img/callofpomni/CallofPomni5.webp",
        "img/callofpomni/CallofPomni6.webp"
      ],
      es: {
        title: "Call of Pomni",
        role: "Diseño y desarrollo",
        shortDesc: "Sobrevive al mayor número de oleadas posible e intenta volver al circo digital.",
        longDesc: "Eres Pomni (de la serie web The Amazing Digital Circus) y Caine te ha asignado una nueva misión:" +
            " estás atrapada en un videojuego de zombis y debes avanzar por sus zonas buscando" +
            " (aunque en vano) el final del juego.\n" +
            "Disfruta de un shooter por oleadas con distintos tipos de zombis," +
            " zonas que cambian en cada partida y diferentes eventos en cada una de ellas." +
            " Desbloquea armas y habilidades para hacer más llevadero el avance," +
            " pero recuerda: si los zombis acaban contigo, lo perderás todo y tendrás que empezar desde el principio.",
        workDesc: "* Sistema de aleatorización de zonas\n" +
            "* Sistema de desbloqueo de zonas\n" +
            "* Distintos tipos de eventos por zona: oleada, arma, habilidad, supervivientes, monedas y llave\n" +
            "* Sistema de oleadas\n" +
            "* Distintos tipos de enemigos con comportamientos diferenciados\n" +
            "* Distintas armas y habilidades con comportamientos diferenciados\n" +
            "* Máquinas expendedoras que recuperan vida y munición\n" +
            "* Sistema de subida de nivel mediante experiencia\n" +
            "* Sistema de logros"
      },
      en: {
        title: "Call of Pomni",
        role: "Design & development",
        shortDesc: "Survive as many waves as you can and try to get back to the digital circus.",
        longDesc: "You are Pomni (from the web series The Amazing Digital Circus) and Caine has given you a new mission:" +
            " you're trapped inside a zombie video game and must advance through its zones looking for" +
            " (in vain) the end of the game.\n" +
            "Enjoy a wave-based shooter with different types of zombies," +
            " zones that change with every run and different events in each one of them." +
            " Unlock weapons and abilities to make moving forward easier," +
            " but remember: if the zombies take you down, you'll lose everything and have to start over from the beginning.",
        workDesc: "* Zone randomization system\n" +
            "* Zone unlocking system\n" +
            "* Different types of events per zone: wave, weapon, ability, survivors, coins and key\n" +
            "* Wave system\n" +
            "* Different types of enemies with distinct behaviors\n" +
            "* Different weapons and abilities with distinct behaviors\n" +
            "* Vending machines that restore health and ammo\n" +
            "* Experience-based level-up system\n" +
            "* Achievement system"
      }
    },
    {
      id: "trespasser",
      cover: "img/trespasser/Trespasser0.webp",
      mode: "solo",          // "solo" | "team"
      jam: false,
      dateCreated: "6/2026",
      dateUpdated: "6/2026",
      studio: null,           // proyecto en solitario: no se muestra estudio/equipo
      link: "https://raccoonindiegamedev.itch.io/trespasser",
      tags: ["3D", "First Person Adventure"], // etiquetas propias del proyecto, además de las fijas
      gallery: [
        "img/trespasser/TrespasserTrailer.mp4",
        "img/trespasser/Trespasser1.webp",
        "img/trespasser/Trespasser2.webp",
        "img/trespasser/Trespasser3.webp",
        "img/trespasser/Trespasser4.webp",
        "img/trespasser/Trespasser5.webp",
        "img/trespasser/Trespasser6.webp",
        "img/trespasser/Trespasser7.webp",
        "img/trespasser/Trespasser8.webp",
        "img/trespasser/Trespasser9.webp"
      ],
      es: {
        title: "Trespasser",
        role: "Diseño y desarrollo",
        shortDesc: "Explora el hospital abandonado y consigue las mejores fotos por el camino.",
        longDesc: "En esta oscura aventura eres un chaval aficionado al urbex que, tras conseguir" +
            " una cámara antigua estilo Polaroid, decide adentrarse en el hospital abandonado" +
            " de su ciudad. Según muchas leyendas está encantado, y él quiere" +
            " intentar captar algo paranormal con la cámara.\n" +
            "Explora el hospital usando la cámara para revelar cosas que no se ven a simple vista." +
            " Resuelve puzles, descubre lo que ocurrió allí, avanza en la exploración y también..." +
            " ¿invocar a un ente maligno y escapar de él?",
        workDesc: "* Sistema de cámara de fotos que captura lo que tienes delante, incluido lo que está en" +
            " una capa invisible para el jugador\n" +
            "* Puzles interactivos\n" +
            "* IA con sistema de estados: patrulla, alerta, búsqueda y ataque\n" +
            "* Sistema de detección del jugador mediante voz"
      },
      en: {
        title: "Trespasser",
        role: "Design & development",
        shortDesc: "Explore the abandoned hospital and take the best photos along the way.",
        longDesc: "In this dark adventure you play as a kid who does urbex as a hobby and, after getting" +
            " an old Polaroid-style camera, decides to venture into the abandoned hospital" +
            " in his city. According to many legends it's haunted, and he wants to" +
            " try to capture something paranormal with the camera.\n" +
            "Explore the hospital using the camera to reveal things that can't be seen at first glance." +
            " Solve puzzles, find out what happened there, keep exploring and also..." +
            " summon an evil entity and escape from it?",
        workDesc: "* Photo camera system that captures what's in front of you, including what's on" +
            " a layer that is invisible to the player\n" +
            "* Interactive puzzles\n" +
            "* State-based AI: patrol, alert, search and attack\n" +
            "* Voice-based player detection system"
      }
    },
    {
      id: "goodnightmom",
      cover: "img/goodnightmom/GoodNightMom0.webp",
      mode: "team",          // "solo" | "team"
      jam: true,
      dateCreated: "2/2026",
      dateUpdated: "2/2026",
      studio: null,           // sin estudio: no se muestra estudio/equipo
      link: "https://sofia-vanh.itch.io/good-night-mom",
      tags: ["2D", "3D", "Casual", "Minigames"], // etiquetas propias del proyecto, además de las fijas
      gallery: [
        "img/goodnightmom/GoodnightMomTrailer.mp4",
        "img/goodnightmom/GoodnightMom1.webp",
        "img/goodnightmom/GoodnightMom2.webp",
        "img/goodnightmom/GoodnightMom3.webp",
        "img/goodnightmom/GoodnightMom4.webp"
      ],
      es: {
        title: "Good Night Mom",
        role: "Diseño y desarrollo",
        shortDesc: "Juega con tu consola sin que te pille mamá.",
        longDesc: "Es de madrugada y deberías estar durmiendo, pero tus ganas de seguir jugando a la consola " +
            "pueden más que el sueño, aunque tu madre no esté de acuerdo. Sigue jugando a los minijuegos y escóndete" +
            " si aparece mamá para evitar la regañina.",
        workDesc: "* Colaboración en el diseño general del juego\n" +
            "* Diseño y desarrollo de los minijuegos"
      },
      en: {
        title: "Good Night Mom",
        role: "Design & development",
        shortDesc: "Play on your console without getting caught by mom.",
        longDesc: "It's the middle of the night and you should be sleeping, but your urge to keep playing on your console " +
            "beats your tiredness, even though your mom doesn't agree. Keep playing the minigames and hide" +
            " if mom shows up to avoid a scolding.",
        workDesc: "* Collaboration on the overall game design\n" +
            "* Design and development of the minigames"
      }
    },
    {
      id: "monsterdiscofever",
      cover: "img/monsterdiscofever/MonsterDiscoFever0.webp",
      mode: "team",          // "solo" | "team"
      jam: true,
      dateCreated: "3/2026",
      dateUpdated: "3/2026",
      studio: null,           // sin estudio: no se muestra estudio/equipo
      link: "https://raccoonindiegamedev.itch.io/monster-disco-fever",
      tags: ["2D", "3D", "Casual", "Minigames"], // etiquetas propias del proyecto, además de las fijas
      gallery: [
        "img/monsterdiscofever/MonsterDiscoFeverTrailer.mp4",
        "img/monsterdiscofever/MonsterDiscoFever1.webp",
        "img/monsterdiscofever/MonsterDiscoFever2.webp",
        "img/monsterdiscofever/MonsterDiscoFever3.webp"
      ],
      es: {
        title: "Monster Disco Fever",
        role: "Diseño y desarrollo",
        shortDesc: "Controla que ningún monstruo entre en la discoteca sin permiso.",
        longDesc: "Acabas de ser contratado como seguridad en una prestigiosa discoteca de monstruos" +
            " y debes hacer una serie de pruebas a cada monstruo que quiera entrar.\n" +
            "Para decidir si lo dejas pasar o no, tendrás que comprobar mediante minijuegos su nivel de embriaguez," +
            " si ha consumido alguna sustancia, si lleva algo sospechoso encima o si" +
            " simplemente es menor de edad.",
        workDesc: "* Colaboración en el diseño general de la jugabilidad\n" +
            "* Diseño y desarrollo de los distintos minijuegos"
      },
      en: {
        title: "Monster Disco Fever",
        role: "Design & development",
        shortDesc: "Make sure no monster gets into the disco without permission.",
        longDesc: "You've just been hired as security at a prestigious monster disco" +
            " and must run a series of checks on every monster who wants to get in.\n" +
            "To decide whether or not to let them through, you'll have to use minigames to check how drunk they are," +
            " whether they've taken any substances, whether they're carrying anything suspicious, or whether" +
            " they're simply underage.",
        workDesc: "* Collaboration on the overall gameplay design\n" +
            "* Design and development of the different minigames"
      }
    },
    {
      id: "therisingodnecromancy",
      cover: "img/therisingofnecromancy/TheRisingOfNecromancy0.webp",
      mode: "team",          // "solo" | "team"
      jam: false,
      dateCreated: "9/2026",
      dateUpdated: "9/2026",
      studio: "Pinwu Studios",
      link: null,             // sin enlace: el modal muestra "En desarrollo"
      tags: ["3D", "Roguelite", "Conquista"], // etiquetas propias del proyecto, además de las fijas
      gallery: [
        "img/therisingofnecromancy/TheRisingOfNecromancyTrailer.mp4",
        "img/therisingofnecromancy/TheRisingOfNecromancyVid1.mp4",
        "img/therisingofnecromancy/TheRisingOfNecromancy1.webp",
        "img/therisingofnecromancy/TheRisingOfNecromancy2.webp",
        "img/therisingofnecromancy/TheRisingOfNecromancy3.webp",
        "img/therisingofnecromancy/TheRisingOfNecromancy4.webp",
        "img/therisingofnecromancy/TheRisingOfNecromancy5.webp",
        "img/therisingofnecromancy/TheRisingOfNecromancy6.webp",
        "img/therisingofnecromancy/TheRisingOfNecromancy7.webp",
        "img/therisingofnecromancy/TheRisingOfNecromancy8.webp"
      ],
      es: {
        title: "The Rising of Necromancy",
        role: "Diseño y desarrollo",
        shortDesc: "Conquista todo el reino con tu ejército de no muertos.",
        longDesc: "En esta aventura eres José José, el hijo del mejor herrero del reino." +
            " Tras proporcionar a los héroes las armas y el equipamiento necesarios para acabar con el malvado" +
            " rey nigromante Manuel Jesús, estos enloquecieron, mataron a tu familia y te encarcelaron para evitar tu rebeldía." +
            " Por cosas del destino acabas en la celda junto al rey nigromante, que te convierte en su discípulo" +
            " cediéndote el poco poder que le queda, con la promesa de que si vuelves a reunir todas las partes" +
            " de su poderoso libro de artes nigrománticas, él podrá devolverte a tu familia.\n" +
            "Con esta premisa, debes acabar con las tropas de los héroes para conseguir secuaces" +
            " que te ayuden a conquistar las distintas zonas de la fortaleza de cada héroe," +
            " llegar hasta él y derrotarlo para obtener una parte del libro, hasta reunirlas todas." +
            " Eso sí, no olvides que si fallas en tu misión y te derrotan perderás tu" +
            " progreso de conquista y tendrás que volver a empezar.",
        workDesc: "* Diseño y creación del lobby\n" +
            "* Gestor de escenas que mantiene una escena persistente con pantalla de carga," +
            " conservando entre escenas al jugador, el pool manager y el HUD necesarios\n" +
            "* Diseño y desarrollo del tutorial\n" +
            "* Sistema de misiones para los distintos niveles\n" +
            "* Sistema de inventario del jugador con slots específicos por tipo de objeto\n" +
            "* Cofre con inventario\n" +
            "* Cofre con recompensas\n" +
            "* Tienda de materiales\n" +
            "* Sistema de crafteo\n" +
            "* Estatuas para invocar secuaces\n" +
            "* Sistema de curación (mediante el rey nigromante y pociones)"
      },
      en: {
        title: "The Rising of Necromancy",
        role: "Design & development",
        shortDesc: "Conquer the whole kingdom with your army of the undead.",
        longDesc: "In this adventure you are José José, the son of the kingdom's best blacksmith." +
            " After providing the heroes with the weapons and equipment needed to defeat the evil" +
            " necromancer king Manuel Jesús, they went mad, killed your family and imprisoned you to prevent your rebellion." +
            " By a twist of fate you end up in the cell next to the necromancer king, who makes you his disciple" +
            " by passing on the little power he has left, with the promise that if you gather all the parts" +
            " of his powerful book of necromantic arts again, he will be able to bring your family back.\n" +
            "With this premise, you must defeat the heroes' troops to gain minions" +
            " who help you conquer the different areas of each hero's fortress," +
            " reach the hero and defeat him to obtain a part of the book, until you have them all." +
            " That said, don't forget that if you fail your mission and are defeated, you'll lose your" +
            " conquest progress and have to start over.",
        workDesc: "* Design and creation of the lobby\n" +
            "* Scene manager that keeps a persistent scene with a loading screen," +
            " carrying the player, the pool manager and the required HUD across scenes\n" +
            "* Design and development of the tutorial\n" +
            "* Mission system for the different levels\n" +
            "* Player inventory system with specific slots per item type\n" +
            "* Chest with inventory\n" +
            "* Chest with rewards\n" +
            "* Materials shop\n" +
            "* Crafting system\n" +
            "* Statues to summon minions\n" +
            "* Healing system (through the necromancer king and potions)"
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

  const flagImages = { es: "img/general/es.webp", en: "img/general/en.webp" };
  const langFlagCurrent = document.getElementById("langFlagCurrent");
  const langCodeCurrent = document.getElementById("langCodeCurrent");
  if (langFlagCurrent) langFlagCurrent.src = flagImages[lang];
  if (langCodeCurrent) langCodeCurrent.textContent = lang.toUpperCase();

  document.querySelectorAll("#langMenu li").forEach(li => {
    li.setAttribute("aria-selected", String(li.dataset.lang === lang));
  });
}

function setLanguage(lang) {
  currentLang = lang;
  applyI18n(lang);
  updateSortToggleLabel();
  updateThemeToggleLabel();
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
  pauseCarouselVideos();
  modalOverlay.hidden = true;
  openProjectId = null;
  document.body.style.overflow = "";
}

/* Convierte un texto con "\n" en párrafos, y las líneas que empiezan
   por "* " en una lista. Se construye con createElement/textContent,
   así que el texto nunca se interpreta como HTML. */
function renderRichText(container, text) {
  container.innerHTML = "";
  let list = null;

  String(text || "").split("\n").forEach(rawLine => {
    const line = rawLine.trim();
    if (!line) return;

    if (line.startsWith("* ")) {
      if (!list) {
        list = document.createElement("ul");
        list.className = "modal-list";
        container.appendChild(list);
      }
      const li = document.createElement("li");
      li.textContent = line.slice(2).trim();
      list.appendChild(li);
    } else {
      list = null;
      const p = document.createElement("p");
      p.textContent = line;
      container.appendChild(p);
    }
  });
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
  renderRichText(document.getElementById("modalLongDesc"), t.longDesc);
  renderRichText(document.getElementById("modalWorkDesc"), t.workDesc);
  document.getElementById("modalWorkLabel").textContent =
    project.mode === "solo" ? dict[lang].modal_contribution_solo : dict[lang].modal_contribution_team;

  const linkEl = document.getElementById("modalLink");
  if (project.link) {
    linkEl.href = project.link;
    linkEl.textContent = dict[lang].modal_try;
    linkEl.classList.remove("btn-status");
    linkEl.removeAttribute("aria-disabled");
  } else {
    // Sin enlace todavía: se muestra el estado "En desarrollo"
    linkEl.removeAttribute("href");
    linkEl.textContent = dict[lang].modal_in_dev;
    linkEl.classList.add("btn-status");
    linkEl.setAttribute("aria-disabled", "true");
  }

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

/* Pausa todos los vídeos del carrusel, salvo el de la diapositiva "exceptIndex" (si se indica) */
function pauseCarouselVideos(exceptIndex = -1) {
  Array.from(carouselTrack.children).forEach((slide, i) => {
    if (i === exceptIndex) return;
    slide.querySelectorAll("video").forEach(video => video.pause());
  });
}

function updateCarouselPosition() {
  carouselTrack.style.transform = `translateX(-${currentCarouselIndex * 100}%)`;
  pauseCarouselVideos(currentCarouselIndex);
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
   7bis) TEMA CLARO / OSCURO
   El tema inicial lo aplica el script del <head> en index.html
   (lee "theme" de localStorage; por defecto, oscuro).
   ========================================================= */
const THEME_KEY = "theme";
const themeToggle = document.getElementById("themeToggle");

function getTheme() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function updateThemeToggleLabel() {
  if (!themeToggle) return;
  const label = getTheme() === "dark"
    ? dict[currentLang].theme_to_light
    : dict[currentLang].theme_to_dark;
  themeToggle.setAttribute("aria-label", label);
  themeToggle.setAttribute("title", label);
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  updateThemeToggleLabel();
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    setTheme(getTheme() === "dark" ? "light" : "dark");
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
updateThemeToggleLabel();
renderProjects(currentLang);
