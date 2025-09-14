// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {

    const input = document.getElementById("amigo");
    const nombre = input.value.trim();


    if (nombre === " ") {
        alert("El nombre no puede ser vacío.");
        return;
    }

    amigos.push(nombre);

    mostrarAmigos();

    input.value = "";
}

function mostrarAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiamos para no duplicar

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i]; // asignar texto

    lista.appendChild(li);
  }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres disponibles");
        return
    }

    const indice = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indice];

    amigos.splice(indice, 1);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}