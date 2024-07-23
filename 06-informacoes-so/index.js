const os = require("node:os");

const plataforma = os.platform();
console.log("Plataforma do Sistema Operacional -", plataforma);

const arquitetura = os.arch();
console.log("Arquitetura do Sistema Operaciona -", arquitetura);

const processadores = os.cpus();
console.log("Informações da CPU -", processadores[0]);

const memoria = os.totalmem();
console.log("Total de memória do PC -", memoria / 1024 / 1024 / 1024, "GB");
