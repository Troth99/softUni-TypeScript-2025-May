import { Language } from "./contracts/language";
import { DNABse } from "./types";

export class DNACodeLanguage implements Language {

    private readonly _charset: Set<DNABse> = new Set(['A', 'C', "G", "T"])

    get charset(): Set<DNABse>{
        return this._charset
    }

    isCompatibleToCharset(message: string): boolean {
        const spllitedMsg = message.split('')
        const filteredMsg = spllitedMsg.filter(char => this.charset.has(char as DNABse))
       return filteredMsg.length === spllitedMsg.length
    }
  
    
}