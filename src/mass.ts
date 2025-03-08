export const mass = {
    mg: {
        scale: 1e6
    },
    g: {
        scale: 1e3
    },
    kg: {
        scale: 1
    }
}

export type Mass = keyof typeof mass;