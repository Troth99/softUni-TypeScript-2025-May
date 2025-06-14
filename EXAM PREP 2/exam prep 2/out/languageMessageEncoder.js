"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageMessageEncoder = void 0;
const partialMessageEncoder_1 = require("./contracts/implemented/partialMessageEncoder");
class LanguageMessageEncoder extends partialMessageEncoder_1.PartialMessageEncoder {
    totalEncodedCharacters = 0;
    totalDecodedCharacters = 0;
    constructor(language, cipher) {
        super(language, cipher);
    }
    stripForbiddenSymbols(message) {
        let forbiddenSymbols = partialMessageEncoder_1.PartialMessageEncoder.forbiddenSymbols;
        forbiddenSymbols.forEach(x => message = message.replaceAll(x, ''));
        return message;
    }
    encodeMessage(secretMessage) {
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
    decodeMessage(secretMessage) {
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
    totalProcessedCharacters(type) {
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
exports.LanguageMessageEncoder = LanguageMessageEncoder;
//# sourceMappingURL=languageMessageEncoder.js.map