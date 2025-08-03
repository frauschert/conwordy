const volumeConversionFactors = {
  cubic_meter: 1,
  cubic_kilometer: 1000000000,
  cubic_centimeter: 0.000001,
  cubic_millimeter: 0.000000001,
  cubic_inch: 0.0000163871,
  cubic_foot: 0.0283168,
  cubic_yard: 0.764555,
  cubic_mile: 4168181825.44058,
  liter: 0.001,
  milliliter: 0.000001,
  gallon: 0.00378541,
  quart: 0.000946353,
  pint: 0.000473176,
  cup: 0.000236588,
  tablespoon: 0.0000147868,
  teaspoon: 0.00000492892,
  fluid_ounce: 0.0000295735,
};

export type VolumeUnit = keyof typeof volumeConversionFactors;

/**
 * Convert a value from one volume unit to another
 * @param value - The value to convert
 * @param from - The unit to convert from
 * @param to - The unit to convert to
 * @returns The converted value
 */
export function convertVolume(
  value: number,
  from: VolumeUnit,
  to: VolumeUnit
): number {
  const valueInCubicMeters = value * volumeConversionFactors[from];
  return valueInCubicMeters / volumeConversionFactors[to];
}
