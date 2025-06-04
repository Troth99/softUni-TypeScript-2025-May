type InputParam<T> = T extends number ? number : string;

function conditionalNumber<T>(value: InputParam<T>): void {

  switch (typeof(value)) {
    case 'number' :
      console.log(value.toFixed(2)); break;
    default:
      console.log(value);
  }
}

conditionalNumber<number>(20.3555);
conditionalNumber<string>("wow");
conditionalNumber<boolean>("a string");
20.36;
