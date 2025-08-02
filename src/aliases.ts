import type { Category, UnitsByCategory } from './types';

// Define common aliases as const assertions
export const LENGTH_ALIASES = {
  m: 'meter',
  km: 'kilometer',
  cm: 'centimeter',
  mm: 'millimeter',
  mi: 'mile',
  yd: 'yard',
  ft: 'foot',
  in: 'inch',
} as const;

export const MASS_ALIASES = {
  g: 'gram',
  kg: 'kilogram',
  lb: 'pound',
  oz: 'ounce',
  mg: 'milligram',
  t: 'metricTon',
} as const;

export const TEMPERATURE_ALIASES = {
  c: 'celsius',
  f: 'fahrenheit',
  k: 'kelvin',
} as const;

export const TIME_ALIASES = {
  s: 'second',
  min: 'minute',
  h: 'hour',
  d: 'day',
  w: 'week',
  y: 'year',
} as const;

export const VELOCITY_ALIASES = {
  mps: 'meter_per_second',
  kph: 'kilometer_per_hour',
  mph: 'mile_per_hour',
  fps: 'foot_per_second',
} as const;

// Type for all possible aliases
export type LengthAlias = keyof typeof LENGTH_ALIASES;
export type MassAlias = keyof typeof MASS_ALIASES;
export type TemperatureAlias = keyof typeof TEMPERATURE_ALIASES;
export type TimeAlias = keyof typeof TIME_ALIASES;
export type VelocityAlias = keyof typeof VELOCITY_ALIASES;

// Union types for units that can be aliases
export type LengthUnitOrAlias = UnitsByCategory['length'] | LengthAlias;
export type MassUnitOrAlias = UnitsByCategory['mass'] | MassAlias;
export type TemperatureUnitOrAlias =
  | UnitsByCategory['temperature']
  | TemperatureAlias;
export type TimeUnitOrAlias = UnitsByCategory['time'] | TimeAlias;
export type VelocityUnitOrAlias = UnitsByCategory['velocity'] | VelocityAlias;

// Type mapping for resolving aliases
export type ResolveLengthAlias<T extends LengthUnitOrAlias> =
  T extends LengthAlias ? (typeof LENGTH_ALIASES)[T] : T;

export type ResolveMassAlias<T extends MassUnitOrAlias> = T extends MassAlias
  ? (typeof MASS_ALIASES)[T]
  : T;

export type ResolveTemperatureAlias<T extends TemperatureUnitOrAlias> =
  T extends TemperatureAlias ? (typeof TEMPERATURE_ALIASES)[T] : T;

export type ResolveTimeAlias<T extends TimeUnitOrAlias> = T extends TimeAlias
  ? (typeof TIME_ALIASES)[T]
  : T;

/**
 * Resolve a velocity alias for a given unit
 * @param unit - The unit to resolve the alias for
 * @returns The resolved alias
 */
export type ResolveVelocityAlias<T extends VelocityUnitOrAlias> =
  T extends VelocityAlias ? (typeof VELOCITY_ALIASES)[T] : T;

/**
 * Resolve an alias for a given category and unit
 * @param category - The category of the unit
 * @param unit - The unit to resolve the alias for
 * @returns The resolved alias
 */
export type ResolveAlias<C extends Category, T> = C extends 'length'
  ? T extends LengthUnitOrAlias
    ? ResolveLengthAlias<T>
    : never
  : C extends 'mass'
    ? T extends MassUnitOrAlias
      ? ResolveMassAlias<T>
      : never
    : C extends 'temperature'
      ? T extends TemperatureUnitOrAlias
        ? ResolveTemperatureAlias<T>
        : never
      : C extends 'time'
        ? T extends TimeUnitOrAlias
          ? ResolveTimeAlias<T>
          : never
        : C extends 'velocity'
          ? T extends VelocityUnitOrAlias
            ? ResolveVelocityAlias<T>
            : never
          : never;

/**
 * Resolve a length alias for a given unit
 * @param unit - The unit to resolve the alias for
 * @returns The resolved alias
 */
export function resolveLengthAlias<T extends LengthUnitOrAlias>(
  unit: T
): ResolveLengthAlias<T> {
  if (unit in LENGTH_ALIASES) {
    return LENGTH_ALIASES[unit as LengthAlias] as ResolveLengthAlias<T>;
  }
  return unit as ResolveLengthAlias<T>;
}

/**
 * Resolve a mass alias for a given unit
 * @param unit - The unit to resolve the alias for
 * @returns The resolved alias
 */
export function resolveMassAlias<T extends MassUnitOrAlias>(
  unit: T
): ResolveMassAlias<T> {
  if (unit in MASS_ALIASES) {
    return MASS_ALIASES[unit as MassAlias] as ResolveMassAlias<T>;
  }
  return unit as ResolveMassAlias<T>;
}

/**
 * Resolve a temperature alias for a given unit
 * @param unit - The unit to resolve the alias for
 * @returns The resolved alias
 */
export function resolveTemperatureAlias<T extends TemperatureUnitOrAlias>(
  unit: T
): ResolveTemperatureAlias<T> {
  if (unit in TEMPERATURE_ALIASES) {
    return TEMPERATURE_ALIASES[
      unit as TemperatureAlias
    ] as ResolveTemperatureAlias<T>;
  }
  return unit as ResolveTemperatureAlias<T>;
}

/**
 * Resolve a time alias for a given unit
 * @param unit - The unit to resolve the alias for
 * @returns The resolved alias
 */
export function resolveTimeAlias<T extends TimeUnitOrAlias>(
  unit: T
): ResolveTimeAlias<T> {
  if (unit in TIME_ALIASES) {
    return TIME_ALIASES[unit as TimeAlias] as ResolveTimeAlias<T>;
  }
  return unit as ResolveTimeAlias<T>;
}

/**
 * Resolve a velocity alias for a given unit
 * @param unit - The unit to resolve the alias for
 * @returns The resolved alias
 */
export function resolveVelocityAlias<T extends VelocityUnitOrAlias>(
  unit: T
): ResolveVelocityAlias<T> {
  if (unit in VELOCITY_ALIASES) {
    return VELOCITY_ALIASES[unit as VelocityAlias] as ResolveVelocityAlias<T>;
  }
  return unit as ResolveVelocityAlias<T>;
}

/**
 * Resolve an alias for a given category and unit
 * @param category - The category of the unit
 * @param unit - The unit to resolve the alias for
 * @returns The resolved alias
 */
export function resolveAlias<C extends Category, T>(
  category: C,
  unit: T
): ResolveAlias<C, T> {
  switch (category) {
    case 'length':
      return resolveLengthAlias(unit as any) as ResolveAlias<C, T>;
    case 'mass':
      return resolveMassAlias(unit as any) as ResolveAlias<C, T>;
    case 'temperature':
      return resolveTemperatureAlias(unit as any) as ResolveAlias<C, T>;
    case 'time':
      return resolveTimeAlias(unit as any) as ResolveAlias<C, T>;
    case 'velocity':
      return resolveVelocityAlias(unit as any) as ResolveAlias<C, T>;
    default:
      throw new Error(`Unsupported category: ${category}`);
  }
}
