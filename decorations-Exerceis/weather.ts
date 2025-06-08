function weatherValidation(...args: string[]) {
  let cachedData: string[] = [];
  let lastChecked: Date | null = null;
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalData = descriptor.value;

    descriptor.value = function (...args: string[]) {
      const currentMoment = new Date();

      if (
        !lastChecked ||
        currentMoment.getTime() - lastChecked.getTime() > 5000
      ) {
        const data = originalData.call(this);
        cachedData = data.slice();
        lastChecked = new Date();
        return data;
      } else {
        console.log("Returned from cache");
        return cachedData;
      }
    };

    return descriptor;
  };
}

class MockWeatherDataService {
  private weatherData: string[] = [
    "Sunny 8° to 20°",
    "Partially Cloudy 7° to 19°",
    "Sunny 5° to 18°",
  ];

  addWeatherData(data: string) {
    this.weatherData.push(data);
  }

  @weatherValidation()
  getWeatherData() {
    return this.weatherData;
  }
}

let service = new MockWeatherDataService();
console.log(service.getWeatherData());
console.log(service.getWeatherData());
service.addWeatherData("Partially Cloudy 5° to 11°");
console.log(service.getWeatherData());

//7 seconds later
setTimeout(() => console.log(service.getWeatherData()), 7000);
