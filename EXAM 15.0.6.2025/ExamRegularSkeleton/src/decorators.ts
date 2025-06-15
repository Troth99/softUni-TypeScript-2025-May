export function decorator1<T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
        get totalPrice() {
          
            return super.totalPrice * 1.2;
        }
        get cancellationPrice() {
            
            return super.cancellationPrice * 1.2;
        }
    };
}
export function decorator2() {}
export function decorator3() {}
export function decorator4() {}

export function decorator5<T extends  abstract new(...args: any[]) => {}>(constructor: T) {

abstract class PartialMonthlyMotel extends constructor {
    public static readonly MotelName = 'Monthly Motel'
}
return PartialMonthlyMotel
}