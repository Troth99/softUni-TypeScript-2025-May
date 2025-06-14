import { ProcessedCharactersTypes } from "./types";
import { Cipher } from "./contracts/cipher";
import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { Language } from "./contracts/language";
import { MessageEncoder } from "./contracts/messageEncoder";

export class LanguageMessageEncoder<
    Tlang extends Language,
    Vcipher extends Cipher<Tlang>
  >
  extends PartialMessageEncoder
  implements MessageEncoder
{
  private totalEncodedCharacters: number = 0;
  private totalDecodedCharacters: number = 0;

  constructor(language: Tlang, cipher: Vcipher) {
    super(language, cipher);
  }

  protected override stripForbiddenSymbols(message: string): string {
       let forbiddenSymbols = PartialMessageEncoder.forbiddenSymbols;
          forbiddenSymbols.forEach(x => message = message.replaceAll(x, ''));
          return message;
  }

  public encodeMessage(secretMessage: unknown) {
    if (typeof secretMessage !== "string" || secretMessage.length === 0) {
      return "No message.";
    }

    const strippedMessage = this.stripForbiddenSymbols(secretMessage);
    
    const isCompatible = this.language.isCompatibleToCharset(strippedMessage);

    if (!isCompatible) {
      return "Message not compatible";
    }

    const encodedMessage = this.cipher.encipher(strippedMessage);
    this.totalEncodedCharacters += encodedMessage.length;
    return encodedMessage;
  }

  public decodeMessage(secretMessage: unknown): string {

    if (typeof secretMessage !== "string" || secretMessage.length === 0) {
      return "No message.";
    }

    const strippedMessage = this.stripForbiddenSymbols(secretMessage);

    const isCompatible = this.language.isCompatibleToCharset(strippedMessage);

    if (!isCompatible) {
      return "Message not compatible";
    }

    const decodedMessage = this.cipher.decipher(strippedMessage);
    this.totalDecodedCharacters += decodedMessage.length;
    return decodedMessage;
  }

  public totalProcessedCharacters(type: ProcessedCharactersTypes): string {
    let totalChars = 0;

    switch (type) {
      case "Encoded":
        totalChars += this.totalEncodedCharacters;
        break;
      case "Decoded":
        totalChars += this.totalDecodedCharacters;
        break;
      case "Both":
        totalChars += this.totalEncodedCharacters + this.totalDecodedCharacters;
        break;
     
    }
    return `Total processed characters count: ${totalChars}`;
  }
}
