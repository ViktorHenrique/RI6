import { Operacao } from "./operacao";

export class Radiciacao implements Operacao {
  executar(a: number, b: number): number {
    return Math.pow(a, 1 / b);
  }
}