import type { LengthUnit } from './length';
import type { MassUnit } from './mass';
import type { TemperatureUnit } from './temperature';
import type { TimeUnit } from './time';
import type { VelocityUnit } from './velocity';

export interface UnitsByCategory {
  length: LengthUnit;
  mass: MassUnit;
  temperature: TemperatureUnit;
  time: TimeUnit;
  velocity: VelocityUnit;
}

export type Category = keyof UnitsByCategory;

// Type for aliases - maps alias names to actual unit names
export interface UnitAliases {
  length: Record<string, LengthUnit>;
  mass: Record<string, MassUnit>;
  temperature: Record<string, TemperatureUnit>;
  time: Record<string, TimeUnit>;
  velocity: Record<string, VelocityUnit>;
}

// Type for units that can be aliases (actual units + aliases)
export type UnitWithAlias<C extends Category> =
  | UnitsByCategory[C]
  | keyof UnitAliases[C];

// Helper type to resolve aliases to actual units
export type ResolvedUnit<
  C extends Category,
  U extends UnitWithAlias<C>,
> = U extends UnitsByCategory[C] ? U : UnitAliases[C][U & keyof UnitAliases[C]];
