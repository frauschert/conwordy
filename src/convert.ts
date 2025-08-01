import type { UnitsByCategory, Category } from './types';
import { convertLength } from './length';
import { convertMass } from './mass';
import { convertTemperature } from './temperature';
import { applyRounding, RoundingMethod } from './rounding';
import { convertTime } from './time';
import { convertVelocity } from './velocity';

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
};

export function convert<C extends Category>(
  value: number,
  category: C,
  options: ConvertOptions = {}
) {
  return {
    from<From extends UnitsByCategory[C]>(fromUnit: From) {
      return {
        to<To extends Exclude<UnitsByCategory[C], From>>(toUnit: To): number {
          const converter = converters[category];
          if (!converter) {
            throw new Error(`Unsupported category: ${category}`);
          }
          let result = converter(value, fromUnit, toUnit);
          if (options.precision !== undefined) {
            result = applyRounding(result, options.precision, options.rounding);
          }
          return result;
        },
      };
    },
  };
}
