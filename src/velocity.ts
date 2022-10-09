export const velocity = {
    "m/s": {
        scale: 1
    },
    "km/h": {
        scale: 3.6
    },
    kn: {
        scale: 1.944
    },
    mph: {
        scale: 2.237
    },
    
}

export type Velocity = keyof typeof velocity;