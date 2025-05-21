"use strict";
function runDiagnostics(partName) {
    return partName;
}
function carDiagonostics(carBody, tires, engine) {
    console.log(`Material ${carBody.material} State ${carBody.state}`);
}
carDiagonostics({
    material: "aluminum",
    state: "scratched",
    partName: "Car Body",
    runDiagnostics() {
        return this.partName;
    },
}, {
    airPressure: 30,
    condition: "needs change",
    partName: "Tires",
    runDiagnostics() {
        return this.partName;
    },
}, {
    horsepower: 300,
    oilDensity: 780,
    partName: "Engine",
    runDiagnostics() {
        return this.partName;
    },
});
//# sourceMappingURL=carDiagnostics.js.map