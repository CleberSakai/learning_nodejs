import { deleteFile, showFile, updateFile, createFile } from "./functions.mjs";

async function start() {
  await createFile("Conteúdo inicial do arquivo\nCriado com módulo do Node.js");
  await showFile();
  console.log("------------------------------");
  await updateFile("Contéudo modificado....");
  await showFile();
  console.log("------------------------------");
  await deleteFile();
}

start();
