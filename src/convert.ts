import { conversionMap } from './conversions';
import { applyRounding } from './rounding';
import type { Units, ValidToUnits } from './types';

export function convert<From extends Units>(
  value: number | BigInt,
  from: From,
  to: ValidToUnits<From>,
  options: { precision?: number; rounding?: 'floor' | 'ceil' | 'round' } = {}
): number {
  const fromEntry = conversionMap.get(from);
  const toEntry = conversionMap.get(to);

  if (!fromEntry || !toEntry) {
    throw new Error(`Conversion from ${from} to ${to} is not supported.`);
  }

  if (fromEntry.kind === 'factor' && toEntry.kind === 'factor') {
    if (typeof value === 'number') {
      const valueInBase = value * fromEntry.factor;
      if (options?.precision) {
        return applyRounding(
          valueInBase / toEntry.factor,
          options.precision,
          options.rounding
        );
      }
      return valueInBase / toEntry.factor;
    } else if (typeof value === 'bigint') {
      const valueInBase = value * BigInt(fromEntry.factor);
      if (options?.precision) {
        return applyRounding(
          Number(valueInBase) / toEntry.factor,
          options.precision,
          options.rounding
        );
      }
      return Number(valueInBase) / toEntry.factor;
    }
  } else if (fromEntry.kind === 'function' && toEntry.kind === 'function') {
    if (typeof value === 'number') {
      const valueInBase = fromEntry.toBase(value);
      if (options?.precision) {
        return applyRounding(
          toEntry.fromBase(valueInBase),
          options.precision,
          options.rounding
        );
      }
      return toEntry.fromBase(valueInBase);
    } else if (typeof value === 'bigint') {
      const valueInBase = fromEntry.toBase(Number(value));
      if (options?.precision) {
        return applyRounding(
          toEntry.fromBase(valueInBase),
          options.precision,
          options.rounding
        );
      }
      return toEntry.fromBase(valueInBase);
    }
  }

  throw new Error(`Conversion from ${from} to ${to} is not supported.`);
}

//@ts-expect-error
convert(1, 'm', 'meter'); // Example usage

convert(1, 'm', 'kilometer');
