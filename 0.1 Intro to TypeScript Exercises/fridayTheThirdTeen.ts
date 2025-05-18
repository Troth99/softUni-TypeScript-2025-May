enum Months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  Decemeber,
}

function fridayTheThirdTeen(array: unknown[]): void {
  for (const element of array) {
    if (element instanceof Date) {
      let monthDay = element.getDate();
      let weeklyDay = element.getDay();
      let monthNum = element.getMonth();

      if (monthDay === 13 && weeklyDay === 5) {
        console.log(`${monthDay}-${Months[monthNum]}-${element.getFullYear()}`);
      }
    }
  }
}

fridayTheThirdTeen([
  {},
  new Date(2025, 4, 13),
  null,
  new Date(2025, 5, 13),
  "13-09-2023",
  new Date(2025, 6, 13),
]);
