//*** Esto es lo que podes modificar:

//*** Definir las entradas
function especificarEntradas() {
  return [
    {
      nombre: "a",
      tipo: "number",
      etiqueta: "Variable A:",
      ayuda: "Ingrese Valor",
    },
    {
      nombre: "b",
      tipo: "number",
      etiqueta: "Variable B:",
      ayuda: "Ingrese Valor",
    },
  ];
}

//*** Definir las salidas
function especificarSalidas() {
  return [
    { nombre: "salidaA", etiqueta: "Salida Variable A:" },
    { nombre: "salidaB", etiqueta: "Salida Variable B:" },
  ];
}

//*** Definir el proceso
function principal() {
  /*
   * ENUNCIADO:
   *
   * Realice un programa que intercambie los valores de dos variables
   * Ejemplo si A=5 y B=6, luego A=6, B=5
   *
   */
  var a = entrada("a");
  var b = entrada("b");

  // invertir valores de salida
  var salidaA = b;
  var salidaB = a;

  salida("salidaA", salidaA);
  salida("salidaB", salidaB);
}
// *************************************************************** //
