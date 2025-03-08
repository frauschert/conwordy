export const time = {
    s: {
        scale: 1
    },
    min: {
        scale: 1/60  // 1.67e-2
    },
    h: {
        scale: 1/3600  // 2.78e-4
    }
}

export type Time = keyof typeof time;