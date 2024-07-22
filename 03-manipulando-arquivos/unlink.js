const fs = require("node:fs");

fs.unlink("./arquivo.csv", (error) => {
  if (error) {
    console.log("Erro ao excluir o arquivo: ", error.message);
    return;
  }

  console.log("Arquivo exluído com sucesso");
});
