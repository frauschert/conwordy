const s = {
    scale: 1
}
const min = {
    scale: (s.scale / 60)
}
const h = {
    scale: (s.scale / 3600)
}


export const time = {
    s, 
    min, 
    h
}

export type Time = keyof typeof time;