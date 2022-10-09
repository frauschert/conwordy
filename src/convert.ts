const units = {
    mm: {
        scale: 1
    },
    m: {
        scale: 1e-3
    }
}

type Unit = keyof typeof units;

export function convert(value: number, source: Unit, target: Unit): number {
    return value / units[source].scale * units[target].scale;
}

export default convert;