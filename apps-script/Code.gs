/**
 * Recibe las confirmaciones de la web y las guarda en la hoja "Confirmaciones".
 * Escribe una fila por persona. Si no asisten, una sola fila con quien confirma.
 *
 * Body esperado (JSON, enviado como text/plain):
 * {
 *   "id_envio": "uuid",
 *   "quien_confirma": "Nombre Apellido",
 *   "asiste": "ceremonia" | "ceremonia_almuerzo" | "no",
 *   "invitados": [{ "nombre": "Nombre Apellido", "restriccion": "Ninguna" }],
 *   "mensaje": "texto opcional"
 * }
 */

var NOMBRE_HOJA = 'Confirmaciones';
var ENCABEZADOS = ['fecha_envio', 'id_envio', 'quien_confirma', 'asiste', 'invitado', 'restriccion', 'mensaje'];
var MAX_INVITADOS = 30;
var OPCIONES_ASISTE = {
  ceremonia: 'Solo ceremonia',
  ceremonia_almuerzo: 'Ceremonia + almuerzo',
  no: 'No',
};

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(30000);

    if (!e || !e.postData || !e.postData.contents) throw new Error('No llegaron datos.');
    var data = JSON.parse(e.postData.contents);

    var quien = limpiar(data.quien_confirma);
    if (!quien) throw new Error('Falta el nombre de quien confirma.');

    var asiste = OPCIONES_ASISTE.hasOwnProperty(data.asiste) ? OPCIONES_ASISTE[data.asiste] : '';
    if (!asiste) throw new Error('Falta indicar si asisten.');

    var fecha = new Date();
    var id = limpiar(data.id_envio) || Utilities.getUuid();
    var mensaje = limpiar(data.mensaje);
    var filas;

    if (data.asiste !== 'no') {
      var almuerza = data.asiste === 'ceremonia_almuerzo';
      var invitados = Array.isArray(data.invitados) ? data.invitados.slice(0, MAX_INVITADOS) : [];
      filas = invitados
        .map(function (p) {
          var restriccion = almuerza ? limpiar(p && p.restriccion) || 'Ninguna' : '';
          return [fecha, id, quien, asiste, limpiar(p && p.nombre), restriccion, mensaje];
        })
        .filter(function (fila) { return fila[4]; });
      if (!filas.length) throw new Error('No hay invitados en la confirmación.');
    } else {
      filas = [[fecha, id, quien, asiste, quien, '', mensaje]];
    }

    var hoja = obtenerHoja();
    hoja.getRange(hoja.getLastRow() + 1, 1, filas.length, ENCABEZADOS.length).setValues(filas);

    return responder({ ok: true });
  } catch (err) {
    return responder({ ok: false, error: String((err && err.message) || err) });
  } finally {
    lock.releaseLock();
  }
}

function obtenerHoja() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = ss.getSheetByName(NOMBRE_HOJA);
  if (!hoja) {
    hoja = ss.insertSheet(NOMBRE_HOJA);
    hoja.getRange(1, 1, 1, ENCABEZADOS.length).setValues([ENCABEZADOS]).setFontWeight('bold');
    hoja.setFrozenRows(1);
  }
  return hoja;
}

// Texto recortado y sin riesgo de que la hoja lo interprete como fórmula.
function limpiar(valor) {
  if (valor === null || valor === undefined) return '';
  var s = String(valor).trim().slice(0, 1000);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function responder(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
