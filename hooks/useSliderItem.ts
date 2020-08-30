import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { random } from "@utils"

interface useSliderItemSettings {
    interval?: number
    randomFirst?: boolean
}

interface ReturnValue<T> {
    item: T
    next: () => void
    prev: () => void
}

const useSliderItem = <T>(
    items: Array<T>,
    settings?: useSliderItemSettings
): ReturnValue<T> => {
    const [index, setIndex] = useState(0)
    const item = useMemo(() => items[index], [items, index])
    const timeoutId = useRef<NodeJS.Timeout>()

    const next = useCallback(() => {
        setIndex((index + 1) % items.length)
    }, [index, items])

    const prev = useCallback(() => {
        setIndex(Math.abs((index - 1) % items.length))
    }, [index, items])

    useEffect(() => {
        if (settings?.randomFirst) setIndex(random(items.length))
    }, [])

    useEffect(() => {
        if (settings?.interval) {
            timeoutId.current = setTimeout(next, settings?.interval)
        }
        return () => timeoutId.current && clearTimeout(timeoutId.current)
    }, [index])

    return { item, next, prev }
}

export default useSliderItem
