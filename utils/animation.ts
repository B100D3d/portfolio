import { range, timeout } from "./index"
import Obfuscator from "@utils/obfuscator"

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

export async function* revealText(
    text: string,
    { duration = 1000, chars = "█▓▒░█▓▒░█▓▒░<>/" }
): AsyncGenerator<string> {
    const obfuscator = new Obfuscator(text, chars)
    const sleep = () => timeout(duration / text.length)

    yield obfuscator.write()
    for (const _ of range(text.length)) {
        await sleep()
        yield obfuscator.decay(1).write()
    }
}
