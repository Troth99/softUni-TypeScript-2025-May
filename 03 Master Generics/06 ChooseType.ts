type Choose<T, K extends keyof T > = {
    [P in K] : T[P]
}




// type test = { 
//    name: string,
//    age: number,
//    test:() => string;
// }
// type extracted = Choose<test, 'name' | 'age'>
