import fs from "node:fs";

export function createFile(text) {
  return new Promise((resolve, reject) => {
    fs.writeFile("meuarquivo.txt", text, (error) => {
      if (error) {
        reject("Erro ao escrever o arquivo", error.message);
      } else {
        resolve();
      }
    });
  });
}

export function showFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("meuarquivo.txt", "utf-8", (error, data) => {
      if (error) {
        reject("Erro ao ler arquivo", error.message);
      } else {
        console.log(data);
        resolve();
      }
    });
  });
}

export function updateFile(newText) {
  return new Promise((resolve, reject) => {
    fs.writeFile("meuarquivo.txt", newText, (error) => {
      if (error) {
        reject("Erro ao modificar o arquivo", error.message);
      } else {
        resolve();
      }
    });
  });
}

export function deleteFile() {
  return new Promise((resolve, reject) => {
    fs.unlink("meuarquivo.txt", (error) => {
      if (error) {
        reject("Erro ao exluir o arquivo", error.message);
      } else {
        console.log("Arquivo Exluido com Sucesso");
        resolve();
      }
    });
  });
}
