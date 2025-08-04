import { convert } from '../convert';
import { performance } from 'perf_hooks';

function benchmark(name: string, fn: () => void, iterations = 100000) {
  const times: number[] = [];

  // Warmup
  for (let i = 0; i < 1000; i++) fn();

  // Actual benchmarks
  for (let i = 0; i < iterations; i++) {
    const start = performance.now();
    fn();
    const end = performance.now();
    times.push((end - start) * 1_000_000); // Convert to nanoseconds
  }

  const avg = times.reduce((a, b) => a + b) / times.length;
  const min = Math.min(...times);
  const max = Math.max(...times);

  console.log(`${name}:`);
  console.log(`  Avg: ${avg.toFixed(2)} ns`);
  console.log(`  Min: ${min.toFixed(2)} ns`);
  console.log(`  Max: ${max.toFixed(2)} ns`);
  console.log();
}

console.log('Running conversion benchmarks...\n');

// Basic conversions
benchmark('Length conversion', () => {
  convert(1000, 'length').from('meter').to('kilometer');
});

benchmark('Mass conversion', () => {
  convert(1000, 'mass').from('gram').to('kilogram');
});

benchmark('Temperature conversion', () => {
  convert(100, 'temperature').from('celsius').to('fahrenheit');
});

// With aliases
benchmark('Length conversion with aliases', () => {
  convert(1000, 'length').from('m').to('km');
});

// With precision
benchmark('Length conversion with precision', () => {
  convert(1234.5678, 'length', { precision: 2 }).from('meter').to('kilometer');
});

// Complex scenarios
benchmark('Multiple conversions', () => {
  convert(100, 'length').from('meter').to('kilometer');
  convert(200, 'mass').from('gram').to('kilogram');
  convert(300, 'temperature').from('celsius').to('fahrenheit');
});
