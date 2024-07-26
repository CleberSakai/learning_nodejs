const fs = require("node:fs");

// const streamLeitura = fs.createReadStream("arquivo.txt");
const streamLeitura = fs.createReadStream("bit.png");

const buffer = [];

streamLeitura.on("data", (chunk) => {
  buffer.push(chunk);
  console.log("Um chunk foi processado.");
});

streamLeitura.on("end", () => {
  console.log("Buffer:\n", buffer);
  //   const dadosComplentos = Buffer.concat(buffer).toString();
  //   console.log("Dados Lidos:\n", dadosComplentos);
});
