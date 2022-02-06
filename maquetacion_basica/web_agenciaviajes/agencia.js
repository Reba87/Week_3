let captura = function () {
  let name = document.getElementById("name").value;
  let origen = document.getElementById("origen").value;
  let destino = document.getElementById("destino").value;
  let ida = document.getElementById("ida").value;
  let vuelta = document.getElementById("vuelta").value;
  let viajeros = document.getElementById("viajeros").value;

  let data = [
    {
        "Nombre": name,
        "Origen": origen,
        "Destino": destino,
        "Ida": ida,
        "Vuelta":vuelta,
        "Viajeros":viajeros
    }
  ]

  for(datos of data){
    return datos.push(datos)
  }
    
};

console.log(datos);

function filtro() {
  for (captura of filtro) {
    if (
      captura.includes(
        "MALLORCA" ||
          "mallorca" ||
          "CANARIAS" ||
          "canarias" ||
          "GALICIA" ||
          "galicia"
      )
    ) {
    }
  }
  console.log(filter);
}
