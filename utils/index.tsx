export const range = (from: number, to?: number, step = 1): Array<number> => {
    if (!to) {
        ;[from, to] = [0, from]
    }
    const size = to - from
    return [...Array(size).keys()].map((k) => from + k * step)
}

export const timeout = (ms: number) => new Promise((r) => setTimeout(r, ms))
