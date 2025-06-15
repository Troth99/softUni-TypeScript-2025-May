type RoomNumber = "A01" | "A02" | "A03" | "B01" | "B02" | "B03";

export type Booking<TMonth> = { roomNumber: RoomNumber, month: TMonth };