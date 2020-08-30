import { random, range } from "@utils/index"

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
    bitmap: Bitmap = []

    constructor(
        public readonly text: string,
        public readonly chars = "█▓▒░█▓▒░█▓▒░<>/"
    ) {
        this.init()
    }

    init(): this {
        this.bitmap = [...Array(this.text.length).keys()].map(
            (key) => new Bit(key)
        )
        return this
    }

    write(): string {
        return this.text
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
