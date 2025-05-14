enum Days {
    Monday = 1,
    Tuesday ,
    Wednesday ,
    Thursday,
    Friday,
    Saturday,
    Sunday 
}


function showCurrentDay(day: number) {
    const dayName = Days[day]
    if (dayName){
        console.log(dayName)
    }else {
        console.log('error')
    }
}

showCurrentDay(1)
