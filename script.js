function splitLines(text) {
  return text.split("\\n").filter(line => line !== "");
}

function pairSums() {
  const input = document.getElementById("input").value.split(",");
  const tall = toNumbers(input)// Maren sin kode fra 1b
  const output = document.getElementById("output");
  output.innerHTML = "";

  for (let i = 0; i < tall.length - 1; i++) {
    const a = tall[i];
    const b = tall[i + 1];
    output.innerHTML += "<li>" + a + " + " + b + " = " + (a + b) + "</li>";
  }
}

//Oppgave 1.b
function toNumbers() {
  const input = document.getElementById("inputNumbers").value;
  const stringArray = input.split(",");
  const numbers = stringArray.map(Number);
  document.getElementById("resultat").textContent = "Oppfanget og brukbare nummer: " + numbers;
}

//Oppgave 2
function leggTilGjoremal() {
  const input = document.getElementById("gjoremalInput");
  const tekst = input.value.trim();
  if (tekst === "") return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.onchange = function() {
    span.classList.toggle("ferdig");
  };

  const span = document.createElement("span");
  span.textContent = " " + tekst;

  const fjernKnapp = document.createElement("button")
  fjernKnapp.textContent = "Fjern";
  fjernKnapp.onclick = function() {
    li.remove();
  };

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(fjernKnapp);

  document.getElementById("GMliste").appendChild(li);

  input.value = "";
}