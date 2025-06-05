enum TravelVacation {
    Abroad = 'Abroad',
    InCountry = 'InCountry'
}
enum MountainVacation {
    Ski = 'Ski',
    Hiking = 'Hiking'
}


enum BeachVacation {
    Pool = 'Pool',
    Sea = 'Sea',
    ScubaDiving = 'ScubaDiving'
}

interface Holiday {
    set start(val: Date);
    set end(val: Date);
    getInfo(): string;
}

interface VacationManager<T, V> {
    reserveVacation(holiday: T, vacationType: V): void;
    listReservations(): string;
}

class PlannedHoliday implements Holiday{
    private startDate = new Date;
    private endDate = new Date;
  

    constructor(startDate: Date, endDate: Date){
        this.start = startDate;
        this.end = endDate

    }


   set start(val: Date) {
  
    if(val > this.endDate){
       throw new Error('Start date is after the end date!')
    }else {
        this.startDate = val
    }
   }
   set end(val: Date) {
       if(val < this.startDate){
              throw new Error('Start date is after the end date!')
       }else {
        this.endDate = val
       }
   }

  getInfo(): string {
       return `Holiday: ${this.startDate.getDate()}/${this.startDate.getMonth()}/${this.startDate.getFullYear()} - ${this.endDate.getDate()}/${this.endDate.getMonth()}/${this.endDate.getFullYear()}`
    }
}


class HolidayManager<T extends Holiday, V extends TravelVacation | MountainVacation | BeachVacation> implements VacationManager<T, V> {
    public holiDayPlan: Map<T, V> = new Map()


    reserveVacation(holiday: T, vacationType: V): void {
    this.holiDayPlan.set(holiday, vacationType)    
    }

    listReservations(): string {
     let result = ''
        this.holiDayPlan.forEach((vacantion) => {
        result+= `${holiday.getInfo()} => ${vacantion}\n`
        })
      return result 
    }
}



let holiday = new PlannedHoliday(new Date(2022, 10, 11), new Date(2022, 10, 18));
let holiday2 = new PlannedHoliday(new Date(2024, 5, 18), new Date(2024, 5, 22));
let holidayManager = new HolidayManager<Holiday, BeachVacation>();
holidayManager.reserveVacation(holiday, BeachVacation.ScubaDiving);
holidayManager.reserveVacation(holiday2, BeachVacation.Sea);
console.log(holidayManager.listReservations())

// let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
// let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2024, 3, 17));
// let holidayManager = new HolidayManager<Holiday, MountainVacation>();
// holidayManager.reserveVacation(holiday, BeachVacation.ScubaDiving);
// holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);
// console.log(holidayManager.listReservations())


// let holiday3 = new PlannedHoliday(new Date(2021, 3, 14), new Date(2020, 3, 17));
// let holiday4 = new PlannedHoliday(new Date(2024, 2, 1), new Date(2024, 1, 4));
