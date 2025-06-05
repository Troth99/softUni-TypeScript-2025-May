"use strict";
class CountedSet {
    items = new Map();
    add(item) {
        const count = this.items.get(item) || 0;
        this.items.set(item, count + 1);
    }
    remove(item) {
        const count = this.items.get(item);
        if (!count) {
            return;
        }
        if (count === 1) {
            this.items.delete(item);
        }
        else {
            this.items.set(item, count - 1);
        }
    }
    contains(item) {
        const count = this.items.get(item);
        if (count !== undefined && count > 0) {
            return true;
        }
        return false;
    }
    getNumberOfCopies(item) {
        const copies = this.items.get(item);
        if (copies !== undefined) {
            return copies;
        }
        return 0;
    }
}
let codesCounterSet = new CountedSet();
codesCounterSet.add(404);
codesCounterSet.add(200);
console.log(codesCounterSet.contains(404));
console.log(codesCounterSet.getNumberOfCopies(200));
// codesCounterSet.add(205);   //TS Error
// codesCounterSet.getNumberOfCopies(350);    //TS Error
//# sourceMappingURL=02%20CountableSet.js.map