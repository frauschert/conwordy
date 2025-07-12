import { convert } from "./convert";

describe("convert", () => {
  describe("length conversions", () => {
    it("should convert meters to kilometers", () => {
      const result = convert(1500, "length").from("meter").to("kilometer");
      expect(result).toBeCloseTo(1.5);
    });
    it("should convert kilometers to meters", () => {
      const result = convert(1.5, "length").from("kilometer").to("meter");
      expect(result).toBe(1500);
    });
    it("should convert yards to feet", () => {
      const result = convert(1, "length").from("yard").to("foot");
      expect(result).toBeCloseTo(3);
    });
    it("should convert inches to centimeters", () => {
      const result = convert(1, "length").from("inch").to("centimeter");
      expect(result).toBeCloseTo(2.54);
    });
    it("should convert miles to kilometers", () => {
      const result = convert(1, "length").from("mile").to("kilometer");
      expect(result).toBeCloseTo(1.60934);
    });
    it("should convert feet to meters", () => {
      const result = convert(1, "length").from("foot").to("meter");
      expect(result).toBeCloseTo(0.3048);
    });
  });

  describe("mass conversions", () => {
    it("should convert grams to kilograms", () => {
      const result = convert(1000, "mass").from("gram").to("kilogram");
      expect(result).toBe(1);
    });
    it("should convert kilograms to grams", () => {
      const result = convert(2, "mass").from("kilogram").to("gram");
      expect(result).toBe(2000);
    });
    it("should convert pounds to ounces", () => {
      const result = convert(1, "mass").from("pound").to("ounce");
      expect(result).toBeCloseTo(16);
    });
    it("should convert ounces to grams", () => {
      const result = convert(1, "mass").from("ounce").to("gram");
      expect(result).toBeCloseTo(28.3495);
    });
    it("should convert carats to grams", () => {
      const result = convert(5, "mass").from("carat").to("gram");
      expect(result).toBeCloseTo(1);
    });
    it("should convert milligrams to grams", () => {
      const result = convert(1000, "mass").from("milligram").to("gram");
      expect(result).toBe(1);
    });
  });

  describe("temperature conversions", () => {
    it("should convert Celsius to Fahrenheit", () => {
      const result = convert(0, "temperature").from("celsius").to("fahrenheit");
      expect(result).toBeCloseTo(32);
    });
    it("should convert Fahrenheit to Celsius", () => {
      const result = convert(32, "temperature")
        .from("fahrenheit")
        .to("celsius");
      expect(result).toBeCloseTo(0);
    });
    it("should convert Kelvin to Celsius", () => {
      const result = convert(273.15, "temperature")
        .from("kelvin")
        .to("celsius");
      expect(result).toBeCloseTo(0);
    });
    it("should convert Celsius to Kelvin", () => {
      const result = convert(0, "temperature").from("celsius").to("kelvin");
      expect(result).toBeCloseTo(273.15);
    });
  });

  describe("time conversions", () => {
    it("should convert seconds to minutes", () => {
      const result = convert(120, "time").from("second").to("minute");
      expect(result).toBe(2);
    });
    it("should convert minutes to seconds", () => {
      const result = convert(2, "time").from("minute").to("second");
      expect(result).toBe(120);
    });
    it("should convert hours to minutes", () => {
      const result = convert(1, "time").from("hour").to("minute");
      expect(result).toBe(60);
    });
    it("should convert minutes to hours", () => {
      const result = convert(120, "time").from("minute").to("hour");
      expect(result).toBe(2);
    });
  });

  describe("velocity conversions", () => {
    it("should convert meters per second to kilometers per hour", () => {
      const result = convert(10, "velocity")
        .from("meter_per_second")
        .to("kilometer_per_hour");
      expect(result).toBeCloseTo(36);
    });
    it("should convert kilometers per hour to meters per second", () => {
      const result = convert(36, "velocity")
        .from("kilometer_per_hour")
        .to("meter_per_second");
      expect(result).toBeCloseTo(10);
    });
    it("should convert miles per hour to feet per second", () => {
      const result = convert(60, "velocity")
        .from("mile_per_hour")
        .to("foot_per_second");
      expect(result).toBeCloseTo(88);
    });
  });

  it("applies rounding with precision", () => {
    const result = convert(123.4567, "length", { precision: 2 })
      .from("meter")
      .to("kilometer");
    // 123.4567 m = 0.1234567 km, rounded to 2 decimals = 0.12
    expect(result).toBeCloseTo(0.12);
  });

  it("applies rounding with specified method", () => {
    const result = convert(123.4567, "length", {
      precision: 1,
      rounding: "floor",
    })
      .from("meter")
      .to("kilometer");
    // 123.4567 m = 0.1234567 km, floored to 1 decimal = 0.1
    expect(result).toBe(0.1);
  });

  it("throws error for unsupported category", () => {
    // @ts-expect-error
    expect(() => convert(1, "unsupported").from("foo").to("bar")).toThrow(
      "Unsupported category: unsupported"
    );
  });

  it("should not be able to convert to the same unit", () => {
    // @ts-expect-error
    const result = convert(100, "mass").from("gram").to("gram");
    expect(result).toBe(100);
  });
});
