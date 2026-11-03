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

  // --- Foto de la propuesta (debajo de la cuenta regresiva) -------
  propuesta: {
    src: "img/foto-05.jpg",
    ancho: 900,
    alto: 1200,
    alt: "Gianfranco arrodillado entre velas, pidiéndole casamiento a Florencia",
    titulo: "¡Dijo que sí!",
    texto: "23 de julio de 2026",
  },

  // --- Nosotros: carrusel (debajo de Dónde y cuándo) ---------------
  // Fotos en la carpeta img/, de 1200px como máximo.
  // ancho y alto: tamaño real del archivo en píxeles (evita saltos al cargar).
  // fecha y mensaje: texto debajo de la foto (opcionales).
  // posicion: qué parte de la foto mostrar si se recorta, ej. "20% center" (opcional).
  fotos: [
    {
      src: "img/foto-09.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco abrazados en un parque de Alta Gracia",
      fecha: "27 de enero de 2024",
      mensaje: "En Alta Gracia.",
    },
    {
      src: "img/foto-03.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco haciendo un corazón con los brazos a orillas de un lago en el sur",
      fecha: "",
      mensaje: "",
    },
    {
      src: "img/foto-01.jpg",
      ancho: 900,
      alto: 1200,
      alt: "Florencia y Gianfranco abrazados en un tobogán de una plaza",
      fecha: "",
      mensaje: "",
    },
  ],

  // --- Momentos: mosaico de fotos (antes de la Tarjeta) -------------
  // El tamaño sale solo: las fotos horizontales ocupan todo el ancho y las
  // verticales la mitad. Conviene que las verticales vayan de a pares.
  mosaico: [
    { src: "img/foto-06.jpg", ancho: 1200, alto: 900, alt: "Selfie de Florencia y Gianfranco entre las rocas, haciendo caras" },
    { src: "img/foto-08.jpg", ancho: 900, alto: 1200, alt: "Florencia y Gianfranco sentados abrazados en una escalera" },
    { src: "img/foto-02.jpg", ancho: 900, alto: 1200, alt: "Florencia abrazando a Gianfranco en una playa de arena con un corazón dibujado" },
    { src: "img/foto-07.jpg", ancho: 1200, alto: 900, alt: "Florencia y Gianfranco sonriendo en un parque, ella muestra su anillo" },
    { src: "img/foto-04.jpg", ancho: 900, alto: 1200, alt: "Florencia y Gianfranco junto a un muñeco de nieve" },
    { src: "img/foto-10.jpg", ancho: 900, alto: 1200, alt: "Gianfranco apretándole los cachetes a Florencia, de noche" },
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
