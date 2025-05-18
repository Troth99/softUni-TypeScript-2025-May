"use strict";
var reversedDays;
(function (reversedDays) {
    reversedDays[reversedDays["Monday"] = 1] = "Monday";
    reversedDays[reversedDays["Tuesday"] = 2] = "Tuesday";
    reversedDays[reversedDays["Wednesday"] = 3] = "Wednesday";
    reversedDays[reversedDays["Thursday"] = 4] = "Thursday";
    reversedDays[reversedDays["Friday"] = 5] = "Friday";
    reversedDays[reversedDays["Saturday"] = 6] = "Saturday";
    reversedDays[reversedDays["Sunday"] = 7] = "Sunday";
})(reversedDays || (reversedDays = {}));
function reversedDayOfTheWeek(day) {
    let dayNum = reversedDays[day];
    if (dayNum) {
        console.log(dayNum);
    }
    else {
        console.log('error');
    }
    return dayNum;
}
reversedDayOfTheWeek("Monday");
reversedDayOfTheWeek("Friday");
//# sourceMappingURL=reversedDayOfTheWeek.js.map