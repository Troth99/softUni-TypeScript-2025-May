"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyMotel = void 0;
const partialMonthlyMotel_1 = require("./contracts/partialMonthlyMotel");
class MonthlyMotel extends partialMonthlyMotel_1.PartialMonthlyMotel {
    allAddedRooms = [];
    bookings = [];
    allBookings = [];
    cancellations = [];
    constructor() {
        super();
    }
    getTotalBudget() {
        let total = 0;
        for (const booking of this.allBookings) {
            const room = this.allAddedRooms.find((r) => r.roomNumber === booking.roomNumber);
            if (room)
                total += room.totalPrice;
        }
        for (const cancellation of this.cancellations) {
            const room = this.allAddedRooms.find((r) => r.roomNumber === cancellation.roomNumber);
            if (room)
                total -= room.cancellationPrice;
        }
        return `Motel: ${partialMonthlyMotel_1.PartialMonthlyMotel.MotelName}\nTotal budget: $${total.toFixed(2)}`;
    }
    addRoom(room) {
        if (!isRoom(room)) {
            return "Value was not a Room.";
        }
        if (this.allAddedRooms.some((r) => r.roomNumber === room.roomNumber)) {
            return `Room '${room.roomNumber}' already exists.`;
        }
        this.allAddedRooms.push(room);
        return `Room '${room.roomNumber}' added.`;
    }
    bookRoom(roomNumber, bookedMonth) {
        const room = this.allAddedRooms.find((r) => r.roomNumber === roomNumber);
        if (!room) {
            return `Room '${roomNumber}' does not exist.`;
        }
        const isAlreadyBooked = this.bookings.find((b) => b.roomNumber === roomNumber && b.month === bookedMonth);
        if (isAlreadyBooked) {
            return `Room '${roomNumber}' is already booked for '${bookedMonth}'.`;
        }
        this.bookings.push({ roomNumber, month: bookedMonth });
        this.allBookings.push({ roomNumber, month: bookedMonth });
        return `Room '${roomNumber}' booked for '${bookedMonth}'.`;
    }
    cancelBooking(roomNumber, bookedMonth) {
        const room = this.allAddedRooms.find((r) => r.roomNumber === roomNumber);
        if (!room) {
            return `Room '${roomNumber}' does not exist.`;
        }
        const bookingIndex = this.bookings.findIndex((b) => b.roomNumber === roomNumber && b.month === bookedMonth);
        if (bookingIndex === -1) {
            return `Room '${roomNumber}' is not booked for '${bookedMonth}'.`;
        }
        this.bookings.splice(bookingIndex, 1);
        this.cancellations.push({ roomNumber, month: bookedMonth });
        return `Booking cancelled for Room '${roomNumber}' for '${bookedMonth}'.`;
    }
}
exports.MonthlyMotel = MonthlyMotel;
function isRoom(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        "roomNumber" in obj &&
        "totalPrice" in obj &&
        "cancellationPrice" in obj);
}
//# sourceMappingURL=monthlyMotel.js.map