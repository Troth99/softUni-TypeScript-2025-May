"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageMessageEncoder = void 0;
const partialMessageEncoder_1 = require("./contracts/implemented/partialMessageEncoder");
class LanguageMessageEncoder extends partialMessageEncoder_1.PartialMessageEncoder {
    _encodedCharCount = 0;
    _decodedCharCount = 0;
    _language;
    _cipher;
    constructor(language, cipher) {
        super(language, cipher);
        // Валидираме съвместимостта език <-> шифър
        if (cipher.language !== language) {
            throw new Error("Cipher language does not match the provided language.");
        }
        this._language = language;
        this._cipher = cipher;
    }
    encodeMessage(secretMessage) {
        if (typeof secretMessage !== 'string' || secretMessage.length === 0) {
            return "No message.";
        }
        const cleanedMessage = this.stripForbiddenSymbols(secretMessage);
        if (!this._language.isCompatibleToCharset(cleanedMessage)) {
            return "Message not compatible.";
        }
        const encoded = this._cipher.encipher(cleanedMessage);
        this._encodedCharCount += cleanedMessage.length;
        return encoded;
    }
    decodeMessage(secretMessage) {
        if (typeof secretMessage !== 'string' || secretMessage.length === 0) {
            return "No message.";
        }
        if (!this._language.isCompatibleToCharset(secretMessage)) {
            return "Message not compatible.";
        }
        const decoded = this._cipher.decipher(secretMessage);
        this._decodedCharCount += decoded.length;
        return decoded;
    }
    totalProcessedCharacters(type) {
        let total = 0;
        if (type === 'Encoded')
            total = this._encodedCharCount;
        else if (type === 'Decoded')
            total = this._decodedCharCount;
        else if (type === 'Both')
            total = this._encodedCharCount + this._decodedCharCount;
        return `Total processed characters count: ${total}`;
    }
    stripForbiddenSymbols(message) {
        return partialMessageEncoder_1.PartialMessageEncoder.forbiddenSymbols.reduce((result, symbol) => result.split(symbol).join(''), message);
    }
}
exports.LanguageMessageEncoder = LanguageMessageEncoder;
//# sourceMappingURL=languageMessageEncoder.js.map