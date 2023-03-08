//*** Esto es lo que podes modificar:

//*** Definir las entradas
function especificarEntradas() {
  return [
    {
      nombre: "metros",
      tipo: "number",
      etiqueta: "Ingrese Metros:",
      ayuda: "Metros",
    },
  ];
}

//*** Definir las salidas
function especificarSalidas() {
  return [{ nombre: "pies", etiqueta: "Los metros ingresados equivalen en pies a:" }];
}

//*** Definir el proceso
function principal() {
  /*
   * ENUNCIADO:
   *
   * Realice un programa que haga la conversión de metros a pies, dado que 1 metro son 3,28 pies. Esto es, dada una cantidad en metros que el sistema muestre la cantidad de pies.
   * Ejemplo, dado METROS=2 , RESULTADO=6,56
   *
   */
  var metros = entrada("metros");
  var pies = metros * 3.28;

  salida("pies", pies);
}
// *************************************************************** //
