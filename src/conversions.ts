import { defineFactorCategory, defineFunctionCategory } from './define';
import type { Entries, Units } from './types';

const lengthCategory = defineFactorCategory('length')([
  { units: ['meter', 'm'], factor: 1 },
  { units: ['kilometer', 'km'], factor: 1000 },
  { units: ['centimeter', 'cm'], factor: 0.01 },
  { units: ['millimeter', 'mm'], factor: 0.001 },
  { units: ['micrometer', 'μm'], factor: 1e-6 },
  { units: ['nanometer', 'nm'], factor: 1e-9 },
  { units: ['mile', 'mi'], factor: 1609.34 },
  { units: ['yard', 'yd'], factor: 0.9144 },
  { units: ['foot', 'ft'], factor: 0.3048 },
  { units: ['inch', 'in'], factor: 0.0254 },
  { units: ['hectometer', 'hm'], factor: 100 },
  { units: ['decimeter', 'dm'], factor: 0.1 },
  { units: ['decameter', 'dam'], factor: 10 },
  { units: ['light_year', 'ly'], factor: 9.4607e15 },
  { units: ['parsec', 'pc'], factor: 3.0857e16 },
  { units: ['angstrom', 'Å'], factor: 1e-10 },
  { units: ['furlong'], factor: 201.168 },
  { units: ['rod'], factor: 5.0292 },
  { units: ['chain'], factor: 20.1168 },
  { units: ['mil'], factor: 0.0000254 },
  { units: ['nautical_mile', 'nmi'], factor: 1852 },
]);

const massCategory = defineFactorCategory('mass')([
  { units: ['kilogram', 'kg'], factor: 1 },
  { units: ['gram', 'g'], factor: 0.001 },
  { units: ['milligram', 'mg'], factor: 1e-6 },
  { units: ['microgram', 'μg'], factor: 1e-9 },
  { units: ['ton', 't'], factor: 1000 },
  { units: ['pound', 'lb'], factor: 0.453592 },
  { units: ['ounce', 'oz'], factor: 0.0283495 },
  { units: ['carat', 'ct'], factor: 0.0002 },
  { units: ['stone', 'st'], factor: 6.35029 },
  { units: ['grain', 'gr'], factor: 0.00006479891 },
  { units: ['slug'], factor: 14.5939 },
  { units: ['atomic_mass_unit', 'amu'], factor: 1.6605390666e-27 },
]);

const temperatureCategory = defineFunctionCategory('temperature')([
  { units: ['kelvin', 'K'], toBase: v => v, fromBase: v => v },
  {
    units: ['celsius', '°C'],
    toBase: v => v + 273.15,
    fromBase: v => v - 273.15,
  },
  {
    units: ['fahrenheit', '°F'],
    toBase: v => ((v - 32) * 5) / 9 + 273.15,
    fromBase: v => ((v - 273.15) * 9) / 5 + 32,
  },
  {
    units: ['rankine', '°R'],
    toBase: v => ((v + 459.67) * 5) / 9,
    fromBase: v => (v * 9) / 5 - 459.67,
  },
  {
    units: ['delisle', '°D'],
    toBase: v => ((212 - v) * 5) / 6 + 273.15,
    fromBase: v => 212 - (v * 6) / 5,
  },
  {
    units: ['réaumur', '°Re'],
    toBase: v => v + 273.15,
    fromBase: v => v - 273.15,
  },
]);

const volumeCategory = defineFactorCategory('volume')([
  { units: ['cubic_meter', 'm³'], factor: 1 },
  { units: ['cubic_centimeter', 'cm³'], factor: 1e-6 },
  { units: ['liter', 'L', 'l'], factor: 1e-3 },
  { units: ['milliliter', 'mL', 'ml'], factor: 1e-6 },
  { units: ['gallon', 'gal'], factor: 0.003785411784 },
  { units: ['pint', 'pt'], factor: 0.000473176473 },
  { units: ['barrel', 'bbl'], factor: 0.158987294928 },
  { units: ['cubic_foot', 'ft³'], factor: 0.028316846592 },
  { units: ['cubic_inch', 'in³'], factor: 0.000016387064 },
  { units: ['cubic_yard', 'yd³'], factor: 0.764554857984 },
]);

const timeCategory = defineFactorCategory('time')([
  { units: ['second', 's'], factor: 1 },
  { units: ['minute', 'min'], factor: 60 },
  { units: ['hour', 'h'], factor: 3600 },
  { units: ['day', 'd'], factor: 86400 },
  { units: ['week', 'w'], factor: 604800 },
  { units: ['fortnight'], factor: 1209600 },
  { units: ['month', 'mo'], factor: 2629800 },
  { units: ['year', 'y'], factor: 31557600 },
  { units: ['decade'], factor: 315576000 },
  { units: ['century'], factor: 3155760000 },
  { units: ['millisecond', 'ms'], factor: 0.001 },
  { units: ['microsecond', 'μs'], factor: 1e-6 },
  { units: ['nanosecond', 'ns'], factor: 1e-9 },
  { units: ['picosecond', 'ps'], factor: 1e-12 },
]);

const amountOfSubstanceCategory = defineFactorCategory('amountOfSubstance')([
  { units: ['mole', 'mol'], factor: 1 },
  { units: ['millimole', 'mmol'], factor: 0.001 },
  { units: ['micromole', 'μmol'], factor: 1e-6 },
  { units: ['nanomole', 'nmol'], factor: 1e-9 },
  { units: ['picomole', 'pmol'], factor: 1e-12 },
  { units: ['kilomole', 'kmol'], factor: 1000 },
  { units: ['meg mole', 'Mmol'], factor: 1e6 },
  { units: ['gigamole', 'Gmol'], factor: 1e9 },
  { units: ['teramole', 'Tmol'], factor: 1e12 },
]);

const pressureCategory = defineFactorCategory('pressure')([
  { units: ['pascal', 'Pa'], factor: 1 },
  { units: ['hectopascal', 'hPa'], factor: 100 },
  { units: ['kilopascal', 'kPa'], factor: 1e3 },
  { units: ['megapascal', 'MPa'], factor: 1e6 },
  { units: ['gigapascal', 'GPa'], factor: 1e9 },
  { units: ['millipascal', 'mPa'], factor: 1e-3 },
  { units: ['bar'], factor: 1e5 },
  { units: ['millibar', 'mbar'], factor: 100 },
  { units: ['atmosphere', 'atm'], factor: 101325 },
  { units: ['torr'], factor: 133.322 },
  { units: ['psi'], factor: 6894.76 },
]);

const velocityCategory = defineFactorCategory('velocity')([
  { units: ['meter_per_second', 'm/s'], factor: 1 },
  { units: ['meter_per_minute', 'm/min'], factor: 1 / 60 },
  { units: ['kilometer_per_hour', 'km/h'], factor: 1 / 3.6 },
  { units: ['mile_per_hour', 'mi/h'], factor: 0.44704 },
  { units: ['foot_per_second', 'ft/s'], factor: 0.3048 },
  { units: ['inch_per_second', 'in/s'], factor: 0.0254 },
  { units: ['centimeter_per_second', 'cm/s'], factor: 0.01 },
  { units: ['millimeter_per_second', 'mm/s'], factor: 0.001 },
  { units: ['micrometer_per_second', 'μm/s'], factor: 1e-6 },
  { units: ['nanometer_per_second', 'nm/s'], factor: 1e-9 },
  { units: ['picometer_per_second', 'pm/s'], factor: 1e-12 },
  { units: ['kilometer_per_second', 'km/s'], factor: 1000 },
  { units: ['mile_per_second', 'mi/s'], factor: 1609.34 },
  { units: ['knot', 'kn'], factor: 0.514444 },
  { units: ['foot_per_minute', 'ft/min'], factor: 0.00508 },
]);

const electricalCurrentCategory = defineFactorCategory('electricalCurrent')([
  { units: ['ampere', 'A'], factor: 1 },
  { units: ['milliampere', 'mA'], factor: 0.001 },
  { units: ['microampere', 'μA'], factor: 1e-6 },
  { units: ['nanampere', 'nA'], factor: 1e-9 },
  { units: ['picoampere', 'pA'], factor: 1e-12 },
  { units: ['kiloampere', 'kA'], factor: 1000 },
  { units: ['megaampere', 'MA'], factor: 1e6 },
  { units: ['gigaampere', 'GA'], factor: 1e9 },
]);

const luminousCategory = defineFactorCategory('luminous')([
  { units: ['candela', 'cd'], factor: 1 },
  { units: ['millicandela', 'mcd'], factor: 0.001 },
  { units: ['microcandela', 'μcd'], factor: 1e-6 },
  { units: ['nanocandela', 'ncd'], factor: 1e-9 },
  { units: ['picocandela', 'pcd'], factor: 1e-12 },
  { units: ['kilocandela', 'kcd'], factor: 1000 },
  { units: ['megacandela', 'Mcd'], factor: 1e6 },
  { units: ['gigacandela', 'Gcd'], factor: 1e9 },
  { units: ['teracandela', 'Tcd'], factor: 1e12 },
]);

const dataCategory = defineFactorCategory('data')([
  { units: ['bit', 'b'], factor: 1 },
  { units: ['byte', 'B'], factor: 8 },
  { units: ['kilobit', 'Kb'], factor: 1000 },
  { units: ['kilobyte', 'KB'], factor: 8000 },
  { units: ['megabit', 'Mb'], factor: 1e6 },
  { units: ['megabyte', 'MB'], factor: 8e6 },
  { units: ['gigabit', 'Gb'], factor: 1e9 },
  { units: ['gigabyte', 'GB'], factor: 8e9 },
  { units: ['terabit', 'Tb'], factor: 1e12 },
  { units: ['terabyte', 'TB'], factor: 8e12 },
  { units: ['kibibit', 'Kib'], factor: 1024 },
  { units: ['kibibyte', 'KiB'], factor: 8192 },
  { units: ['mebibit', 'Mib'], factor: 1048576 },
  { units: ['mebibyte', 'MiB'], factor: 8388608 },
]);

const dataRateCategory = defineFactorCategory('dataRate')([
  { units: ['bit_per_second', 'bps'], factor: 1 },
  { units: ['byte_per_second', 'Bps'], factor: 8 },
  { units: ['kilobit_per_second', 'Kbps'], factor: 1000 },
  { units: ['kilobyte_per_second', 'KBps'], factor: 8000 },
  { units: ['megabit_per_second', 'Mbps'], factor: 1e6 },
  { units: ['megabyte_per_second', 'MBps'], factor: 8e6 },
  { units: ['gigabit_per_second', 'Gbps'], factor: 1e9 },
  { units: ['gigabyte_per_second', 'GBps'], factor: 8e9 },
  { units: ['terabit_per_second', 'Tbps'], factor: 1e12 },
  { units: ['terabyte_per_second', 'TBps'], factor: 8e12 },
  { units: ['kibibit_per_second', 'Kibps'], factor: 1024 },
  { units: ['kibibyte_per_second', 'KiBps'], factor: 8192 },
  { units: ['mebibit_per_second', 'Mibps'], factor: 1048576 },
  { units: ['mebibyte_per_second', 'MiBps'], factor: 8388608 },
]);

const forceCategory = defineFactorCategory('force')([
  { units: ['newton', 'N'], factor: 1 },
  { units: ['millinewton', 'mN'], factor: 1e-3 },
  { units: ['micronewton', 'μN'], factor: 1e-6 },
  { units: ['nanonewton', 'nN'], factor: 1e-9 },
  { units: ['piconewton', 'pN'], factor: 1e-12 },
  { units: ['femtonewton', 'fN'], factor: 1e-15 },
  { units: ['attonewton', 'aN'], factor: 1e-18 },
  { units: ['zeptonewton', 'zN'], factor: 1e-21 },
  { units: ['yoctonewton', 'yN'], factor: 1e-24 },
  { units: ['kilonewton', 'kN'], factor: 1000 },
  { units: ['meganewton', 'MN'], factor: 1e6 },
  { units: ['giganewton', 'GN'], factor: 1e9 },
  { units: ['teranewton', 'TN'], factor: 1e12 },
]);

export const conversions = [
  ...lengthCategory,
  ...massCategory,
  ...temperatureCategory,
  ...volumeCategory,
  ...timeCategory,
  ...velocityCategory,
  ...electricalCurrentCategory,
  ...luminousCategory,
  ...dataCategory,
  ...dataRateCategory,
  ...amountOfSubstanceCategory,
  ...pressureCategory,
  ...forceCategory,
] as const;

export const conversionMap: Map<Units, Entries> = new Map(
  conversions.flatMap(entry => entry.units.map(u => [u, entry] as const))
);
