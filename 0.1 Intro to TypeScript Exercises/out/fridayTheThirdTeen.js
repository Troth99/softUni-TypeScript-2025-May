"use strict";
var Months;
(function (Months) {
    Months[Months["January"] = 0] = "January";
    Months[Months["February"] = 1] = "February";
    Months[Months["March"] = 2] = "March";
    Months[Months["April"] = 3] = "April";
    Months[Months["May"] = 4] = "May";
    Months[Months["June"] = 5] = "June";
    Months[Months["July"] = 6] = "July";
    Months[Months["August"] = 7] = "August";
    Months[Months["September"] = 8] = "September";
    Months[Months["October"] = 9] = "October";
    Months[Months["November"] = 10] = "November";
    Months[Months["Decemeber"] = 11] = "Decemeber";
})(Months || (Months = {}));
function fridayTheThirdTeen(array) {
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
    '13-09-2023',
    new Date(2025, 6, 13),
]);
//# sourceMappingURL=fridayTheThirdTeen.js.map