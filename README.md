# Conwordy - Type-Safe Unit Conversion Library

A fully type-safe unit conversion library written in TypeScript with support for aliases and comprehensive type checking.

## Features

- **Type-Safe**: Full TypeScript support with compile-time type checking
- **Alias Support**: Use short aliases like `'m'` for `'meter'` or `'kg'` for `'kilogram'`
- **Multiple Categories**: Length, Mass, Temperature, Time, and Velocity
- **Precision Control**: Configurable rounding and precision
- **Fluent API**: Chainable conversion methods

## Installation

```bash
npm install conwordy
```

## Usage

### Basic Conversions

```typescript
import { convert } from 'conwordy';

// Length conversions
const result = convert(1000, 'length').from('meter').to('kilometer');
console.log(result); // 1

// Mass conversions
const grams = convert(1, 'mass').from('kilogram').to('gram');
console.log(grams); // 1000

// Temperature conversions
const fahrenheit = convert(0, 'temperature').from('celsius').to('fahrenheit');
console.log(fahrenheit); // 32
```

### Using Aliases

The library supports common aliases for all units:

```typescript
// Length aliases
convert(1000, 'length').from('m').to('km'); // 'm' → 'meter', 'km' → 'kilometer'
convert(1, 'length').from('mi').to('km'); // 'mi' → 'mile'
convert(100, 'length').from('cm').to('m'); // 'cm' → 'centimeter'

// Mass aliases
convert(1000, 'mass').from('g').to('kg'); // 'g' → 'gram', 'kg' → 'kilogram'
convert(1, 'mass').from('lb').to('g'); // 'lb' → 'pound'
convert(16, 'mass').from('oz').to('lb'); // 'oz' → 'ounce'

// Temperature aliases
convert(0, 'temperature').from('c').to('f'); // 'c' → 'celsius', 'f' → 'fahrenheit'
convert(100, 'temperature').from('c').to('k'); // 'k' → 'kelvin'

// Time aliases
convert(120, 'time').from('s').to('min'); // 's' → 'second', 'min' → 'minute'
convert(2, 'time').from('h').to('min'); // 'h' → 'hour'

// Velocity aliases
convert(10, 'velocity').from('mps').to('kph'); // 'mps' → 'meter_per_second', 'kph' → 'kilometer_per_hour'
convert(60, 'velocity').from('mph').to('fps'); // 'mph' → 'mile_per_hour', 'fps' → 'foot_per_second'
```

### Available Aliases

#### Length

- `m` → `meter`
- `km` → `kilometer`
- `cm` → `centimeter`
- `mm` → `millimeter`
- `mi` → `mile`
- `yd` → `yard`
- `ft` → `foot`
- `in` → `inch`

#### Mass

- `g` → `gram`
- `kg` → `kilogram`
- `lb` → `pound`
- `oz` → `ounce`
- `mg` → `milligram`
- `t` → `metricTon`

#### Temperature

- `c` → `celsius`
- `f` → `fahrenheit`
- `k` → `kelvin`

#### Time

- `s` → `second`
- `min` → `minute`
- `h` → `hour`
- `d` → `day`
- `w` → `week`
- `y` → `year`

#### Velocity

- `mps` → `meter_per_second`
- `kph` → `kilometer_per_hour`
- `mph` → `mile_per_hour`
- `fps` → `foot_per_second`

### Precision and Rounding

```typescript
// Round to 2 decimal places
const result = convert(123.4567, 'length', { precision: 2 })
  .from('meter')
  .to('kilometer');
console.log(result); // 0.12

// Use floor rounding
const floored = convert(123.4567, 'length', {
  precision: 1,
  rounding: 'floor',
})
  .from('meter')
  .to('kilometer');
console.log(floored); // 0.1

// Available rounding methods: 'round', 'floor', 'ceil'
```

### Type Safety

The library provides full TypeScript support:

```typescript
// ✅ This works - type-safe
convert(100, 'length').from('meter').to('kilometer');

// ✅ This also works - aliases are type-safe
convert(100, 'length').from('m').to('km');

// ❌ This will cause a TypeScript error
convert(100, 'length').from('meter').to('invalid_unit');

// ❌ This will cause a TypeScript error
convert(100, 'length').from('meter').to('kilogram'); // Wrong category
```

## API Reference

### `convert(value, category, options?)`

Creates a conversion chain.

**Parameters:**

- `value: number` - The value to convert
- `category: Category` - The unit category
- `options?: ConvertOptions` - Optional conversion options

**Returns:** A conversion chain object

### `ConvertOptions`

```typescript
interface ConvertOptions {
  precision?: number; // Number of decimal places
  rounding?: 'round' | 'floor' | 'ceil'; // Rounding method
}
```

### Conversion Chain

```typescript
convert(value, category, options)
  .from(unitOrAlias) // Starting unit (can be alias)
  .to(unitOrAlias); // Target unit (can be alias)
```

## Supported Categories

### Length

- `meter`, `kilometer`, `centimeter`, `millimeter`
- `mile`, `yard`, `foot`, `inch`
- `hectometer`, `decimeter`, `decameter`
- `nanometer`, `micrometer`

### Mass

- `gram`, `kilogram`, `milligram`, `microgram`
- `pound`, `ounce`, `carat`
- `stone`, `ton`, `metricTon`

### Temperature

- `celsius`, `fahrenheit`, `kelvin`

### Time

- `second`, `minute`, `hour`, `day`, `week`
- `millisecond`, `microsecond`, `nanosecond`
- `picosecond`, `femtosecond`, `attosecond`
- `decisecond`, `centisecond`
- `month`, `year`, `fortnight`

### Velocity

- `meter_per_second`, `kilometer_per_hour`
- `mile_per_hour`, `foot_per_second`
- `knot`

## Performance Benchmarks

Run performance benchmarks:

```bash
npm run benchmark
```

This will output detailed performance metrics in nanoseconds (ns) for various conversion scenarios:

- Average execution time
- Minimum execution time
- Maximum execution time

Example output:

```
Length conversion:
  Avg: 123.45 ns
  Min: 98.76 ns
  Max: 234.56 ns
```

Lower numbers indicate better performance.

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Format code
npm run format

# Check formatting
npm run format:check
```

## License

MIT
