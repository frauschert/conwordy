import type { UnitsByCategory, Category } from './types';
import { convertLength } from './length';
import { convertMass } from './mass';
import { convertTemperature } from './temperature';
import { applyRounding, RoundingMethod } from './rounding';
import { convertTime } from './time';
import { convertVelocity } from './velocity';
import {
  LengthUnitOrAlias,
  MassUnitOrAlias,
  TemperatureUnitOrAlias,
  TimeUnitOrAlias,
  VelocityUnitOrAlias,
  VolumeUnitOrAlias,
  resolveAlias,
} from './aliases';
import { convertVolume } from './volume';

/**
 * Options for the conversion
 * @property precision - The number of decimals to round to
 * @property rounding - The rounding method to use
 */
interface ConvertOptions {
  precision?: number;
  rounding?: RoundingMethod;
}

const converters: Record<Category, Function> = {
  length: convertLength,
  mass: convertMass,
  temperature: convertTemperature,
  time: convertTime,
  velocity: convertVelocity,
  volume: convertVolume,
};

type ConvertFrom<C extends Category> = C extends 'length'
  ? LengthUnitOrAlias
  : C extends 'mass'
    ? MassUnitOrAlias
    : C extends 'temperature'
      ? TemperatureUnitOrAlias
      : C extends 'time'
        ? TimeUnitOrAlias
        : C extends 'velocity'
          ? VelocityUnitOrAlias
          : C extends 'volume'
            ? VolumeUnitOrAlias
            : never;

/**
 * Convert a value from one unit to another
 * @param value - The value to convert
 * @param category - The category of the value
 * @param options - The options for the conversion
 * @returns The converted value
 */
export function convert<C extends Category>(
  value: number,
  category: C,
  options: ConvertOptions = {}
) {
  return {
    from<From extends ConvertFrom<C>>(fromUnit: From) {
      return {
        to<To extends Exclude<ConvertFrom<C>, From>>(toUnit: To): number {
          const converter = converters[category];
          if (!converter) {
            throw new Error(`Unsupported category: ${category}`);
          }

          // Resolve aliases for both from and to units
          const resolvedFromUnit = resolveAlias(category, fromUnit);
          const resolvedToUnit = resolveAlias(category, toUnit);

          let result = converter(value, resolvedFromUnit, resolvedToUnit);
          if (options.precision !== undefined) {
            result = applyRounding(result, options.precision, options.rounding);
          }
          return result;
        },
      };
    },
  };
}
