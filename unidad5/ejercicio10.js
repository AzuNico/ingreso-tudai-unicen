// SOLUCIÓN TOMADA DEL FORO

function especificarEntradas() {
  return [
    {
      nombre: "horasDecimales", tipo: "float",
      etiqueta: "Ingrese horas decimales:",
      ayuda: "Ingrese valor horas decimales"
    },
  ]
}

//*** Definir las salidas
function especificarSalidas() {
  return [
    { nombre: "tiempo", etiqueta: "Corresponde a:" },
  ]
}

/**
 * 
 *  Realizar un programa que convierta un valor de hora definida en decimales, al
 *   correspondiente hora, minutos y segundos.
 *       ○ Ejemplo Hora=1.5, corresponde a 1 Hora, 30 Minutos
 *       ○ Ejemplo Hora=5.371, corresponde a: 5 horas, 22.26 minutos, que se puede
 * 
 *  detallar como 5 horas, 22 minutos, 15.6 segundos
 */

//*** Definir el proceso
function principal() {
  var horasDecimales = entrada("horasDecimales");
  var horasEnteras = Math.trunc(horasDecimales);
  var restoHorasDecimales = (horasDecimales - horasEnteras);
  var minutosDecimales = (restoHorasDecimales * 60);
  var minutosEnteros = Math.trunc(minutosDecimales);
  var restoMinutosDecimales = (minutosDecimales - minutosEnteros);
  var segundosDecimales = Number(restoMinutosDecimales * 60).toFixed(1);

  let mensaje = ''

  if (horasEnteras === 1) {
    mensaje = horasEnteras + " hora, "
  } else {
    mensaje = horasEnteras + " horas, "
  }

  if (minutosEnteros === 1) {
    mensaje = mensaje + minutosEnteros + " minuto, "
  } else {
    mensaje = mensaje + minutosEnteros + " minutos, "
  }

  mensaje = mensaje + segundosDecimales + " segundos"

  consola("tiempo: " + mensaje);
  salida("tiempo", mensaje);

}
// *************************************************************** //