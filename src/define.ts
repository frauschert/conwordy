export function defineFactorCategory<const Cat extends string>(category: Cat) {
  return function <
    const Defs extends readonly {
      units: readonly [string, ...string[]];
      factor: number;
    }[],
  >(defs: Defs) {
    return defs.map(d => ({
      kind: 'factor' as const,
      category,
      units: d.units,
      factor: d.factor,
    })) as {
      [K in keyof Defs]: {
        readonly kind: 'factor';
        readonly category: Cat;
      } & Defs[K];
    }[number][];
  };
}

export function defineFunctionCategory<const Cat extends string>(
  category: Cat
) {
  return function <
    const Defs extends readonly {
      units: readonly [string, ...string[]];
      toBase: (v: number) => number;
      fromBase: (v: number) => number;
    }[],
  >(defs: Defs) {
    return defs.map(d => ({
      kind: 'function' as const,
      category,
      units: d.units,
      toBase: d.toBase,
      fromBase: d.fromBase,
    })) as {
      [K in keyof Defs]: {
        readonly kind: 'function';
        readonly category: Cat;
      } & Defs[K];
    }[number][];
  };
}
