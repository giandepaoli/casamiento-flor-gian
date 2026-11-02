(function () {
  "use strict";

  var C = window.CONFIG;
  var TZ = "America/Argentina/Buenos_Aires";
  var fechaEvento = new Date(C.fecha);

  // ================= Utilidades =================

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function capitalizar(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  function partesFecha(date, opciones) {
    var partes = {};
    new Intl.DateTimeFormat("es-AR", opciones).formatToParts(date).forEach(function (p) {
      partes[p.type] = p.value;
    });
    return partes;
  }

  // "Sábado 17 de abril de 2027"
  function fechaLarga(date) {
    var p = partesFecha(date, { timeZone: TZ, weekday: "long", day: "numeric", month: "long", year: "numeric" });
    return capitalizar(p.weekday) + " " + p.day + " de " + p.month + " de " + p.year;
  }

  // "19:30 hs"
  function hora(date) {
    var p = partesFecha(date, { timeZone: TZ, hour: "2-digit", minute: "2-digit", hour12: false });
    return p.hour + ":" + p.minute + " hs";
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
    fechaLarga: fechaLarga(fechaEvento),
    hora: hora(fechaEvento),
    lugarNombre: C.lugar.nombre,
    lugarDireccion: C.lugar.direccion,
    precio: pesos(C.tarjeta.precioPorPersona),
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
  $("#maps-link").href = C.lugar.mapsUrl;

  // Menú
  var menu = $("#menu");
  C.menu.forEach(function (texto) {
    var p = document.createElement("p");
    p.textContent = texto;
    menu.appendChild(p);
  });

  // Regalos
  var gifts = $("#gifts");
  C.regalos.forEach(function (r) {
    var li = document.createElement("li");
    var nombre = document.createElement("span");
    nombre.textContent = r.nombre;
    var precio = document.createElement("span");
    precio.className = "gifts__price";
    precio.textContent = "≈ " + pesos(r.precio);
    li.appendChild(nombre);
    li.appendChild(precio);
    gifts.appendChild(li);
  });

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
    var img = document.createElement("img");
    img.src = f.src;
    img.alt = f.alt || "";
    if (f.ancho) img.width = f.ancho;
    if (f.alto) img.height = f.alto;
    img.loading = "lazy";
    img.decoding = "async";
    var caption = document.createElement("p");
    caption.className = "carousel__caption";
    caption.textContent = f.mensaje;
    li.appendChild(img);
    li.appendChild(caption);
    track.appendChild(li);

    var dot = document.createElement("span");
    dot.className = "carousel__dot" + (i === 0 ? " is-active" : "");
    dots.appendChild(dot);
  });
  if (C.fotos.length < 2) dots.hidden = true;

  track.addEventListener("scroll", function () {
    var slide = track.firstElementChild;
    if (!slide) return;
    var paso = slide.offsetWidth + parseFloat(getComputedStyle(track).columnGap || 0);
    var i = Math.round(track.scrollLeft / paso);
    $all(".carousel__dot", dots).forEach(function (d, j) { d.classList.toggle("is-active", i === j); });
  }, { passive: true });

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
      var va = asisteValor() === "si";
      peopleBlock.hidden = !va;
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

    if (asiste === "si") {
      $all(".person", peopleList).forEach(function (li) {
        var n = $(".person__name", li);
        if (!n.value.trim()) { marcar(n, "Completá el nombre y apellido."); falla(n); }
        if ($(".person__diet", li).value === "Otra") {
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
    if (asiste === "si") {
      invitados = $all(".person", peopleList).map(function (li) {
        var restriccion = $(".person__diet", li).value;
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
    if (payload.asiste === "si") {
      var n = payload.invitados.length;
      $("#success-title").textContent = "¡Gracias!";
      $("#success-text").textContent = "Recibimos tu confirmación para " + n + (n === 1 ? " persona" : " personas") + ". ¡Nos vemos en la fiesta!";
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
