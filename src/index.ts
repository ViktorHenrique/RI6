import readline from "readline";
import { Soma } from "./soma";
import { Subtracao } from "./subtracao";
import { Multiplicacao } from "./multiplicacao";
import { Divisao } from "./divisao";
import { Potenciacao } from "./potenciacao";
import { Radiciacao } from "./radiciacao";
import { Bhaskara } from "./bhaskara";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("=== CALCULADORA POO ===");
console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Multiplicação");
console.log("4 - Divisão");
console.log("5 - Potenciação");
console.log("6 - Radiciação");
console.log("7 - Bhaskara");

rl.question("Escolha a operação: ", (opcao) => {
  if (opcao === "7") {
    rl.question("Digite o valor de a: ", (a) => {
      rl.question("Digite o valor de b: ", (b) => {
        rl.question("Digite o valor de c: ", (c) => {
          const bhaskara = new Bhaskara();
          console.log(bhaskara.executar(Number(a), Number(b), Number(c)));
          rl.close();
        });
      });
    });
  } else {
    rl.question("Digite o primeiro número: ", (n1) => {
      rl.question("Digite o segundo número: ", (n2) => {
        const a = Number(n1);
        const b = Number(n2);
        let resultado: number | string = "";

        switch (opcao) {
          case "1":
            resultado = new Soma().executar(a, b);
            break;
          case "2":
            resultado = new Subtracao().executar(a, b);
            break;
          case "3":
            resultado = new Multiplicacao().executar(a, b);
            break;
          case "4":
            resultado = new Divisao().executar(a, b);
            break;
          case "5":
            resultado = new Potenciacao().executar(a, b);
            break;
          case "6":
            resultado = new Radiciacao().executar(a, b);
            break;
          default:
            resultado = "Opção inválida!";
        }

        console.log(`Resultado: ${resultado}`);
        rl.close();
      });
    });
  }
});