"use strict";
function sumarizePerson(id, firstName, lastName, age, middleName, hobbies, workInfo) {
    const personFullName = middleName
        ? `${firstName} ${middleName} ${lastName}`
        : `${firstName} ${lastName}`;
    const personHobbies = hobbies && hobbies.length > 0 ? hobbies.join(", ") : "-";
    const workInfoFormated = workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : "-";
    const resultArr = [
        id,
        personFullName,
        age,
        personHobbies,
        workInfoFormated,
    ];
    console.log(resultArr);
    return resultArr;
}
sumarizePerson(12, "Eliot", "Des", 20, "Braylen", ["tennis", "football", "hiking"], ["Sales Consultant", 2500]);
sumarizePerson(20, "Mary", "Trent", 25, undefined, ["fitness", "rowing"]);
sumarizePerson(21, "Joseph", "Angler", 28);
//# sourceMappingURL=summarizePerson.js.map