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

  // --- Nosotros (fotos) -------------------------------------------
  // Fotos en la carpeta img/, idealmente de 1600px como máximo.
  // ancho y alto: tamaño real del archivo en píxeles (evita saltos al cargar).
  fotos: [
    {
      src: "img/foto-1.jpg",
      ancho: 953,
      alto: 1270,
      alt: "Florencia y Gianfranco",
      mensaje: "Así empezó todo: un verano, una charla que no terminaba más.",
    },
    {
      src: "img/foto-2.jpg",
      ancho: 1200,
      alto: 1500,
      alt: "Florencia y Gianfranco de viaje",
      mensaje: "Muchos viajes, muchos mates y algún que otro avión perdido.",
    },
    {
      src: "img/foto-3.jpg",
      ancho: 1200,
      alto: 1500,
      alt: "Florencia y Gianfranco el día del compromiso",
      mensaje: "Y un día dijimos que sí. Ahora queremos festejarlo con ustedes.",
    },
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
    postres: [
      "Bocha de helado",
      "Flan tradicional o budín de pan",
      "Café o té",
      "Affogato",
    ],
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
