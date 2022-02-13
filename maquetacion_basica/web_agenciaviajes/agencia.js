let personas = [];

function captura() {
  let name = document.getElementById("name").value;
  let origen = document.getElementById("origen").value;
  let destino = document.getElementById("destino").value;
  let ida = document.getElementById("ida").value;
  let vuelta = document.getElementById("vuelta").value;
  let viajeros = document.getElementById("viajeros").value;

  let informacion = {
    nombre: name,
    origen: origen,
    destino: destino,
    ida: ida,
    vuelta: vuelta,
    viajeros: viajeros
  };
  personas.push(informacion);
}
console.log(personas);

let personFiltro = []


function filtro() {
  for (let persona of personas) {
    personas.destino = persona.destino.toLowerCase();

    if (
      personas.destino == "mallorca" ||
      personas.destino == "canarias" ||
      personas.destino == "galicia"
    ) {
      personFiltro.push(persona);
    }
  }

  
  let mostrar = document.getElementById("tabla");
  mostrar.innerHTML = `<tr>
                        <th>NOMBRE</th>
                        <th>ORIGEN</th>
                        <th>DESTINO</th>
                        <th>FECHA IDA</th>
                        <th>FECHA REGRESO</th>
                        <th>VIAJEROS</th>
                      </tr>`
  for (let person of personFiltro) 
  {
    mostrar.innerHTML +=`<tr>
                      <td>${person.nombre}</td>
                      <td>${person.origen}</td>
                      <td>${person.destino}</td>
                      <td>${person.ida}</td>
                      <td>${person.vuelta}</td>
                      <td>${person.viajeros}</td>
                     </tr>`
  }
  console.log(personFiltro) 
}



