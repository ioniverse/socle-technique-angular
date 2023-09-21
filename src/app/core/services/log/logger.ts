interface LoggingFunction {
  (message: string, ...data: any[]): void;
}

export abstract class ILoggerService {
  abstract info: LoggingFunction;
  abstract log: LoggingFunction;
  abstract warn: LoggingFunction;
  abstract error: LoggingFunction;
}
