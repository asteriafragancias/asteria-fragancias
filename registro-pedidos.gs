/**
 * Registro de pedidos de Asteria Fragancias.
 * Pegá este código en Extensiones > Apps Script de tu planilla de Google.
 */
function limpiar(v) {
  v = String(v == null ? "" : v);
  return /^[=+\-@]/.test(v) ? "'" + v : v; // evita fórmulas inyectadas desde la web
}

function doPost(e) {
  var libro = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = libro.getSheetByName("Pedidos") || libro.insertSheet("Pedidos");
  if (hoja.getLastRow() === 0) {
    hoja.appendRow(["Fecha", "N° pedido", "Nombre", "Productos", "Total", "Medio de pago", "Entrega", "Dirección", "Comentarios", "Estado"]);
  }
  var d = {};
  try { d = JSON.parse(e.postData.contents); } catch (err) {}
  hoja.appendRow([new Date(), limpiar(d.nro), limpiar(d.nombre), limpiar(d.productos), limpiar(d.total), limpiar(d.pago), limpiar(d.entrega), limpiar(d.direccion), limpiar(d.comentarios), "Pendiente"]);
  return ContentService.createTextOutput("ok");
}
