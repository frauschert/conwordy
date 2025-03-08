export const velocity = {
    // SI base unit
    "m/s": {
        scale: 1
    },
    // Common units
    "km/h": {
        scale: 3.6
    },
    // Maritime
    "kn": {
        scale: 1.944
    },
    // Imperial
    "mph": {
        scale: 2.237
    }
}

export type Velocity = keyof typeof velocity;