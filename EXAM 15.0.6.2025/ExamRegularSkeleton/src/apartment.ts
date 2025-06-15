import { Room } from "./contracts/room";


export class Apartment implements Room{
    price: number;
    readonly roomNumber: "A01" | "A02" | "A03" | "B01" | "B02" | "B03";
    numberOfGuests: number;

    constructor(price: number, roomNumber: "A01" | "A02" | "A03" | "B01" | "B02" | "B03", numberOfguests:number){
        this.price = price
        this.roomNumber = roomNumber
        this.numberOfGuests = numberOfguests
    }

   get totalPrice(): number {
    return this.price * this.numberOfGuests
   }
   get cancellationPrice(): number {
    return this.totalPrice * 0.8
   }
}