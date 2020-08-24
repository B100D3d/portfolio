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
    return Math.floor(Math.random() * to + from)
}

export const timeout = (ms: number) => new Promise((r) => setTimeout(r, ms))

export const scroll = (to: number, smooth = false) => {
    document.body.scrollTo({
        top: 0,
        left: to,
        behavior: smooth ? "smooth" : "auto",
    })
}

export const scrollSmooth = (to: number) => {
    scroll(to, true)
}
