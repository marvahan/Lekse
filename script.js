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