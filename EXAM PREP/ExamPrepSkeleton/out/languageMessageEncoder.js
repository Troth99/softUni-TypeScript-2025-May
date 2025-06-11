"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageMessageEncoder = void 0;
const partialMessageEncoder_1 = require("./contracts/implemented/partialMessageEncoder");
class LanguageMessageEncoder extends partialMessageEncoder_1.PartialMessageEncoder {
    numberOfEncodedChars = 0;
    numberOfDecodedChars = 0;
    constructor(language, cipher) {
        super(language, cipher);
    }
    stripForbiddenSymbols(message) {
        let forbiddenSymbols = partialMessageEncoder_1.PartialMessageEncoder.forbiddenSymbols;
        forbiddenSymbols.forEach((x) => (message = message.replaceAll(x, "")));
        return message;
    }
    encodeMessage(secretMessage) {
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
    decodeMessage(secretMessage) {
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
    totalProcessedCharacters(type) {
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
exports.LanguageMessageEncoder = LanguageMessageEncoder;
//# sourceMappingURL=languageMessageEncoder.js.map