//*** Esto es lo que podes modificar:

//*** Definir las entradas
function especificarEntradas() {
  return [
    {
      nombre: "montoPesos",
      tipo: "number",
      etiqueta: "Ingrese monto en pesos:",
      ayuda: "",
    },
    {
      nombre: "interes",
      tipo: "number",
      etiqueta: "Ingrese porcentaje de interes:",
      ayuda: "",
    },
  ];
}

//*** Definir las salidas
function especificarSalidas() {
  return [{ nombre: "capital", etiqueta: "Plazo Fijo:" }];
}

//*** Definir el proceso
function principal() {
  /*
   * ENUNCIADO:
   *
   * Realizar un programa que pregunte un monto de pesos, y un interés mensual, que calcule cuanto es el monto al fin del mes con el interés aplicado.
   *   Ejemplo, sea Monto = 100 y Porcentaje = 25, entonces Saldo = 125
   *
   */
  const montoPesos = entrada("montoPesos");
  const interes = entrada("interes");
  let capital = (montoPesos * interes) / 100 + montoPesos;

  salida("capital", capital);
}
// *************************************************************** //
