//*** Esto es lo que podes modificar:

//*** Definir las entradas
function especificarEntradas() {
  return [
    {
      nombre: "radio",
      tipo: "number",
      etiqueta: "Ingrese radio del silo(m):",
      ayuda: "",
    },
    {
      nombre: "altura",
      tipo: "number",
      etiqueta: "Ingrese altura del silo(m):",
      ayuda: "",
    },
  ];
}

//*** Definir las salidas
function especificarSalidas() {
  return [{ nombre: "volumen", etiqueta: "El volumen del silo es de (m3)):" }];
}

//*** Definir el proceso
function principal() {
  /*
   * ENUNCIADO:
   *
   * Realizar un programa que permita calcular el volumen de un silo de base circular.
   *   Ejemplo, sea la base circular del silo de un Radio=5 metros, y una altura de 10 metros, el volumen del silo será de 785 metros cúbicos.
   *  
   *  nota: volumen de un cilindro: pi * r2 * h
   *
   */
  const radio = entrada("radio");
  const altura = entrada("altura");
  const pi = 3.14;
  const volumen = pi * Math.pow(radio,2) * altura;
  salida("volumen", volumen);
}
// *************************************************************** //
