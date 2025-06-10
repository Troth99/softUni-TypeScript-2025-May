export function decorator1<T extends { new (...args: any[]): any}>(constructor: T){
return class extends constructor {
        _offSet = 3
}
}
export function decorator2(){}
export function decorator3(){}

export function decorator4<T extends  abstract  new (...args: any[]) => any>(constructor: T): void{

    if(Array.isArray((constructor as any).forbiddenSymbols)){
        const arr = (constructor as any).forbiddenSymbols;
        if(!arr.includes('"')) arr.push('"')
        if(!arr.includes("'")) arr.push("'")    
    }

}
