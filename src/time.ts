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
  month: 2629800, // Average month in seconds
  year: 31557600, // Average year in seconds
} as const satisfies Record<string, number>;

export type TimeUnit = keyof typeof timeConversionFactors;

export function convertTime(
  value: number,
  from: TimeUnit,
  to: TimeUnit
): number {
  const valueInSeconds = value * timeConversionFactors[from];
  return valueInSeconds / timeConversionFactors[to];
}
