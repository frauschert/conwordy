import {
  LENGTH_ALIASES,
  MASS_ALIASES,
  TEMPERATURE_ALIASES,
  TIME_ALIASES,
  VELOCITY_ALIASES,
  resolveAlias,
  resolveLengthAlias,
  resolveMassAlias,
  resolveTemperatureAlias,
  resolveTimeAlias,
  resolveVelocityAlias,
} from './aliases';

describe('type-safe aliases', () => {
  describe('LENGTH_ALIASES', () => {
    it('should contain common length aliases', () => {
      expect(LENGTH_ALIASES.m).toBe('meter');
      expect(LENGTH_ALIASES.km).toBe('kilometer');
      expect(LENGTH_ALIASES.cm).toBe('centimeter');
      expect(LENGTH_ALIASES.mm).toBe('millimeter');
      expect(LENGTH_ALIASES.mi).toBe('mile');
      expect(LENGTH_ALIASES.yd).toBe('yard');
      expect(LENGTH_ALIASES.ft).toBe('foot');
      expect(LENGTH_ALIASES.in).toBe('inch');
    });
  });

  describe('MASS_ALIASES', () => {
    it('should contain common mass aliases', () => {
      expect(MASS_ALIASES.g).toBe('gram');
      expect(MASS_ALIASES.kg).toBe('kilogram');
      expect(MASS_ALIASES.lb).toBe('pound');
      expect(MASS_ALIASES.oz).toBe('ounce');
      expect(MASS_ALIASES.mg).toBe('milligram');
      expect(MASS_ALIASES.t).toBe('metricTon');
    });
  });

  describe('TEMPERATURE_ALIASES', () => {
    it('should contain common temperature aliases', () => {
      expect(TEMPERATURE_ALIASES.c).toBe('celsius');
      expect(TEMPERATURE_ALIASES.f).toBe('fahrenheit');
      expect(TEMPERATURE_ALIASES.k).toBe('kelvin');
    });
  });

  describe('TIME_ALIASES', () => {
    it('should contain common time aliases', () => {
      expect(TIME_ALIASES.s).toBe('second');
      expect(TIME_ALIASES.min).toBe('minute');
      expect(TIME_ALIASES.h).toBe('hour');
      expect(TIME_ALIASES.d).toBe('day');
      expect(TIME_ALIASES.w).toBe('week');
      expect(TIME_ALIASES.y).toBe('year');
    });
  });

  describe('VELOCITY_ALIASES', () => {
    it('should contain common velocity aliases', () => {
      expect(VELOCITY_ALIASES.mps).toBe('meter_per_second');
      expect(VELOCITY_ALIASES.kph).toBe('kilometer_per_hour');
      expect(VELOCITY_ALIASES.mph).toBe('mile_per_hour');
      expect(VELOCITY_ALIASES.fps).toBe('foot_per_second');
    });
  });

  describe('resolveLengthAlias', () => {
    it('should resolve length aliases', () => {
      expect(resolveLengthAlias('m')).toBe('meter');
      expect(resolveLengthAlias('km')).toBe('kilometer');
      expect(resolveLengthAlias('cm')).toBe('centimeter');
    });

    it('should return original unit if not an alias', () => {
      expect(resolveLengthAlias('meter')).toBe('meter');
      expect(resolveLengthAlias('kilometer')).toBe('kilometer');
    });
  });

  describe('resolveMassAlias', () => {
    it('should resolve mass aliases', () => {
      expect(resolveMassAlias('g')).toBe('gram');
      expect(resolveMassAlias('kg')).toBe('kilogram');
      expect(resolveMassAlias('lb')).toBe('pound');
    });

    it('should return original unit if not an alias', () => {
      expect(resolveMassAlias('gram')).toBe('gram');
      expect(resolveMassAlias('kilogram')).toBe('kilogram');
    });
  });

  describe('resolveTemperatureAlias', () => {
    it('should resolve temperature aliases', () => {
      expect(resolveTemperatureAlias('c')).toBe('celsius');
      expect(resolveTemperatureAlias('f')).toBe('fahrenheit');
      expect(resolveTemperatureAlias('k')).toBe('kelvin');
    });

    it('should return original unit if not an alias', () => {
      expect(resolveTemperatureAlias('celsius')).toBe('celsius');
      expect(resolveTemperatureAlias('fahrenheit')).toBe('fahrenheit');
    });
  });

  describe('resolveTimeAlias', () => {
    it('should resolve time aliases', () => {
      expect(resolveTimeAlias('s')).toBe('second');
      expect(resolveTimeAlias('min')).toBe('minute');
      expect(resolveTimeAlias('h')).toBe('hour');
    });

    it('should return original unit if not an alias', () => {
      expect(resolveTimeAlias('second')).toBe('second');
      expect(resolveTimeAlias('minute')).toBe('minute');
    });
  });

  describe('resolveVelocityAlias', () => {
    it('should resolve velocity aliases', () => {
      expect(resolveVelocityAlias('mps')).toBe('meter_per_second');
      expect(resolveVelocityAlias('kph')).toBe('kilometer_per_hour');
      expect(resolveVelocityAlias('mph')).toBe('mile_per_hour');
    });

    it('should return original unit if not an alias', () => {
      expect(resolveVelocityAlias('meter_per_second')).toBe('meter_per_second');
      expect(resolveVelocityAlias('kilometer_per_hour')).toBe(
        'kilometer_per_hour'
      );
    });
  });

  describe('resolveAlias (generic)', () => {
    it('should resolve aliases for all categories', () => {
      expect(resolveAlias('length', 'm')).toBe('meter');
      expect(resolveAlias('mass', 'g')).toBe('gram');
      expect(resolveAlias('temperature', 'c')).toBe('celsius');
      expect(resolveAlias('time', 's')).toBe('second');
      expect(resolveAlias('velocity', 'mps')).toBe('meter_per_second');
    });

    it('should return original units if not aliases', () => {
      expect(resolveAlias('length', 'meter')).toBe('meter');
      expect(resolveAlias('mass', 'gram')).toBe('gram');
      expect(resolveAlias('temperature', 'celsius')).toBe('celsius');
    });

    it('should throw error for unsupported category', () => {
      expect(() => resolveAlias('unsupported' as any, 'meter')).toThrow(
        'Unsupported category: unsupported'
      );
    });
  });
});
