import type { LengthUnit } from "./length";
import type { MassUnit } from "./mass";
import type { TemperatureUnit } from "./temperature";
import type { TimeUnit } from "./time";
import type { VelocityUnit } from "./velocity";

export type UnitsByCategory = {
  length: LengthUnit;
  mass: MassUnit;
  temperature: TemperatureUnit;
  time: TimeUnit;
  velocity: VelocityUnit;
};

export type Category = keyof UnitsByCategory;
