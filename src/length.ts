export const length = {
    mm: {
        scale: 1
    },
    cm: {
        scale: 1e-1
    },
    m: {
        scale: 1e-3
    },
    km: {
        scale: 1e-6
    }
}

export type Length = keyof typeof length;
