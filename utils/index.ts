export const range = (from: number, to?: number, step = 1): Array<number> => {
    if (!to) {
        ;[from, to] = [0, from]
    }
    const size = Math.floor((to - from) / step)
    return [...Array(size).keys()].map((k) => from + k * step)
}

export const random = (from: number, to?: number): number => {
    if (!to) {
        ;[from, to] = [0, from]
    }
    to -= from
    return Math.floor(Math.random() * to + from)
}

export const timeout = (ms: number) => new Promise((r) => setTimeout(r, ms))

export const detectMobile = (userAgent?: string) => {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
    ]

    return toMatch.some((reg) => {
        return userAgent?.match(reg)
    })
}
