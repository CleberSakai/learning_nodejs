// process.stdout.write("Olá Mundo"); // basicamente console.log()

// process.stdin.on("data", (data) => {
//   process.stdout.write(`Você Digitou: ${data}`);
// });

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.on("line", (input) => {
//   rl.write(`Você Digitou: ${input}`);
// });

// rl.question("Qual o seu nome? ", (answer) => {
//   rl.write(`Olá ${answer}\n`);
//   rl.close();
// });

// rl.on("close", () => {
//   rl.write("Saindo...");
//   process.exit(0);
// });

rl.on("SIGINT", () => {
  rl.question("Deseja realmente sair? (s/n)", (answer) => {
    if (answer.trim().toLowerCase() === "s") {
      process.exit(0);
    } else {
      rl.write("Você escolheu continuar.");
    }
  });
});
