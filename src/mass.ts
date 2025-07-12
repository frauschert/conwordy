const massConversionFactors = {
  gram: 1,
  kilogram: 1000,
  pound: 453.592,
  ounce: 28.3495,
  carat: 0.2,
  milligram: 0.001,
  microgram: 1e-6,
  stone: 6350.29,
  ton: 907185,
  metricTon: 1000000,
} as const satisfies Record<string, number>;

export type MassUnit = keyof typeof massConversionFactors;

export function convertMass(
  value: number,
  from: MassUnit,
  to: MassUnit
): number {
  const valueInGrams = value * massConversionFactors[from];
  return valueInGrams / massConversionFactors[to];
}
