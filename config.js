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

  // Fecha y hora del casamiento, con zona horaria de Argentina (-03:00).
  // Se usa para la cuenta regresiva y para mostrar la fecha.
  fecha: "2026-11-21T19:30:00-03:00", // la hora (19:30) es de ejemplo

  // Mensaje que reemplaza a la cuenta regresiva cuando llega el día.
  mensajeDiaDelCasamiento: "¡Llegó el gran día! Nos vemos en la fiesta.",

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
  lugar: {
    nombre: "Estancia La Candelaria",
    direccion: "Ruta 205 km 92, Lobos, Buenos Aires",
    mapsUrl: "https://maps.app.goo.gl/ejemplo",
  },

  // --- La comida -------------------------------------------------
  // Cada elemento es un párrafo.
  menu: [
    "Arrancamos con una recepción de bocaditos fríos y calientes y barra de tragos.",
    "De principal, ojo de bife con papas rústicas y vegetales asados.",
    "Mesa dulce, torta y, para cerrar la noche, pizzas y café.",
    "Si tenés alguna restricción alimentaria, avisanos al confirmar y lo tenemos en cuenta.",
  ],

  // --- Tarjeta ---------------------------------------------------
  tarjeta: {
    precioPorPersona: 95000, // en pesos, sin puntos
    cvu: "0000003100012345678901",
    alias: "flor.gian.boda",
    titular: "Gian De Paoli",
    fechaLimite: "2026-11-19", // AAAA-MM-DD (EJEMPLO)
  },

  // --- Regalos ---------------------------------------------------
  // precio: valor aproximado en pesos, sin puntos.
  regalos: [
    { nombre: "Juego de sábanas king", precio: 85000 },
    { nombre: "Cafetera espresso", precio: 320000 },
    { nombre: "Set de ollas", precio: 210000 },
    { nombre: "Vajilla para 6", precio: 150000 },
    { nombre: "Una noche de la luna de miel", precio: 250000 },
  ],

  // --- Confirmación de asistencia --------------------------------
  confirmacion: {
    fechaLimite: "2026-11-14", // AAAA-MM-DD (EJEMPLO)
    // URL de la app web de Apps Script (termina en /exec). Ver README.
    appsScriptUrl: "https://script.google.com/macros/s/AKfycbzrVRtUJPAi2fdhyxOECwmhavPJnmOrLxyet8pPUmb5eIX2Ge-gNLFwUf4C7FbIP3ttvw/exec",
  },
};
