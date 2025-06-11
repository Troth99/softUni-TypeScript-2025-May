import { Cipher } from "./contracts/cipher";
import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { Language } from "./contracts/language";
import { MessageEncoder } from "./contracts/messageEncoder";

type typeOfCharacters = "Encoded" | "Decoded" | "Both";

export class LanguageMessageEncoder<L extends Language, C extends Cipher<L>>
  extends PartialMessageEncoder
  implements MessageEncoder
{
  protected numberOfEncodedChars: number = 0;
  protected numberOfDecodedChars: number = 0;

  constructor(language: L, cipher: C) {
    super(language, cipher);
  }

  protected override stripForbiddenSymbols(message: string) {
    let forbiddenSymbols = PartialMessageEncoder.forbiddenSymbols;
    forbiddenSymbols.forEach((x) => (message = message.replaceAll(x, "")));
    return message;
  }

  public encodeMessage(secretMessage: unknown) {

    if (typeof secretMessage !== "string" || secretMessage.length === 0) {
      return "No message.";
    }
    const strippedMsg = this.stripForbiddenSymbols(secretMessage);

    if (!this.language.isCompatibleToCharset(strippedMsg)) {
      return "Message not compatible.";
    }

    const encodedStrippedMessage = this.cipher.encipher(strippedMsg);

    this.numberOfEncodedChars += encodedStrippedMessage.length;

    return encodedStrippedMessage;
  }

  public decodeMessage(secretMessage: unknown): string {
    if (typeof secretMessage !== "string" || secretMessage.length === 0) {
      return "No message.";
    }

    if (!this.language.isCompatibleToCharset(secretMessage)) {
      return "Message not compatible.";
    }

    const decodedMessage = this.cipher.decipher(secretMessage);
    this.numberOfDecodedChars += decodedMessage.length;

    return decodedMessage;
  }

  public totalProcessedCharacters(type: typeOfCharacters): string {
    let total = 0;
    switch (type) {
      case "Encoded":
        total += this.numberOfEncodedChars;
        break;
      case "Decoded":
        total += this.numberOfDecodedChars;
        break;
      case "Both":
        total += this.numberOfDecodedChars + this.numberOfEncodedChars;
        break;
      default:
        0;
    }
    return `Total processed characters count: ${total}`;
  }
}
