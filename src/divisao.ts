import { Operacao } from "./operacao";

export class Divisao implements Operacao {
  executar(a: number, b: number): number | string {
    if (b === 0) return "Erro: divisão por zero!";
    return a / b;
  }
}