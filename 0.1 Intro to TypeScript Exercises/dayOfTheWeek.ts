enum Days {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}


function showCurrentDay(day: number) {
    const dayName = Days[day]
    if (dayName){
        console.log(dayName)
    }else {
        console.log('error')
    }
}

showCurrentDay(5)
