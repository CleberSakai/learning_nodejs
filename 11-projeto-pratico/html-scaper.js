const fs = require("node:fs");
const path = require("node:path");
const readline = require("node:readline");

run();

function scapeHtmlSpecialCharacters(text) {
  return text.replace(/[<>&]/g, (match) => {
    switch (match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
    }
  });
}

function escapeHtmlFile(inputFilePath, outputFilePath) {
  try {
    const fileContent = fs.readFileSync(inputFilePath, "utf-8");
    const scapedContent = scapeHtmlSpecialCharacters(fileContent);
    fs.writeFileSync(outputFilePath, scapedContent, "utf-8");
    console.log(`Arquivo Escapado com sucesso: ${outputFilePath}`);
  } catch (error) {
    console.log("Erro:", error.message);
    process.exit(1);
  }
}

function askFilePath(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
      rl.close();
    });
  });
}

async function userInteraction() {
  let inputPatch = process.argv[2];
  if (!inputPatch) {
    inputPatch = await askFilePath("Informe o caminho do arquivo de entrada: ");
  }
  inputPatch = path.resolve(inputPatch);

  const defaultName = `scaped_${path.basename(inputPatch)}.txt`;
  const answer = await askFilePath(
    `Informe o caminho do arquivo de saída (padrão: ${defaultName}): `
  );
  let outputPath = answer.length > 0 ? answer : defaultName;
  outputPath = path.resolve(outputPath);

  escapeHtmlFile(inputPatch, outputPath);
}

function run() {
  if (process.argv.length >= 4) {
    escapeHtmlFile(
      path.resolve(process.argv[2]),
      path.resolve(process.argv[3])
    );
  } else {
    console.log("---------------------");
    console.log("HTML Tag Escaper v1.0");
    console.log("---------------------\n");
    console.log(
      "Argumentos não informados! Por favor, informe os caminhos dos arquivos para realizar o escape."
    );
    userInteraction();
  }
}
