//*** Esto es lo que podes modificar:

//*** Definir las entradas
function especificarEntradas() {
  return [
    {
      nombre: "base",
      tipo: "number",
      etiqueta: "Base del triángulo:",
      ayuda: "Ingrese Base",
    },
    {
      nombre: "altura",
      tipo: "number",
      etiqueta: "Altura del triángulo:",
      ayuda: "Ingrese Altura",
    },
  ];
}

//*** Definir las salidas
function especificarSalidas() {
  return [{ nombre: "area", etiqueta: "Area del Triángulo:" }];
}

//*** Definir el proceso
function principal() {
  /*
   * ENUNCIADO:
   *
   * Realice un programa que calcule la superficie de un triángulo, dados base y altura
   * Ejemplo BASE=10, ALTURA = 2 , entonces RESULTADO = 10
   *
   */
  var altura = entrada("altura");
  var base = entrada("base");
  var area = (base * altura) / 2;

  salida("area", area);
}
// *************************************************************** //
