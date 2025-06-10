"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DNACodeLanguage = void 0;
class DNACodeLanguage {
    _charset = new Set(["A", "C", "G", "T"]);
    get charset() {
        return this._charset;
    }
    isCompatibleToCharset(message) {
        for (const char of message) {
            if (!this._charset.has(char)) {
                return false;
            }
        }
        return true;
    }
}
exports.DNACodeLanguage = DNACodeLanguage;
//# sourceMappingURL=DNACodeLanguage.js.map