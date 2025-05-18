enum reversedDays {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function reversedDayOfTheWeek(day: string): number {
  let dayNum: number = reversedDays[day as keyof typeof reversedDays];
  if(dayNum) {
    console.log(dayNum)
  }else {
    console.log('error')
  }
  return dayNum
}

reversedDayOfTheWeek("Monday");
reversedDayOfTheWeek("Friday");
