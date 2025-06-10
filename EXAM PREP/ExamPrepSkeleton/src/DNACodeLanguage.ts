import { Language } from "./contracts/language";

type DNABase = "A" | "C" | "G" | "T";
export class DNACodeLanguage implements Language {
  private readonly _charset: Set<DNABase> = new Set(["A", "C", "G", "T"]);

  get charset(): Set<DNABase> {
    return this._charset;
  }

  isCompatibleToCharset(message: string): boolean {
    for (const char of message) {
      if (!this._charset.has(char as DNABase)) {
        return false;
      }
    }
    return true;
  }
}
