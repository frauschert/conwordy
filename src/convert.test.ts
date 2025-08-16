import { convert } from './convert';

describe('convert', () => {
  describe('length conversions', () => {
    it('should convert meters to kilometers', () => {
      const result = convert(1500, 'meter', 'kilometer');
      expect(result).toBeCloseTo(1.5);
    });
    it('should convert kilometers to meters', () => {
      const result = convert(1.5, 'kilometer', 'meter');
      expect(result).toBe(1500);
    });
    it('should convert yards to feet', () => {
      const result = convert(1, 'yard', 'foot');
      expect(result).toBeCloseTo(3);
    });
    it('should convert inches to centimeters', () => {
      const result = convert(1, 'inch', 'centimeter');
      expect(result).toBeCloseTo(2.54);
    });
    it('should convert miles to kilometers', () => {
      const result = convert(1, 'mile', 'kilometer');
      expect(result).toBeCloseTo(1.60934);
    });
    it('should convert feet to meters', () => {
      const result = convert(1, 'foot', 'meter');
      expect(result).toBeCloseTo(0.3048);
    });
  });

  describe('mass conversions', () => {
    it('should convert grams to kilograms', () => {
      const result = convert(1000, 'gram', 'kilogram');
      expect(result).toBe(1);
    });
    it('should convert kilograms to grams', () => {
      const result = convert(2, 'kilogram', 'gram');
      expect(result).toBe(2000);
    });
    it('should convert pounds to ounces', () => {
      const result = convert(1, 'pound', 'ounce');
      expect(result).toBeCloseTo(16);
    });
    it('should convert ounces to grams', () => {
      const result = convert(1, 'ounce', 'gram');
      expect(result).toBeCloseTo(28.3495);
    });
    it('should convert carats to grams', () => {
      const result = convert(5, 'carat', 'gram');
      expect(result).toBeCloseTo(1);
    });
    it('should convert milligrams to grams', () => {
      const result = convert(1000, 'milligram', 'gram');
      expect(result).toBe(1);
    });
  });

  describe('temperature conversions', () => {
    it('should convert Celsius to Fahrenheit', () => {
      const result = convert(0, 'celsius', 'fahrenheit');
      expect(result).toBeCloseTo(32);
    });
    it('should convert Fahrenheit to Celsius', () => {
      const result = convert(32, 'fahrenheit', 'celsius');
      expect(result).toBeCloseTo(0);
    });
    it('should convert Kelvin to Celsius', () => {
      const result = convert(273.15, 'kelvin', 'celsius');
      expect(result).toBeCloseTo(0);
    });
    it('should convert Celsius to Kelvin', () => {
      const result = convert(0, 'celsius', 'kelvin');
      expect(result).toBeCloseTo(273.15);
    });
  });

  describe('time conversions', () => {
    it('should convert seconds to minutes', () => {
      const result = convert(120, 'second', 'minute');
      expect(result).toBe(2);
    });
    it('should convert minutes to seconds', () => {
      const result = convert(2, 'minute', 'second');
      expect(result).toBe(120);
    });
    it('should convert hours to minutes', () => {
      const result = convert(1, 'hour', 'minute');
      expect(result).toBe(60);
    });
    it('should convert minutes to hours', () => {
      const result = convert(120, 'minute', 'hour');
      expect(result).toBe(2);
    });
  });

  describe('velocity conversions', () => {
    it('should convert meters per second to kilometers per hour', () => {
      const result = convert(10, 'meter_per_second', 'kilometer_per_hour');
      expect(result).toBeCloseTo(36);
    });
    it('should convert kilometers per hour to meters per second', () => {
      const result = convert(36, 'kilometer_per_hour', 'meter_per_second');
      expect(result).toBeCloseTo(10);
    });
    it('should convert miles per hour to feet per second', () => {
      const result = convert(60, 'mile_per_hour', 'foot_per_second');
      expect(result).toBeCloseTo(88);
    });
  });

  describe('volume conversions', () => {
    it('should convert liters to milliliters', () => {
      const result = convert(1, 'liter', 'milliliter');
      expect(result).toBeCloseTo(1000);
    });
    it('should convert milliliters to liters', () => {
      const result = convert(1000, 'milliliter', 'liter');
      expect(result).toBe(1);
    });
    it('should convert cubic meters to cubic centimeters', () => {
      const result = convert(1, 'cubic_meter', 'cubic_centimeter');
      expect(result).toBe(1e6);
    });
  });

  describe('date and time conversions', () => {
    it('should convert days to hours', () => {
      const result = convert(1, 'day', 'hour');
      expect(result).toBe(24);
    });
    it('should convert hours to seconds', () => {
      const result = convert(1, 'hour', 'second');
      expect(result).toBe(3600);
    });
    it('should convert weeks to days', () => {
      const result = convert(1, 'week', 'day');
      expect(result).toBe(7);
    });
  });

  it('applies rounding with precision', () => {
    const result = convert(123.4567, 'meter', 'kilometer', { precision: 2 });
    // 123.4567 m = 0.1234567 km, rounded to 2 decimals = 0.12
    expect(result).toBeCloseTo(0.12);
  });

  it('applies rounding with specified method', () => {
    const result = convert(123.4567, 'meter', 'kilometer', {
      precision: 1,
      rounding: 'floor',
    });
    // 123.4567 m = 0.1234567 km, floored to 1 decimal = 0.1
    expect(result).toBe(0.1);
  });

  it('throws error for unsupported category', () => {
    // @ts-expect-error
    expect(() => convert(1, 'foo', 'bar')).toThrow(
      `Conversion from foo to bar is not supported.`
    );
  });

  it('should not be able to convert to the same unit', () => {
    // @ts-expect-error
    const result = convert(100, 'gram', 'gram');
    expect(result).toBe(100);
  });

  describe('alias support', () => {
    it('should work with length aliases', () => {
      const result = convert(1000, 'm', 'km');
      expect(result).toBe(1);
    });

    it('should work with mass aliases', () => {
      const result = convert(1000, 'g', 'kg');
      expect(result).toBe(1);
    });

    it('should work with temperature aliases', () => {
      const result = convert(0, '°C', '°F');
      expect(result).toBeCloseTo(32);
    });

    it('should work with mixed aliases and actual unit names', () => {
      const result = convert(1000, 'm', 'kilometer');
      expect(result).toBe(1);
    });

    it('should work with time aliases', () => {
      const result = convert(120, 's', 'min');
      expect(result).toBe(2);
    });

    it('should work with velocity aliases', () => {
      const result = convert(10, 'm/s', 'km/h');
      expect(result).toBeCloseTo(36);
    });

    it('should work with volume aliases', () => {
      const result = convert(1000, 'ml', 'l');
      expect(result).toBe(1);
    });
  });
});
