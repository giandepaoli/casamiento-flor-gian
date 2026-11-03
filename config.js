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
  fecha: "2026-11-21T11:00:00-03:00",

  // Mensaje que reemplaza a la cuenta regresiva cuando llega el día.
  mensajeDiaDelCasamiento: "¡Llegó el gran día!",

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
  // fecha y mensaje: texto debajo de la foto (opcionales).
  // posicion: qué parte de la foto mostrar si se recorta, ej. "20% center" (opcional).
  fotos: [
    {
      src: "img/fotos/20240114_172550.jpg",
      ancho: 1200,
      alto: 1200,
      alt: "Selfie de Florencia y Gianfranco en un parque",
      fecha: "14 de enero de 2024",
      mensaje: "",
    },
    {
      src: "img/fotos/20240124_185036.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco abrazados en el pasto",
      fecha: "24 de enero de 2024",
      mensaje: "",
    },
    {
      src: "img/fotos/20240128_225840.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Gianfranco apretándole los cachetes a Florencia, de noche",
      fecha: "28 de enero de 2024",
      mensaje: "",
    },
    {
      src: "img/fotos/20240202_210253.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco riéndose en un bar",
      fecha: "2 de febrero de 2024",
      mensaje: "",
    },
    {
      src: "img/fotos/20240202_212846.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco de noche, él con la camiseta de Argentina",
      fecha: "2 de febrero de 2024",
      mensaje: "",
    },
    {
      src: "img/fotos/20240202_212859.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco besándose bajo unas guirnaldas de luces",
      fecha: "2 de febrero de 2024",
      mensaje: "",
    },
    {
      src: "img/fotos/20240207_221436.jpg",
      ancho: 1200,
      alto: 900,
      alt: "Florencia y Gianfranco sonriendo junto a una pared de ladrillos",
      fecha: "7 de febrero de 2024",
      mensaje: "",
    },
    {
      src: "img/fotos/20240214_200253.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Gianfranco dándole un beso en el cachete a Florencia",
      fecha: "14 de febrero de 2024",
      mensaje: "",
    },
    {
      src: "img/fotos/20240419_230541.jpg",
      ancho: 1200,
      alto: 900,
      alt: "Florencia y Gianfranco en un recital, con luces violetas",
      fecha: "19 de abril de 2024",
      mensaje: "",
    },
    {
      src: "img/fotos/20240601-wa0068.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia abrazando a Gianfranco por la espalda bajo un árbol",
      fecha: "",
      mensaje: "",
    },
    {
      src: "img/fotos/20240824_112146.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco con Layla, su perrita, de cachorra",
      fecha: "24 de agosto de 2024",
      mensaje: "",
    },
    {
      src: "img/fotos/20240929-wa0142.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco en un cumpleaños con globos plateados",
      fecha: "",
      mensaje: "",
    },
    {
      src: "img/fotos/20240929-wa0148.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco soplando las velas de una torta",
      fecha: "",
      mensaje: "",
    },
    {
      src: "img/fotos/20241005_231800.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia dándole un beso a Gianfranco, acostados",
      fecha: "5 de octubre de 2024",
      mensaje: "",
    },
    {
      src: "img/fotos/20241201-wa0016.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco besándose en una fiesta de egresados",
      fecha: "30 de noviembre de 2024",
      mensaje: "En el egreso de la Celeste.",
    },
    {
      src: "img/fotos/20241201-wa0017.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco arreglados en una fiesta de egresados",
      fecha: "30 de noviembre de 2024",
      mensaje: "En el egreso de la Celeste.",
    },
    {
      src: "img/fotos/20241214_172425_242-2.jpg",
      ancho: 1080,
      alto: 1080,
      alt: "Florencia y Gianfranco acostados, sonriendo",
      fecha: "14 de diciembre de 2024",
      mensaje: "",
    },
    {
      src: "img/fotos/20241226-wa0029.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco en una mesa de restaurante",
      fecha: "",
      mensaje: "",
    },
    {
      src: "img/fotos/20241226-wa0043.jpg",
      ancho: 675,
      alto: 1200,
      alt: "Florencia y Gianfranco abrazados de cerca",
      fecha: "",
      mensaje: "",
    },
    {
      src: "img/fotos/20250119-wa0032.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco abrazados en un tobogán de una plaza",
      fecha: "",
      mensaje: "",
    },
    {
      src: "img/fotos/20250519-wa0052.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia abrazando a Gianfranco en una playa con un corazón dibujado en la arena",
      fecha: "18 de mayo de 2025",
      mensaje: "Un poco de frío en Bariloche.",
    },
    {
      src: "img/fotos/20250920_122909.jpg",
      ancho: 1200,
      alto: 900,
      alt: "Florencia abrazando a Gianfranco en un sillón",
      fecha: "20 de septiembre de 2025",
      mensaje: "",
    },
    {
      src: "img/fotos/20251031_115924.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco en un barrio chino",
      fecha: "31 de octubre de 2025",
      mensaje: "",
    },
    {
      src: "img/fotos/20260315_0836240.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco con anteojos de sol bajo el cielo azul",
      fecha: "15 de marzo de 2026",
      mensaje: "",
    },
    {
      src: "img/fotos/20260525_180459.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco sonriendo en un parque",
      fecha: "25 de mayo de 2026",
      mensaje: "",
    },
    {
      src: "img/fotos/20260525_1805370.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco abrazados en un parque",
      fecha: "25 de mayo de 2026",
      mensaje: "",
    },
    {
      src: "img/fotos/20260723-wa0032.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Gianfranco arrodillado entre velas, pidiéndole casamiento a Florencia",
      fecha: "23 de julio de 2026",
      mensaje: "",
    },
    {
      src: "img/fotos/20260725-wa0008.jpg",
      ancho: 675,
      alto: 1200,
      alt: "Florencia y Gianfranco abrazados entre velas, después de la propuesta",
      fecha: "",
      mensaje: "",
    },
    {
      src: "img/fotos/20260725-wa0009.jpg",
      ancho: 675,
      alto: 1200,
      alt: "Florencia mostrando el anillo junto a Gianfranco, entre velas",
      fecha: "",
      mensaje: "",
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
      hora: "11:00 hs",
      lugar: "Jardín Botánico de Córdoba",
      direccion: "Francisco Yunyent 5491, Córdoba",
      mapsUrl: "https://maps.app.goo.gl/U2WkAb4xiuZSutP56",
    },
    {
      titulo: "Almuerzo",
      hora: "13:00 hs aprox.",
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
    adicionales: "Si querés pedir más comida o bebida, podés hacerlo: los adicionales corren por cuenta de cada familia.",
    nota: "Si tenés alguna restricción alimentaria, avisanos al confirmar y lo tenemos en cuenta.",
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
    intro: "¡Estamos esperando a nuestro primer bebé! Si nos querés hacer un regalo, te dejamos algunas ideas de cositas que nos van a servir:",
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
    aporteIntro: "Y si preferís hacernos un aporte económico al mismo CVU de la tarjeta, nos ayudás a comprar:",
    conAporte: ["Cochecito", "Colecho", "Practicuna"],
  },

  // --- Confirmación de asistencia --------------------------------
  confirmacion: {
    fechaLimite: "2026-11-14", // AAAA-MM-DD
    // URL de la app web de Apps Script (termina en /exec). Ver README.
    appsScriptUrl: "https://script.google.com/macros/s/AKfycbzrVRtUJPAi2fdhyxOECwmhavPJnmOrLxyet8pPUmb5eIX2Ge-gNLFwUf4C7FbIP3ttvw/exec",
  },
};
