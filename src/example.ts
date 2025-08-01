import { convert } from './convert';

// Example usage of type-safe aliases
console.log('=== Type-Safe Unit Conversion with Aliases ===\n');

// Length conversions with aliases
console.log('Length Conversions:');
console.log(`1000 m = ${convert(1000, 'length').from('m').to('km')} km`);
console.log(`1 mi = ${convert(1, 'length').from('mi').to('km')} km`);
console.log(`100 cm = ${convert(100, 'length').from('cm').to('m')} m`);

// Mass conversions with aliases
console.log('\nMass Conversions:');
console.log(`1000 g = ${convert(1000, 'mass').from('g').to('kg')} kg`);
console.log(`1 lb = ${convert(1, 'mass').from('lb').to('g')} g`);
console.log(`16 oz = ${convert(16, 'mass').from('oz').to('lb')} lb`);

// Temperature conversions with aliases
console.log('\nTemperature Conversions:');
console.log(`0 c = ${convert(0, 'temperature').from('c').to('f')} f`);
console.log(`100 c = ${convert(100, 'temperature').from('c').to('k')} k`);
console.log(`32 f = ${convert(32, 'temperature').from('f').to('c')} c`);

// Time conversions with aliases
console.log('\nTime Conversions:');
console.log(`120 s = ${convert(120, 'time').from('s').to('min')} min`);
console.log(`2 h = ${convert(2, 'time').from('h').to('min')} min`);
console.log(`1 d = ${convert(1, 'time').from('d').to('h')} h`);

// Velocity conversions with aliases
console.log('\nVelocity Conversions:');
console.log(`10 mps = ${convert(10, 'velocity').from('mps').to('kph')} kph`);
console.log(`60 mph = ${convert(60, 'velocity').from('mph').to('fps')} fps`);
console.log(`100 kph = ${convert(100, 'velocity').from('kph').to('mps')} mps`);

// Mixed aliases and actual unit names
console.log('\nMixed Aliases and Actual Units:');
console.log(
  `1000 m = ${convert(1000, 'length').from('m').to('kilometer')} kilometer`
);
console.log(`1 kg = ${convert(1, 'mass').from('kg').to('gram')} gram`);

// With precision
console.log('\nWith Precision:');
console.log(
  `1.23456 m = ${convert(1.23456, 'length', { precision: 3 }).from('m').to('km')} km`
);
console.log(
  `98.765 f = ${convert(98.765, 'temperature', { precision: 1 }).from('f').to('c')} c`
);
