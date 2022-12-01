import convert from "./convert";

test('', () => {
    expect(convert(1000, 'm', 'km')).toBe(1)
    expect(convert(1000, 'g', 'kg')).toBe(1)
    expect(convert(1, 'm/s', 'km/h')).toBe(3.6);
    expect(convert(60, 's', 'min')).toBe(1);
    expect(convert(1, 'min', 's')).toBe(60);
})