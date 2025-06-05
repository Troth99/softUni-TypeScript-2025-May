"use strict";
var TravelVacation;
(function (TravelVacation) {
    TravelVacation["Abroad"] = "Abroad";
    TravelVacation["InCountry"] = "InCountry";
})(TravelVacation || (TravelVacation = {}));
var MountainVacation;
(function (MountainVacation) {
    MountainVacation["Ski"] = "Ski";
    MountainVacation["Hiking"] = "Hiking";
})(MountainVacation || (MountainVacation = {}));
var BeachVacation;
(function (BeachVacation) {
    BeachVacation["Pool"] = "Pool";
    BeachVacation["Sea"] = "Sea";
    BeachVacation["ScubaDiving"] = "ScubaDiving";
})(BeachVacation || (BeachVacation = {}));
class PlannedHoliday {
    startDate = new Date;
    endDate = new Date;
    constructor(startDate, endDate) {
        this.start = startDate;
        this.end = endDate;
    }
    set start(val) {
        if (val > this.endDate) {
            throw new Error('Start date is after the end date!');
        }
        else {
            this.startDate = val;
        }
    }
    set end(val) {
        if (val < this.startDate) {
            throw new Error('Start date is after the end date!');
        }
        else {
            this.endDate = val;
        }
    }
    getInfo() {
        return `Holiday: ${this.startDate.getDate()}/${this.startDate.getMonth()}/${this.startDate.getFullYear()} - ${this.endDate.getDate()}/${this.endDate.getMonth()}/${this.endDate.getFullYear()}`;
    }
}
class HolidayManager {
    holiDayPlan = new Map();
    reserveVacation(holiday, vacationType) {
        this.holiDayPlan.set(holiday, vacationType);
    }
    listReservations() {
        let result = '';
        this.holiDayPlan.forEach((vacantion) => {
            result += `${holiday.getInfo()} => ${vacantion}\n`;
        });
        return result;
    }
}
let holiday = new PlannedHoliday(new Date(2022, 10, 11), new Date(2022, 10, 18));
let holiday2 = new PlannedHoliday(new Date(2024, 5, 18), new Date(2024, 5, 22));
let holidayManager = new HolidayManager();
holidayManager.reserveVacation(holiday, BeachVacation.ScubaDiving);
holidayManager.reserveVacation(holiday2, BeachVacation.Sea);
console.log(holidayManager.listReservations());
// let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
// let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2024, 3, 17));
// let holidayManager = new HolidayManager<Holiday, MountainVacation>();
// holidayManager.reserveVacation(holiday, BeachVacation.ScubaDiving);
// holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);
// console.log(holidayManager.listReservations())
// let holiday3 = new PlannedHoliday(new Date(2021, 3, 14), new Date(2020, 3, 17));
// let holiday4 = new PlannedHoliday(new Date(2024, 2, 1), new Date(2024, 1, 4));
//# sourceMappingURL=07%20HolidayManager.js.map