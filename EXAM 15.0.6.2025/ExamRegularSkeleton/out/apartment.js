"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apartment = void 0;
class Apartment {
    price;
    roomNumber;
    numberOfGuests;
    constructor(price, roomNumber, numberOfguests) {
        this.price = price;
        this.roomNumber = roomNumber;
        this.numberOfGuests = numberOfguests;
    }
    get totalPrice() {
        return this.price * this.numberOfGuests;
    }
    get cancellationPrice() {
        return this.totalPrice * 0.8;
    }
}
exports.Apartment = Apartment;
//# sourceMappingURL=apartment.js.map