
type test = { 
   name: string,
   age: number,
   test:() => string;
}

type AllFunctions<T> = {
 [K in keyof T as T[K] extends (...args: any[]) => any ? K : never]: T[K]
}
type extracted = AllFunctions<test>


