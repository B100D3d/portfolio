import { range, timeout } from "@/utils/index"

export const addChars = async (
    chars: string,
    msToChar: number,
    setter: (value: (prev: string) => string) => void
): Promise<void> => {
    for (const char of chars) {
        await timeout(msToChar)
        setter((prev) => prev + char)
    }
}

export const removeLastChars = async (
    count: number,
    msToChar: number,
    setter: (value: (prev: string) => string) => void
): Promise<void> => {
    for (const _ of range(count)) {
        await timeout(msToChar)
        setter((prev) => prev.slice(0, prev.length - 1))
    }
}
