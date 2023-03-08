//*** Esto es lo que podes modificar:

//*** Definir las entradas
function especificarEntradas() {
  return [
    {
      nombre: "montoConIVA",
      tipo: "number",
      etiqueta: "Ingrese monto con IVA(21%):",
      ayuda: "",
    },
  ];
}

//*** Definir las salidas
function especificarSalidas() {
  return [{ nombre: "montoSinIVA", etiqueta: "Monto sin IVA:" }];
}

//*** Definir el proceso
function principal() {
  /*
   * ENUNCIADO:
   *
   * Realice un programa que dado un Monto con IVA ya aplicado, permita recuperar el monto original.
   *   Ejemplo sea Monto = 121, e IVA=21, entonces ORIGEN = 100.
   *
   */
  const montoConIVA = entrada("montoConIVA");
  const IVA = 21;
  let montoSinIVA = (montoConIVA * 100) / (100 + IVA);
  salida("montoSinIVA", montoSinIVA);
}
// *************************************************************** //
