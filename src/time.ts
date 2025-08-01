const timeConversionFactors = {
  millisecond: 0.001,
  microsecond: 1e-6,
  nanosecond: 1e-9,
  picosecond: 1e-12,
  femtosecond: 1e-15,
  attosecond: 1e-18,
  decisecond: 0.1,
  centisecond: 0.01,
  second: 1,
  minute: 60,
  hour: 3600,
  day: 86400,
  week: 604800,
  fortnight: 1209600, // 14 days in seconds
  month: 2629800, // Average month in seconds
  year: 31557600, // Average year in seconds
} satisfies Record<string, number>;

export interface TimeConversion {
  millisecond: number;
  microsecond: number;
  nanosecond: number;
  picosecond: number;
  femtosecond: number;
  attosecond: number;
  decisecond: number;
  centisecond: number;
  second: number;
  minute: number;
  hour: number;
  day: number;
  week: number;
  fortnight: number;
  month: number;
  year: number;
}

export type TimeUnit = keyof TimeConversion;

export function convertTime(
  value: number,
  from: TimeUnit,
  to: TimeUnit
): number {
  const valueInSeconds = value * timeConversionFactors[from];
  return valueInSeconds / timeConversionFactors[to];
}
