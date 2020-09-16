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

export const age = () => {
    const MILLISECONDS_IN_YEAR = 1000 * 60 * 60 * 24 * 365
    const currentDate = new Date().getTime()
    const birthday = new Date(2000, 4, 1).getTime()
    return Math.floor((currentDate - birthday) / MILLISECONDS_IN_YEAR)
}

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
