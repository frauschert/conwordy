import convert from "./convert";

test('', () => {
    expect(convert(1, 'm', 'mm')).toBe(1000)
})