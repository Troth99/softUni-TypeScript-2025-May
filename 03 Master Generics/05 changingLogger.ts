enum LoggingLevel {
  Info = "Info",
  Error = "Error",
  Warning = "Warning",
  Debug = "Debug",
}

enum LoggingFormat {
  Standard = "[%level][%date] %text",
  Minimal = "*%level* %text",
}

interface CachingLogger<T extends LoggingLevel, V extends LoggingFormat> {
  cachedLogs: Map<T, string[]>;
  log(logLevel: T, message: string): void;
  getFormat(): V;
}

class Logger<T extends LoggingLevel, V extends LoggingFormat>
  implements CachingLogger<T, V>
{
  cachedLogs: Map<T, string[]> = new Map();
  private format: V;

  constructor(format: V) {
    this.format = format;
  }

  getFormat(): V {
    return this.format;
  }

  log(logLevel: T, message: string): void {
    const date = new Date().toISOString();

    const printMessage = this.format
      .replace("%level", logLevel)
      .replace("%date", date)
      .replace("%text", message);
    console.log(printMessage);

    const currentMessages = this.cachedLogs.get(logLevel);

    if (currentMessages) {
      currentMessages.push(printMessage);
      this.cachedLogs.set(logLevel, currentMessages);
    } else {
      this.cachedLogs.set(logLevel, [printMessage]);
    }
  }
}

let logger = new Logger<LoggingLevel, LoggingFormat>(LoggingFormat.Standard);
logger.log(LoggingLevel.Info, "This is an info message.");
logger.log(LoggingLevel.Info, "Another message.");
logger.log(LoggingLevel.Error, "Something went wrong.");
logger.log(LoggingLevel.Warning, "Be careful with the type assertions.");
logger.log(LoggingLevel.Debug, "Running the debugger.");

console.log("-----------");
console.log(
  [...logger.cachedLogs.entries()].map((x) => x[1].join("\n")).join("\n")
);
