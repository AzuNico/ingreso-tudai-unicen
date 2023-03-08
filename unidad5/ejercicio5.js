//*** Esto es lo que podes modificar:

//*** Definir las entradas
function especificarEntradas() {
  return [
    {
      nombre: "dolar",
      tipo: "number",
      etiqueta: "Ingrese monto en dolares:",
      ayuda: "",
    },
  ];
}

//*** Definir las salidas
function especificarSalidas() {
  return [{ nombre: "euro", etiqueta: "Euros:" }];
}

//*** Definir el proceso
function principal() {
  /*
   * ENUNCIADO:
   *
   * Dado que 1 dólar estadounidense equivale a 0,96 euros, realizar un programa que realice la conversión de dolares a euros.
   *
   */
  const dolar = entrada("dolar");
  let euro = dolar * 0.96;

  salida("euro", euro);
}
// *************************************************************** //
