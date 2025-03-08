export const length = {
    mm: {
        scale: 1e3
    },
    cm: {
        scale: 1e2
    },
    m: {
        scale: 1
    },
    km: {
        scale: 1e-3
    }
}

export type Length = keyof typeof length;
