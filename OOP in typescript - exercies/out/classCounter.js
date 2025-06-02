"use strict";
class Counter {
    static count = 0;
    static increment() {
        this.count += 1;
        return this.count;
    }
    static getCount() {
        return this.count;
    }
}
Counter.increment();
Counter.increment();
console.log(Counter.getCount());
//# sourceMappingURL=classCounter.js.map