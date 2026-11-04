/*
 * ================================================================
 *  CONFIGURACIÓN DE LA INVITACIÓN
 *  Todos los datos editables están acá. No hace falta tocar
 *  ningún otro archivo para cambiar textos, fechas o montos.
 * ================================================================
 */
window.CONFIG = {
  // --- Portada ---------------------------------------------------
  novios: {
    nombre1: "Florencia",
    nombre2: "Gianfranco",
  },

  // Fecha y hora de la ceremonia, con zona horaria de Argentina (-03:00).
  // Se usa para la cuenta regresiva y para mostrar la fecha.
  fecha: "2026-11-21T11:30:00-03:00",

  // Mensaje que reemplaza a la cuenta regresiva cuando llega el día.
  mensajeDiaDelCasamiento: "¡Llegó el gran día!",

  // --- Invitación (debajo de la portada) ---------------------------
  invitacion: {
    titulo: "Nos vamos a",
    tituloScript: "casar",
    texto: "Sería un honor y una inmensa alegría celebrar este momento tan especial con las personas que más amamos.",
    despedida: "Con amor,",
    firma: "Flor y Gian",
  },

  // --- Video de la propuesta (debajo de la cuenta regresiva) ------
  // Arranca solo y sin sonido (los navegadores no dejan reproducir con
  // sonido sin que la persona toque la pantalla). Al primer toque en
  // cualquier parte de la página se activa la música, que sigue sonando
  // en loop mientras recorren la invitación. Hay un botón flotante para
  // silenciarla.
  propuesta: {
    video: "img/propuesta.mp4",
    poster: "img/propuesta-poster.jpg",
    ancho: 464,
    alto: 832,
    alt: "Video de Gianfranco pidiéndole casamiento a Florencia entre velas",
    titulo: "¡Dijo que sí!",
    texto: "23 de julio de 2026",
  },

  // --- Nosotros: carrusel (debajo de Dónde y cuándo) ---------------
  // Fotos en img/fotos/, de 1200px como máximo (los originales están en photos/).
  // ancho y alto: tamaño real del archivo en píxeles (evita saltos al cargar).
  // mensaje: frase debajo de la foto. cita: autor o versículo, en letra chica (opcionales).
  // posicion: qué parte de la foto mostrar si se recorta, ej. "20% center" (opcional).
  // bn: true para mostrarla en blanco y negro (opcional).
  // Las fotos horizontales o cuadradas se muestran completas, sin recortar.
  fotos: [
    {
      src: "img/fotos/20241201-wa0016.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco besándose en una fiesta de egresados",
      mensaje: "Ninguna medida de tiempo con vos será suficiente. Empecemos con «para siempre».",
      cita: "",
    },
    {
      src: "img/fotos/20240114_172550.jpg",
      ancho: 1200,
      alto: 1200,
      alt: "Selfie de Florencia y Gianfranco en un parque",
      mensaje: "Andábamos sin buscarnos, pero sabiendo que andábamos para encontrarnos.",
      cita: "Julio Cortázar",
    },
    {
      src: "img/fotos/20240124_185036.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco abrazados en el pasto",
      mensaje: "Encontré al amor de mi vida, al que ama mi alma. Lo abracé y no lo dejé ir.",
      cita: "Cantares 3:4",
    },
    {
      src: "img/fotos/20240128_225840.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Gianfranco apretándole los cachetes a Florencia, de noche",
      mensaje: "Prometo amarte, respetarte y apretarte los cachetes hasta que la muerte nos separe.",
      cita: "",
    },
    {
      src: "img/fotos/20240202_210253.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco riéndose en un bar",
      mensaje: "Reírnos de todo, empezando por nosotros.",
      cita: "",
    },
    {
      src: "img/fotos/20240202_212846.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco de noche, él con la camiseta de Argentina",
      mensaje: "Quiero que tu mundo empiece y termine conmigo.",
      cita: "",
    },
    {
      src: "img/fotos/20240202_212859.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco besándose bajo unas guirnaldas de luces",
      mensaje: "El amor es paciente, es bondadoso.",
      cita: "1 Corintios 13:4",
    },
    {
      src: "img/fotos/20240207_221436.jpg",
      ancho: 1200,
      alto: 900,
      alt: "Florencia y Gianfranco sonriendo junto a una pared de ladrillos",
      mensaje: "Más valen dos que uno.",
      cita: "Eclesiastés 4:9",
    },
    {
      src: "img/fotos/20240214_200253.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Gianfranco dándole un beso en el cachete a Florencia",
      mensaje: "Feliz San Valentín… todos los días del año.",
      cita: "",
    },
    {
      src: "img/fotos/20240419_230541.jpg",
      ancho: 1200,
      alto: 900,
      alt: "Florencia y Gianfranco en un recital, con luces violetas",
      mensaje: "Nuestra canción favorita es cualquiera que suene con vos al lado.",
      cita: "",
      bn: true,
    },
    {
      src: "img/fotos/20240601-wa0068.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia abrazando a Gianfranco por la espalda bajo un árbol",
      mensaje: "Nosotros amamos porque Él nos amó primero.",
      cita: "1 Juan 4:19",
    },
    {
      src: "img/fotos/20240824_112146.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco con Layla, su perrita, de cachorra",
      mensaje: "Y un día fuimos tres (una con cuatro patas).",
      cita: "",
    },
    {
      src: "img/fotos/20240929-wa0142.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco en un cumpleaños con globos plateados",
      mensaje: "Un año más, y todos los que vengan, juntos.",
      cita: "",
    },
    {
      src: "img/fotos/20240929-wa0148.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco soplando las velas de una torta",
      mensaje: "Pedimos un deseo. Se está cumpliendo.",
      cita: "",
    },
    {
      src: "img/fotos/20241005_231800.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia dándole un beso a Gianfranco, acostados",
      mensaje: "Hogar es donde estás vos.",
      cita: "",
    },
    {
      src: "img/fotos/20241201-wa0017.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco arreglados en una fiesta de egresados",
      mensaje: "Vístanse de amor, que es el vínculo perfecto.",
      cita: "Colosenses 3:14",
    },
    {
      src: "img/fotos/20241214_172425_242-2.jpg",
      ancho: 1080,
      alto: 1080,
      alt: "Florencia y Gianfranco acostados, sonriendo",
      mensaje: "Lo esencial es invisible a los ojos.",
      cita: "Antoine de Saint-Exupéry",
    },
    {
      src: "img/fotos/20241226-wa0029.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco en una mesa de restaurante",
      mensaje: "Cuando te miro, confirmo que sos todo lo que quiero en mi vida.",
      cita: "",
    },
    {
      src: "img/fotos/20241226-wa0043.jpg",
      ancho: 675,
      alto: 1200,
      alt: "Florencia y Gianfranco abrazados de cerca",
      mensaje: "Porque amar no es simplemente quedarse: amar es elegir quedarse una y otra vez.",
      cita: "",
    },
    {
      src: "img/fotos/20250119-wa0032.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco abrazados en un tobogán de una plaza",
      mensaje: "Crecer juntos, pero nunca dejar de jugar.",
      cita: "",
    },
    {
      src: "img/fotos/20250519-wa0052.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia abrazando a Gianfranco en una playa con un corazón dibujado en la arena",
      mensaje: "Las muchas aguas no podrán apagar el amor.",
      cita: "Cantares 8:7",
    },
    {
      src: "img/fotos/20250920_122909.jpg",
      ancho: 1200,
      alto: 900,
      alt: "Florencia abrazando a Gianfranco en un sillón",
      mensaje: "Si un amor es real, jamás se dará por vencido.",
      cita: "1 Corintios 13:7",
    },
    {
      src: "img/fotos/20251031_115924.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco en un barrio chino",
      mensaje: "Tenía el arcoíris más hermoso en sus ojos, porque al mirarme pintaba de colores mi vida.",
      cita: "",
    },
    {
      src: "img/fotos/20260315_0836240.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco con anteojos de sol bajo el cielo azul",
      mensaje: "Iré adonde tú vayas.",
      cita: "Rut 1:16",
    },
    {
      src: "img/fotos/20260525_180459.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco sonriendo en un parque",
      mensaje: "Uno solo puede ser vencido, pero juntos, de la mano de Dios, podemos resistirlo todo.",
      cita: "Eclesiastés 4:12",
    },
    {
      src: "img/fotos/20260525_1805370.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco abrazados en un parque",
      mensaje: "Lo que viene, viene de a tres. 👶",
      cita: "",
    },
    {
      src: "img/fotos/20260723-wa0032.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Gianfranco arrodillado entre velas, pidiéndole casamiento a Florencia",
      mensaje: "Y un 23 de julio, entre velas, dijo que sí.",
      cita: "",
    },
    {
      src: "img/fotos/20260725-wa0008.jpg",
      ancho: 675,
      alto: 1200,
      alt: "Florencia y Gianfranco abrazados entre velas, después de la propuesta",
      mensaje: "Vos vas a cuidar de mí, yo de vos y Dios de nosotros.",
      cita: "",
    },
    {
      src: "img/fotos/20260725-wa0009.jpg",
      ancho: 675,
      alto: 1200,
      alt: "Florencia mostrando el anillo junto a Gianfranco, entre velas",
      mensaje: "Nos vemos el 21 de noviembre. ¡Nos casamos!",
      cita: "",
    },
  ],

  // --- Momentos: mosaico de fotos (antes de la Tarjeta) -------------
  // El tamaño sale solo: las fotos horizontales ocupan todo el ancho y las
  // verticales la mitad. Conviene que las verticales vayan de a pares.
  mosaico: [
    { src: "img/fotos/20240202_130457.jpg", ancho: 1200, alto: 900, alt: "Selfie de Florencia y Gianfranco entre las rocas, haciendo caras" },
    { src: "img/fotos/20240901_223008.jpg", ancho: 900, alto: 1200, alt: "Florencia y Gianfranco sentados abrazados en una escalera" },
    { src: "img/fotos/20240907_222729.jpg", ancho: 900, alto: 1200, alt: "Florencia y Gianfranco con Layla cachorra, haciendo caras" },
    { src: "img/fotos/20240215_184535.jpg", ancho: 1200, alto: 900, alt: "Florencia y Gianfranco sonriendo en un parque, ella muestra su anillo" },
    { src: "img/fotos/20250519-wa0062.jpg", ancho: 900, alto: 1200, alt: "Florencia y Gianfranco haciendo un corazón con los brazos a orillas de un lago" },
    { src: "img/fotos/20250523-wa0015.jpg", ancho: 900, alto: 1200, alt: "Florencia y Gianfranco junto a un muñeco de nieve" },
    { src: "img/fotos/20241020_003545.jpg", ancho: 1200, alto: 900, alt: "Florencia y Gianfranco tomando helado" },
    { src: "img/fotos/20240328_192943.jpg", ancho: 900, alto: 1200, alt: "Florencia y Gianfranco en un puente sobre el río al atardecer" },
    { src: "img/fotos/20240119_223134.jpg", ancho: 900, alto: 1200, alt: "Florencia con un ramo de flores y Gianfranco detrás" },
    { src: "img/fotos/20240131_090622.jpg", ancho: 1200, alto: 900, alt: "Florencia y Gianfranco sonriendo en un colectivo" },
  ],

  // --- Dónde y cuándo --------------------------------------------
  // Cada momento del día, en orden.
  momentos: [
    {
      titulo: "Ceremonia",
      hora: "11.30",
      lugar: "Jardín Botánico de Córdoba",
      direccion: "Francisco Yunyent 5491, Córdoba",
      mapsUrl: "https://maps.app.goo.gl/U2WkAb4xiuZSutP56",
    },
    {
      titulo: "Almuerzo",
      hora: "13.00 aprox.",
      lugar: "IT! Italy",
      direccion: "Av. Carlos F. Gauss 5656, Córdoba",
      mapsUrl: "https://maps.app.goo.gl/fjCb7GG6YS84t2q47",
    },
  ],

  // --- La comida -------------------------------------------------
  menu: {
    intro: "Después de la ceremonia almorzamos todos juntos en IT! Italy. Estas son las opciones del menú:",
    principales: [
      { nombre: "Lasagna IT", descripcion: "Rellena de carne, espinaca, jamón cocido y queso reggiano, con salsa pomodoro e panna." },
      { nombre: "Ravioles de osobuco", descripcion: "Osobuco braseado al malbec con verduras asadas, salsa pomodoro fresco y albahaca." },
      { nombre: "Pollo dolce", descripcion: "Pechuga de pollo grillada con ananá y jamón cocido caramelizado, sobre colchón de papas rústicas y salsa crema agridulce." },
      { nombre: "Insalata Cesare", descripcion: "Hojas verdes, croutones, tomates secos y queso reggiano en hebras, con pollo, aderezo césar y salsa teriyaki. Hay opción vegetariana, sin pollo." },
      { nombre: "Suprema de pollo al roquefort", descripcion: "Con mozzarella y queso azul, trocitos de nueces y papas rústicas." },
      { nombre: "Hamburguesa IT", descripcion: "Pan de campo, doble hamburguesa, doble cheddar, panceta crocante, salsa barbacoa y mayonesa picante. Con papas rústicas y salsa alioli." },
    ],
    bebidasIntro: "Una bebida por persona, a elección:",
    bebidas: [
      "Agua mineral",
      "Gaseosa",
      "Copón de vino",
      "Cerveza Stella Artois 330 cc",
    ],
    ninos: {
      titulo: "Menú de niños",
      edad: "Hasta 10 años",
      descripcion: "Ñoquis, cuerdas de guitarra o supremitas de pollo. Incluye gaseosa o agua mineral. Flan o helado.",
      precio: 20000, // en pesos, sin puntos
    },
    adicionales: "Si deseás solicitar consumiciones adicionales, estas estarán a cargo de cada familia.",
    nota: "Si tenés alguna restricción alimentaria, avisanos al confirmar, así lo tendremos en cuenta.",
  },

  // --- Tarjeta ---------------------------------------------------
  tarjeta: {
    precioPorPersona: 35000, // en pesos, sin puntos
    unidadPrecio: "por persona adulta",
    notaPrecio: "El valor para menores está a confirmar.",
    cvu: "0000076500000012644603",
    alias: "NOSCASAMOS.FLOR.GIAN",
    titular: "Gianfranco Depaoli Gampel",
    fechaLimite: "2026-11-19", // AAAA-MM-DD
  },

  // --- Regalos ---------------------------------------------------
  regalos: {
    // Cada elemento es un párrafo.
    intro: [
      "¡Estamos esperando a nuestro primer bebé!",
      "Si nos querés hacer un regalo, te dejamos algunas ideas de cositas que nos van a servir:",
    ],
    ideasBebe: [
      "Bodies y ropita de 0 a 3 meses",
      "Muselinas o mantitas",
      "Baberos",
      "Medias, gorritos y escarpines",
      "Toallón con capucha",
      "Pañales (distintos talles)",
      "Chupetes y mamaderas",
      "Kit de higiene para bebé",
      "Sonajeros o juguetes de estimulación",
    ],
    aporteIntro: "Si preferís regalarnos un detalle para nuestro nuevo comienzo, podés hacerlo a través del siguiente CVU, nos encantaría destinarlo a:",
    conAporte: ["Cochecito", "Colecho", "Practicuna"],
  },

  // --- Confirmación de asistencia --------------------------------
  confirmacion: {
    fechaLimite: "2026-11-14", // AAAA-MM-DD
    // URL de la app web de Apps Script (termina en /exec). Ver README.
    appsScriptUrl: "https://script.google.com/macros/s/AKfycbzrVRtUJPAi2fdhyxOECwmhavPJnmOrLxyet8pPUmb5eIX2Ge-gNLFwUf4C7FbIP3ttvw/exec",
  },
};
