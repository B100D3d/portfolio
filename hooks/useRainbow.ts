import { range } from "@utils"
import { useMemo } from "react"
import useIncrementingNumber from "@hooks/useIncrementingNumber"

interface useRainbowProps {
    interval?: number
    colors: Array<string>
    visibleColorsCount?: number
}

type useRainbowHook = (props: useRainbowProps) => Array<string>

const useRainbow: useRainbowHook = ({
    interval = 1000,
    colors,
    visibleColorsCount = 3,
}) => {
    const paletteSize = useMemo(() => colors.length, [colors])
    const intervalCount = useIncrementingNumber({
        interval,
        mod: paletteSize,
    })

    return range(visibleColorsCount).map(
        (index) => colors[(intervalCount + index) % paletteSize]
    )
}

export default useRainbow
