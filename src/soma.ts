import { Operacao } from "./operacao";

export class Soma implements Operacao {
  executar(a: number, b: number): number {
    return a + b;
  }
}