export type RoundingMethod = 'round' | 'floor' | 'ceil';

/**
 * Apply rounding to a value
 * @param value - The value to round
 * @param decimals - The number of decimals to round to
 * @param method - The rounding method to use
 * @returns The rounded value
 */
export function applyRounding(
  value: number,
  decimals: number,
  method: RoundingMethod = 'round'
): number {
  const factor = Math.pow(10, decimals);
  switch (method) {
    case 'floor':
      return Math.floor(value * factor) / factor;
    case 'ceil':
      return Math.ceil(value * factor) / factor;
    case 'round':
    default:
      return Math.round(value * factor) / factor;
  }
}
