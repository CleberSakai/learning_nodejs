const path = require("node:path");

const dir = "src";
const file = "app.js";

const fullPath = path.join(dir, file); // join() combina segmentos de caminho em um único.
console.log(fullPath);

const relativePath = "../arquivos/relatorios.pdf";

const absolutePath = path.resolve(relativePath); // resolve() resolve um caminho absoluto a partir de segmentos de caminhos de dados
console.log(absolutePath);

const fileName = path.basename(relativePath); // basename() retorna o nome do arquivo ou diretório de um caminho
console.log(fileName);

const ext = path.extname(absolutePath); // extname() obter extensão do arquivo
console.log(ext);
