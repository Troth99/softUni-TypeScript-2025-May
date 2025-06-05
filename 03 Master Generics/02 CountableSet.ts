interface CountableSet<T> {
  add(item: T): void;
  remove(item: T): void;
  contains(item: T): boolean;
  getNumberOfCopies(item: T): number;
}



class CountedSet<T> implements CountableSet<T>{
public items: Map<T, number> = new Map()
  
    add(item: T) {
        const count = this.items.get(item) || 0;
        this.items.set(item, count + 1)
    
    }

    remove(item: T) {
        const count = this.items.get(item);
        if(!count){
            return
        }
        if(count === 1){
            this.items.delete(item)
        }else {
            this.items.set(item, count - 1)
        }
    }

    contains(item: T){
        const count = this.items.get(item)
        if(count !== undefined&& count > 0) {
            return true
        }
        return false
    }

    getNumberOfCopies(item: T){
        const copies = this.items.get(item);
        if (copies !== undefined){
            return copies
        }
        return 0
    }

}


let codesCounterSet = new CountedSet<200 | 301 | 404 | 500>();
codesCounterSet.add(404);
codesCounterSet.add(200);
console.log(codesCounterSet.contains(404));
console.log(codesCounterSet.getNumberOfCopies(200));

// codesCounterSet.add(205);   //TS Error
// codesCounterSet.getNumberOfCopies(350);    //TS Error
