export const mass = {
    mg: {
        scale: 1
    },
    g: {
        scale: 1e-3
    },
    kg: {
        scale: 1e-6
    }
}

export type Mass = keyof typeof mass;