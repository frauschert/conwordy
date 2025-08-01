export type TemperatureUnit = 'celsius' | 'fahrenheit' | 'kelvin';

export function convertTemperature(
  value: number,
  from: TemperatureUnit,
  to: TemperatureUnit
): number {
  if (from === to) return value;

  // Convert to Celsius first
  let celsius: number;
  if (from === 'celsius') celsius = value;
  else if (from === 'fahrenheit') celsius = (value - 32) * (5 / 9);
  else celsius = value - 273.15;

  // Convert from Celsius to target
  if (to === 'celsius') return celsius;
  if (to === 'fahrenheit') return celsius * (9 / 5) + 32;
  return celsius + 273.15;
}
