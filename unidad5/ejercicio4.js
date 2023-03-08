//*** Esto es lo que podes modificar:

//*** Definir las entradas
function especificarEntradas() {
  return [
    {
      nombre: "a",
      tipo: "number",
      etiqueta: "Ingrese a:",
      ayuda: "",
    },
    {
      nombre: "b",
      tipo: "number",
      etiqueta: "Ingrese b:",
      ayuda: "",
    },
    {
      nombre: "c",
      tipo: "number",
      etiqueta: "Ingrese c:",
      ayuda: "",
    },
  ];
}

//*** Definir las salidas
function especificarSalidas() {
  return [{ nombre: "solucion", etiqueta: "Solución:" }];
}

//*** Definir el proceso
function principal() {
  /*
   * ENUNCIADO:
   *
   * Realice un programa que implemente la formula resolvente o de Bhaskara
   * Debe poder obtener los dos valores posibles de x, para la raiz positiva y para la raiz negativa.
   *  https://piexa.exa.unicen.edu.ar/moodle/pluginfile.php/37030/mod_book/chapter/99/image.png
   *
   */
  const a = entrada("a");
  const b = entrada("b");
  const c = entrada("c");

  let solucion1;
  let solucion2;

  const menosB = b * -1;
  const cuadradoDeB = Math.pow(b, 2);
  const menosCuatroPorAPorC = -4 * a * c;
  const dosPorA = 2 * a;
  const contenidoRaiz = cuadradoDeB + menosCuatroPorAPorC;

  const esRaizNegativa = contenidoRaiz < 0;

  if (esRaizNegativa) {
    let raizImaginaria = Math.sqrt(contenidoRaiz * -1) / dosPorA;
    if (raizImaginaria === 1) {
      raizImaginaria = "";
    }
    solucion1 = menosB / dosPorA + " + " + raizImaginaria + " i";
    solucion2 = menosB / dosPorA + " - " + raizImaginaria + " i";
    consola("No tiene soluciones en R");
    salida("solucion", "{ " + solucion1 + " , " + solucion2 + " }");
  } else {
    solucion1 = (menosB + Math.sqrt(contenidoRaiz)) / dosPorA;
    solucion2 = (menosB - Math.sqrt(contenidoRaiz)) / dosPorA;

    salida("solucion", "{ " + solucion1 + " , " + solucion2 + " }");
  }
}
// *************************************************************** //
