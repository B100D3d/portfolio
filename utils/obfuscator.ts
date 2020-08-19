import { random, range } from "@/utils/index"

class Bit {
    private static Decoded = -1

    private value: number

    constructor(value: number) {
        this.value = value
    }

    isEncoded = (): boolean => this.value >= 0

    decode = () => (this.value = Bit.Decoded)
}

type Bitmap = Array<Bit>

export default class Obfuscator {
    private value = ""
    private chars = ""
    bitmap: Bitmap = []

    constructor(text: string, chars: string) {
        this.value = text
        this.chars = chars
        this.init()
    }

    init(): void {
        this.bitmap = [...Array(this.value.length).keys()].map(
            (key) => new Bit(key)
        )
    }

    write(): string {
        return this.value
            .split("")
            .map((char, i) =>
                this.bitmap[i].isEncoded() ? this.getRandomChar() : char
            )
            .join("")
    }

    decay(count = 1): this {
        range(count).forEach(() => {
            const encodedBits = this.bitmap.filter((bit) => bit.isEncoded())
            encodedBits[random(encodedBits.length)]?.decode()
        })
        return this
    }

    private getRandomChar(): string {
        return this.chars[random(this.chars.length)]
    }
}
