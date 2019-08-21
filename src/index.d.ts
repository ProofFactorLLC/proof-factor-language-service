export declare class TimeService {
  registeredLocales: string[];
  constructor();
  ago(value: string, locale?: string): string;
  registerLocale(locale: string): Promise<unknown>;
  static loadLocaleFunction(locale: any): Promise<any>;
}
