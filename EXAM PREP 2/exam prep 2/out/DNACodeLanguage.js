"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DNACodeLanguage = void 0;
class DNACodeLanguage {
    _charset = new Set(['A', 'C', "G", "T"]);
    get charset() {
        return this._charset;
    }
    isCompatibleToCharset(message) {
        const spllitedMsg = message.split('');
        const filteredMsg = spllitedMsg.filter(char => this.charset.has(char));
        return filteredMsg.length === spllitedMsg.length;
    }
}
exports.DNACodeLanguage = DNACodeLanguage;
//# sourceMappingURL=DNACodeLanguage.js.map