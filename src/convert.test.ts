import convert from "./convert";

describe('Unit conversions', () => {
    test('should convert length units correctly', () => {
        expect(convert(1000, 'm', 'km')).toBe(1);
    });

    test('should convert mass units correctly', () => {
        expect(convert(1000, 'g', 'kg')).toBe(1);
    });

    test('should convert velocity units correctly', () => {
        expect(convert(1, 'm/s', 'km/h')).toBe(3.6);
    });

    test('should convert time units correctly', () => {
        expect(convert(60, 's', 'min')).toBe(1);
        expect(convert(1, 'min', 's')).toBe(60);
    });

    test('should convert between different units correctly', () => {
        expect(convert(1, 'km/h', 'm/s')).toBe(0.2777777777777778);
        expect(convert(1, 'kn', 'mph')).toBe(1.15078);
    });
});