const lengthConversionFactors = {
  meter: 1,
  yard: 0.9144,
  inch: 0.0254,
  hectometer: 100,
  decimeter: 0.1,
  decameter: 10,
  nanometer: 1e-9,
  micrometer: 1e-6,
  millimeter: 0.001,
  kilometer: 1000,
  centimeter: 0.01,
  mile: 1609.34,
  foot: 0.3048,
} as const satisfies Record<string, number>;

export type LengthUnit = keyof typeof lengthConversionFactors;

export function convertLength(
  value: number,
  from: LengthUnit,
  to: LengthUnit
): number {
  const valueInMeters = value * lengthConversionFactors[from];
  return valueInMeters / lengthConversionFactors[to];
}
