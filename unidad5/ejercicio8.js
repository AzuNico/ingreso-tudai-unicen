//*** Esto es lo que podes modificar:

//*** Definir las entradas
function especificarEntradas() {
  return [
    {
      nombre: "velocidad",
      tipo: "number",
      etiqueta: "Ingrese Velocidad (km/h):",
      ayuda: "",
    },
    {
      nombre: "distancia",
      tipo: "number",
      etiqueta: "Ingrese distancia (km):",
      ayuda: "",
    },
  ];
}

//*** Definir las salidas
function especificarSalidas() {
  return [{ nombre: "duracion", etiqueta: "Duración del viaje (hrs):" }];
}

//*** Definir el proceso
function principal() {
  /*
   * ENUNCIADO:
   *
   * Realizar un programa que permita determinar la cantidad de horas de un viaje, dada una distancia y una velocidad promedio.
   *   Ejemplo sea Velocidad = 100 km/h , y Distancia = 200 Km, entonces el tiempo serán 2 Horas.
   *
   */
  const velocidad = entrada("velocidad");
  const distancia = entrada("distancia");

  const duracion = distancia / velocidad;
  salida("duracion", duracion);
}
// *************************************************************** //
