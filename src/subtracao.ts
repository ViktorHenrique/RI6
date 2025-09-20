import { Operacao } from "./operacao";

export class Subtracao implements Operacao {
  executar(a: number, b: number): number {
    return a - b;
  }
}