export class LowercaseCharactersOnlyLanguage {
    _charset = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
    get charset() {
        return this._charset;
    }
    isCompatibleToCharset(sample) {
        let allChars = sample.split('');
        let isCompatible = allChars.every(x => x >= 'a' && x <= 'z');
        return isCompatible;
    }
}
//# sourceMappingURL=lowercaseCharactersOnlyLanguage.js.map