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
  resolveAlias,
} from './aliases';

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
    from<
      From extends C extends 'length'
        ? LengthUnitOrAlias
        : C extends 'mass'
          ? MassUnitOrAlias
          : C extends 'temperature'
            ? TemperatureUnitOrAlias
            : C extends 'time'
              ? TimeUnitOrAlias
              : C extends 'velocity'
                ? VelocityUnitOrAlias
                : never,
    >(fromUnit: From) {
      return {
        to<
          To extends C extends 'length'
            ? Exclude<LengthUnitOrAlias, From>
            : C extends 'mass'
              ? Exclude<MassUnitOrAlias, From>
              : C extends 'temperature'
                ? Exclude<TemperatureUnitOrAlias, From>
                : C extends 'time'
                  ? Exclude<TimeUnitOrAlias, From>
                  : C extends 'velocity'
                    ? Exclude<VelocityUnitOrAlias, From>
                    : never,
        >(toUnit: To): number {
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
