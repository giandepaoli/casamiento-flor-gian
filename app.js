(function () {
  "use strict";

  var C = window.CONFIG;
  var TZ = "America/Argentina/Buenos_Aires";
  var fechaEvento = new Date(C.fecha);

  // ================= Utilidades =================

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }


  function partesFecha(date, opciones) {
    var partes = {};
    new Intl.DateTimeFormat("es-AR", opciones).formatToParts(date).forEach(function (p) {
      partes[p.type] = p.value;
    });
    return partes;
  }

  // "21.11.2026"
  function fechaPuntos(date) {
    var p = partesFecha(date, { timeZone: TZ, day: "2-digit", month: "2-digit", year: "numeric" });
    return p.day + "." + p.month + "." + p.year;
  }

  // "21 · 11 · 2026" (portada)
  function fechaPortada(date) {
    var p = partesFecha(date, { timeZone: TZ, day: "2-digit", month: "2-digit", year: "numeric" });
    return p.day + " \u00b7 " + p.month + " \u00b7 " + p.year;
  }

  // "Sábado 21 de Noviembre de 2026"
  function fechaCompleta(date) {
    var p = partesFecha(date, { timeZone: TZ, weekday: "long", day: "numeric", month: "long", year: "numeric" });
    function mayus(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
    return mayus(p.weekday) + " " + p.day + " de " + mayus(p.month) + " de " + p.year;
  }

  // "21 de noviembre de 2026"
  function fechaTexto(date) {
    var p = partesFecha(date, { timeZone: TZ, day: "numeric", month: "long", year: "numeric" });
    return p.day + " de " + p.month + " de " + p.year;
  }

  // "2027-03-31" -> "31 de marzo"
  function diaYMes(isoDia) {
    var d = new Date(isoDia + "T12:00:00Z");
    var p = partesFecha(d, { timeZone: "UTC", day: "numeric", month: "long" });
    return p.day + " de " + p.month;
  }

  var formatoPesos = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });
  function pesos(n) { return formatoPesos.format(n); }

  // ================= Datos de config.js =================

  var valores = {
    nombre1: C.novios.nombre1,
    nombre2: C.novios.nombre2,
    fecha: fechaPuntos(fechaEvento),
    fechaPortada: fechaPortada(fechaEvento),
    fechaCompleta: fechaCompleta(fechaEvento),
    fechaTexto: fechaTexto(fechaEvento),
    invitacionTitulo: C.invitacion.titulo,
    invitacionScript: C.invitacion.tituloScript,
    invitacionTexto: C.invitacion.texto,
    invitacionDespedida: C.invitacion.despedida,
    invitacionFirma: C.invitacion.firma,
    menuIntro: C.menu.intro,
    menuNota: C.menu.nota,
    bebidasIntro: C.menu.bebidasIntro,
    menuAdicionales: C.menu.adicionales,
    precio: pesos(C.tarjeta.precioPorPersona),
    unidadPrecio: C.tarjeta.unidadPrecio,
    precioNinos: pesos(C.tarjeta.precioNinos),
    unidadPrecioNinos: C.tarjeta.unidadPrecioNinos,
    aporteIntro: C.regalos.aporteIntro,
    cvu: C.tarjeta.cvu,
    alias: C.tarjeta.alias,
    titular: C.tarjeta.titular,
    tarjetaLimite: diaYMes(C.tarjeta.fechaLimite),
    confirmacionLimite: diaYMes(C.confirmacion.fechaLimite),
  };

  $all("[data-config]").forEach(function (el) {
    var v = valores[el.getAttribute("data-config")];
    if (v != null) el.textContent = v;
  });

  document.title = C.novios.nombre1 + " & " + C.novios.nombre2 + " · ¡Nos casamos!";
  function crear(tag, clase, texto) {
    var el = document.createElement(tag);
    if (clase) el.className = clase;
    if (texto != null) el.textContent = texto;
    return el;
  }

  function lista(sel, items, render) {
    var ul = $(sel);
    items.forEach(function (item) { ul.appendChild(render(item)); });
  }

  // Dónde y cuándo
  lista("#momentos", C.momentos, function (m) {
    var div = crear("div", "moment");
    div.appendChild(crear("p", "moment__title", m.titulo));
    div.appendChild(crear("p", "moment__time", m.hora));
    div.appendChild(crear("p", "moment__place", m.lugar));
    div.appendChild(crear("p", "moment__addr", m.direccion));
    var a = crear("a", "btn", "Ver ubicación");
    a.href = m.mapsUrl;
    a.target = "_blank";
    a.rel = "noopener";
    div.appendChild(a);
    return div;
  });

  // Menú
  lista("#menu-principales", C.menu.principales, function (p) {
    var li = crear("li");
    li.appendChild(crear("span", "dishes__name", p.nombre));
    li.appendChild(crear("span", "dishes__desc", p.descripcion));
    return li;
  });
  lista("#menu-bebidas", C.menu.bebidas, function (texto) {
    var li = crear("li");
    li.appendChild(crear("span", "dishes__name", texto));
    return li;
  });

  // Menú de niños
  var ninos = C.menu.ninos;
  if (ninos) {
    var card = $("#menu-ninos");
    card.appendChild(crear("p", "kids__title", ninos.titulo));
    if (ninos.edad) card.appendChild(crear("p", "kids__age", ninos.edad));
    card.appendChild(crear("p", "kids__desc", ninos.descripcion));
  } else {
    $("#menu-ninos").hidden = true;
  }

  // Regalos
  [].concat(C.regalos.intro).forEach(function (texto, i) {
    $("#regalos-intro").appendChild(crear("p", null, texto));
    // La foto del bebé va justo debajo del primer párrafo.
    if (i === 0 && C.regalos.foto && C.regalos.foto.src) {
      var fig = crear("figure", "baby");
      var im = document.createElement("img");
      im.src = C.regalos.foto.src;
      im.alt = C.regalos.foto.alt || "";
      im.width = C.regalos.foto.ancho;
      im.height = C.regalos.foto.alto;
      im.loading = "lazy";
      fig.appendChild(im);
      $("#regalos-intro").appendChild(fig);
    }
  });
  lista("#ideas-bebe", C.regalos.ideasBebe, function (texto) { return crear("li", null, texto); });
  lista("#con-aporte", C.regalos.conAporte, function (texto) { return crear("li", null, texto); });

  // ================= Cuenta regresiva =================

  var countdown = $("#countdown");
  var countdownDone = $("#countdown-done");
  var celdas = {};
  $all("[data-unit]", countdown).forEach(function (el) { celdas[el.getAttribute("data-unit")] = el; });

  function dos(n) { return n < 10 ? "0" + n : String(n); }

  function tick() {
    var resta = fechaEvento.getTime() - Date.now();
    if (resta <= 0) {
      countdown.hidden = true;
      countdownDone.textContent = C.mensajeDiaDelCasamiento;
      countdownDone.hidden = false;
      clearInterval(timer);
      return;
    }
    var s = Math.floor(resta / 1000);
    celdas.dias.textContent = Math.floor(s / 86400);
    celdas.horas.textContent = dos(Math.floor((s % 86400) / 3600));
    celdas.minutos.textContent = dos(Math.floor((s % 3600) / 60));
    celdas.segundos.textContent = dos(s % 60);
  }
  var timer = setInterval(tick, 1000);
  tick();

  // ================= Nosotros (carrusel) =================

  var track = $("#carousel-track");
  var dots = $("#carousel-dots");

  C.fotos.forEach(function (f, i) {
    var li = document.createElement("li");
    li.className = "carousel__slide";
    // Recuadro vertical. Las fotos horizontales o cuadradas se muestran
    // completas, sobre fondo blanco liso, para no cortarlas.
    var marco = crear("div", "carousel__frame");
    if (f.ancho && f.alto && f.ancho >= f.alto) {
      marco.classList.add("is-wide");
      marco.style.setProperty("--foto", 'url("' + f.src + '")');
    }
    if (f.bn) marco.classList.add("is-bn");
    marco.appendChild(imagen(f));
    li.appendChild(marco);
    if (f.mensaje) li.appendChild(crear("p", "carousel__caption", f.mensaje));
    if (f.cita) li.appendChild(crear("p", "carousel__cite", f.cita));
    track.appendChild(li);

    var dot = document.createElement("span");
    dot.className = "carousel__dot" + (i === 0 ? " is-active" : "");
    dots.appendChild(dot);
  });
  if (C.fotos.length < 2) dots.hidden = true;

  // Con muchas fotos, un contador ("3 / 28") en lugar de los puntitos.
  var contador = null;
  if (C.fotos.length > 10) {
    dots.hidden = true;
    contador = crear("p", "carousel__count", "1 / " + C.fotos.length);
    contador.setAttribute("aria-hidden", "true");
    dots.parentNode.appendChild(contador);
  }

  function imagen(f) {
    var img = document.createElement("img");
    img.src = f.src;
    img.alt = f.alt || "";
    if (f.ancho) img.width = f.ancho;
    if (f.alto) img.height = f.alto;
    img.loading = "lazy";
    img.decoding = "async";
    if (f.posicion) img.style.objectPosition = f.posicion;
    if (f.bn) img.classList.add("is-bn");
    return img;
  }

  // ================= Propuesta (video o foto) =================

  var propuesta = $("#propuesta");
  if (C.propuesta && C.propuesta.video) {
    propuesta.appendChild(videoPropuesta(C.propuesta));
  } else if (C.propuesta) {
    propuesta.appendChild(imagen(C.propuesta));
  }
  if (C.propuesta) {
    var cap = crear("figcaption", "proposal__caption");
    if (C.propuesta.titulo) cap.appendChild(crear("span", "proposal__title", C.propuesta.titulo));
    if (C.propuesta.texto) cap.appendChild(crear("span", "proposal__text", C.propuesta.texto));
    propuesta.appendChild(cap);
  } else {
    propuesta.hidden = true;
  }

  // Video que arranca solo y sin sonido (es lo único que permiten los
  // navegadores). Al primer toque en cualquier parte de la página se activa
  // el sonido y sigue en loop mientras recorren la invitación. El botón
  // flotante permite silenciarlo o volver a activarlo.
  function videoPropuesta(cfg) {
    var wrap = crear("div", "proposal__media");
    var video = document.createElement("video");
    video.src = cfg.video;
    if (cfg.poster) video.poster = cfg.poster;
    if (cfg.ancho) video.width = cfg.ancho;
    if (cfg.alto) video.height = cfg.alto;
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("preload", "auto");
    video.setAttribute("aria-label", cfg.alt || "");
    wrap.appendChild(video);

    var hint = crear("button", "proposal__hint");
    hint.type = "button";
    hint.innerHTML = '<svg aria-hidden="true"><use href="#i-sound-on"/></svg><span>Tocá para escuchar</span>';
    wrap.appendChild(hint);

    var toggle = crear("button", "sound-toggle");
    toggle.type = "button";
    toggle.innerHTML = '<svg aria-hidden="true"><use href="#i-sound-off"/></svg>';
    document.body.appendChild(toggle);

    var eligio = false; // la persona ya tocó el botón de sonido

    // Si config.js define "musica", suena esa canción en loop y el video queda
    // siempre mudo. Si no, se usa el sonido del propio video.
    var audio = null;
    var activo = false;
    if (C.musica) {
      audio = new Audio(C.musica);
      audio.loop = true;
      audio.preload = "auto";
    }
    function conSonidoAhora() { return audio ? activo : !video.muted; }

    function pintar() {
      var conSonido = conSonidoAhora();
      $("use", toggle).setAttribute("href", conSonido ? "#i-sound-on" : "#i-sound-off");
      toggle.setAttribute("aria-label", conSonido ? "Silenciar música" : "Activar música");
      toggle.classList.toggle("is-on", conSonido);
      hint.hidden = conSonido;
    }

    function activarSonido() {
      if (audio) {
        activo = true;
        var pa = audio.play();
        if (pa && pa.catch) pa.catch(function () { activo = false; pintar(); });
        pintar();
        return;
      }
      video.muted = false;
      var pr = video.play();
      if (pr && pr.catch) pr.catch(function () { video.muted = true; pintar(); });
      pintar();
    }

    function silenciar() {
      if (audio) { activo = false; audio.pause(); pintar(); return; }
      video.muted = true;
      pintar();
    }

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      eligio = true;
      conSonidoAhora() ? silenciar() : activarSonido();
    });
    hint.addEventListener("click", function (e) {
      e.stopPropagation();
      eligio = true;
      activarSonido();
    });

    // Primer toque o tecla en cualquier lado: activa la música.
    function primerToque(e) {
      if (e && e.target && (toggle.contains(e.target) || hint.contains(e.target))) return;
      document.removeEventListener("click", primerToque, true);
      document.removeEventListener("keydown", primerToque, true);
      if (!eligio && !conSonidoAhora()) activarSonido();
    }
    document.addEventListener("click", primerToque, true);
    document.addEventListener("keydown", primerToque, true);

    // Si cambian de app o de pestaña, se pausa; al volver, sigue.
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        video.pause();
        if (audio) audio.pause();
      } else {
        video.play().catch(function () {});
        if (audio && activo) audio.play().catch(function () {});
      }
    });

    pintar();
    return wrap;
  }

  // ================= Momentos (mosaico) =================
  // Horizontales a todo el ancho, verticales de a dos. Si queda una vertical
  // sola en su fila, también va a todo el ancho para no dejar un hueco.

  var mosaico = $("#mosaico");
  var lista_m = C.mosaico || [];
  var pendiente = null;
  lista_m.forEach(function (f, i) {
    var li = crear("li", "mosaic__item");
    li.appendChild(imagen(f));
    var horizontal = f.ancho > f.alto;
    if (horizontal) {
      li.classList.add("mosaic__item--wide");
      if (pendiente) pendiente.classList.add("mosaic__item--wide", "mosaic__item--tall");
      pendiente = null;
    } else {
      pendiente = pendiente ? null : li;
    }
    mosaico.appendChild(li);
  });
  if (pendiente) pendiente.classList.add("mosaic__item--wide", "mosaic__item--tall");
  if (!lista_m.length) $("#fotos").hidden = true;

  // Flechas para pasar las fotos (se muestran en pantallas con mouse).
  var btnPrev = $("#carousel-prev");
  var btnNext = $("#carousel-next");
  function pasoCarrusel() {
    var slide = track.firstElementChild;
    if (!slide) return 0;
    return slide.offsetWidth + parseFloat(getComputedStyle(track).columnGap || 0);
  }
  function irA(delta) {
    var paso = pasoCarrusel();
    if (!paso) return;
    var i = Math.round(track.scrollLeft / paso) + delta;
    i = Math.max(0, Math.min(i, C.fotos.length - 1));
    track.scrollTo({ left: i * paso, behavior: "smooth" });
  }
  function pintarFlechas() {
    var paso = pasoCarrusel();
    var i = paso ? Math.round(track.scrollLeft / paso) : 0;
    btnPrev.disabled = i <= 0;
    btnNext.disabled = i >= C.fotos.length - 1;
  }
  if (C.fotos.length < 2) {
    btnPrev.hidden = true;
    btnNext.hidden = true;
  } else {
    btnPrev.addEventListener("click", function () { irA(-1); });
    btnNext.addEventListener("click", function () { irA(1); });
    track.tabIndex = 0;
    track.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { e.preventDefault(); irA(-1); }
      else if (e.key === "ArrowRight") { e.preventDefault(); irA(1); }
    });
    pintarFlechas();
  }

  track.addEventListener("scroll", function () {
    var slide = track.firstElementChild;
    if (!slide) return;
    var paso = slide.offsetWidth + parseFloat(getComputedStyle(track).columnGap || 0);
    var i = Math.round(track.scrollLeft / paso);
    pintarFlechas();
    $all(".carousel__dot", dots).forEach(function (d, j) { d.classList.toggle("is-active", i === j); });
    if (contador) contador.textContent = (Math.min(i, C.fotos.length - 1) + 1) + " / " + C.fotos.length;
  }, { passive: true });

  // ================= Tamaño de letra (para leer mejor) =================
  // Botón flotante que agranda el texto de la invitación en tres pasos y
  // recuerda la elección en este dispositivo.

  (function () {
    var NIVELES = [0, 1, 2];
    var nivel = 0;
    try { nivel = parseInt(localStorage.getItem("tamanoLetra") || "0", 10) || 0; } catch (e) { /* nada */ }
    if (NIVELES.indexOf(nivel) < 0) nivel = 0;

    var btn = crear("button", "text-toggle");
    btn.type = "button";
    document.body.appendChild(btn);

    function aplicar(guardar) {
      if (nivel) document.documentElement.setAttribute("data-tamano", String(nivel));
      else document.documentElement.removeAttribute("data-tamano");
      var maximo = nivel === NIVELES.length - 1;
      btn.textContent = maximo ? "A\u2212" : "A+";
      btn.setAttribute("aria-label", maximo ? "Volver al tamaño de letra normal" : "Agrandar la letra");
      btn.classList.toggle("is-on", nivel > 0);
      if (guardar) { try { localStorage.setItem("tamanoLetra", String(nivel)); } catch (e) { /* nada */ } }
    }

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      // Mantiene más o menos la misma parte de la página a la vista.
      var alto = document.documentElement.scrollHeight;
      var ratio = alto ? window.scrollY / alto : 0;
      nivel = (nivel + 1) % NIVELES.length;
      aplicar(true);
      window.scrollTo(0, ratio * document.documentElement.scrollHeight);
    });

    aplicar(false);
  })();

  // ================= Copiar CVU / alias =================

  function copiar(texto) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(texto);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = texto;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { /* nada */ }
      document.body.removeChild(ta);
      ok ? resolve() : reject();
    });
  }

  $all("[data-copy]").forEach(function (btn) {
    var label = $("span", btn);
    btn.addEventListener("click", function () {
      copiar(C.tarjeta[btn.getAttribute("data-copy")]).then(function () {
        label.textContent = "¡Copiado!";
        btn.classList.add("is-copied");
      }, function () {
        label.textContent = "No se pudo";
      }).then(function () {
        setTimeout(function () {
          label.textContent = "Copiar";
          btn.classList.remove("is-copied");
        }, 2000);
      });
    });
  });

  // ================= Confirmación de asistencia =================

  var form = $("#rsvp-form");
  var quien = $("#quien");
  var mensaje = $("#mensaje");
  var peopleBlock = $("#people-block");
  var peopleList = $("#people-list");
  var addPerson = $("#add-person");
  var submit = $("#submit");
  var status = $("#form-status");
  var template = $("#person-template");
  var personaSeq = 0;

  // Mientras no editen a mano a la primera persona, se completa con el nombre de quien confirma.
  var primeraEditada = false;

  // "ceremonia" | "ceremonia_almuerzo" | "no"
  function vanAlgo(asiste) { return asiste === "ceremonia" || asiste === "ceremonia_almuerzo"; }

  function asisteValor() {
    var r = $("input[name=asiste]:checked", form);
    return r ? r.value : "";
  }

  function renumerar() {
    var items = $all(".person", peopleList);
    items.forEach(function (li, i) {
      $(".person__num", li).textContent = "Invitado " + (i + 1);
      $(".person__remove", li).hidden = items.length === 1;
    });
  }

  function agregarPersona(nombre) {
    personaSeq += 1;
    var li = template.content.firstElementChild.cloneNode(true);
    var idBase = "p" + personaSeq;
    var nameInput = $(".person__name", li);
    var diet = $(".person__diet", li);
    var other = $(".person__other", li);
    var otherInput = $(".person__other-input", li);
    var labels = $all("label", li);

    nameInput.id = idBase + "-nombre";
    diet.id = idBase + "-restriccion";
    otherInput.id = idBase + "-otra";
    labels[0].htmlFor = nameInput.id;
    labels[1].htmlFor = diet.id;
    labels[2].htmlFor = otherInput.id;

    if (nombre) nameInput.value = nombre;

    nameInput.addEventListener("input", function () {
      if (li === peopleList.firstElementChild) primeraEditada = true;
      limpiarError(nameInput);
    });
    otherInput.addEventListener("input", function () { limpiarError(otherInput); });

    diet.addEventListener("change", function () {
      other.hidden = diet.value !== "Otra";
      if (!other.hidden) otherInput.focus();
    });

    $(".person__remove", li).addEventListener("click", function () {
      li.parentNode.removeChild(li);
      renumerar();
    });

    peopleList.appendChild(li);
    renumerar();
    return li;
  }

  quien.addEventListener("input", function () {
    limpiarError(quien);
    var primera = peopleList.firstElementChild;
    if (primera && !primeraEditada) $(".person__name", primera).value = quien.value;
  });

  $all("input[name=asiste]", form).forEach(function (r) {
    r.addEventListener("change", function () {
      setError("asiste", "");
      var asiste = asisteValor();
      var va = vanAlgo(asiste);
      peopleBlock.hidden = !va;
      peopleBlock.classList.toggle("solo-ceremonia", asiste === "ceremonia");
      if (va && !peopleList.firstElementChild) agregarPersona(quien.value.trim());
    });
  });

  addPerson.addEventListener("click", function () {
    var li = agregarPersona("");
    $(".person__name", li).focus();
  });

  // --- Validación ---

  function errorDe(input) {
    return input.id === "quien" ? $("[data-error-for=quien]") : $(".field__error", input.closest(".field"));
  }
  function setError(cual, texto) { $("[data-error-for=" + cual + "]").textContent = texto; }
  function marcar(input, texto) {
    input.classList.add("is-invalid");
    errorDe(input).textContent = texto;
  }
  function limpiarError(input) {
    input.classList.remove("is-invalid");
    errorDe(input).textContent = "";
  }

  function validar() {
    var primero = null;
    function falla(el) { if (!primero) primero = el; }

    if (!quien.value.trim()) { marcar(quien, "Escribí tu nombre y apellido."); falla(quien); }

    var asiste = asisteValor();
    if (!asiste) { setError("asiste", "Elegí una opción."); falla($("input[name=asiste]", form)); }

    if (vanAlgo(asiste)) {
      $all(".person", peopleList).forEach(function (li) {
        var n = $(".person__name", li);
        if (!n.value.trim()) { marcar(n, "Completá el nombre y apellido."); falla(n); }
        if (asiste === "ceremonia_almuerzo" && $(".person__diet", li).value === "Otra") {
          var o = $(".person__other-input", li);
          if (!o.value.trim()) { marcar(o, "Contanos cuál es la restricción."); falla(o); }
        }
      });
    }

    if (primero) primero.focus();
    return !primero;
  }

  // --- Armado del envío ---

  function nuevoId() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
  }

  function armarPayload() {
    var asiste = asisteValor();
    var invitados = [];
    if (vanAlgo(asiste)) {
      invitados = $all(".person", peopleList).map(function (li) {
        // La restricción alimentaria solo importa si se quedan al almuerzo.
        var restriccion = asiste === "ceremonia_almuerzo" ? $(".person__diet", li).value : "";
        if (restriccion === "Otra") restriccion = "Otra: " + $(".person__other-input", li).value.trim();
        return { nombre: $(".person__name", li).value.trim(), restriccion: restriccion };
      });
    }
    return {
      id_envio: nuevoId(),
      quien_confirma: quien.value.trim(),
      asiste: asiste,
      invitados: invitados,
      mensaje: mensaje.value.trim(),
    };
  }

  function enviar(payload) {
    if (!C.confirmacion.appsScriptUrl) {
      return Promise.reject(new Error("Falta configurar la URL del Apps Script en config.js."));
    }
    return fetch(C.confirmacion.appsScriptUrl, {
      method: "POST",
      // text/plain evita el preflight de CORS que Apps Script no soporta.
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (!data || !data.ok) throw new Error((data && data.error) || "Respuesta inesperada.");
        return data;
      });
  }

  function mostrarExito(payload) {
    form.hidden = true;
    var ok = $("#rsvp-success");
    if (vanAlgo(payload.asiste)) {
      var n = payload.invitados.length;
      var que = payload.asiste === "ceremonia" ? " a la ceremonia" : " a la ceremonia y al almuerzo";
      $("#success-title").textContent = "¡Gracias!";
      $("#success-text").textContent = "Recibimos tu confirmación para " + n + (n === 1 ? " persona" : " personas") + que + ". ¡Nos vemos ahí!";
    } else {
      $("#success-title").textContent = "¡Gracias por avisar!";
      $("#success-text").textContent = "Te vamos a extrañar. Gracias por contarnos.";
    }
    ok.hidden = false;
    ok.focus();
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.textContent = "";
    status.classList.remove("is-error");
    if (!validar()) return;

    var payload = armarPayload();
    submit.disabled = true;
    submit.textContent = "Enviando…";

    enviar(payload).then(function () {
      mostrarExito(payload);
    }).catch(function (err) {
      console.error(err);
      status.textContent = "No pudimos enviar tu confirmación. Probá de nuevo en un rato o escribinos por WhatsApp.";
      status.classList.add("is-error");
      submit.disabled = false;
      submit.textContent = "Enviar confirmación";
    });
  });
})();
