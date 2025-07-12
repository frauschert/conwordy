const velocityConversionFactors = {
  meter_per_second: 1,
  kilometer_per_hour: 0.277778,
  mile_per_hour: 0.44704,
  foot_per_second: 0.3048,
  knot: 0.514444,
} as const satisfies Record<string, number>;

export type VelocityUnit = keyof typeof velocityConversionFactors;
export function convertVelocity(
  value: number,
  from: VelocityUnit,
  to: VelocityUnit
): number {
  const valueInMetersPerSecond = value * velocityConversionFactors[from];
  return valueInMetersPerSecond / velocityConversionFactors[to];
}
