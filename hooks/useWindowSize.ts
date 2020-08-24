import { useLayoutEffect, useState } from "react"

interface WindowSize {
    width: number
    height: number
}

const getSize = (): WindowSize => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
})

const useWindowSize = (): WindowSize => {
    const [size, setSize] = useState<WindowSize>({
        width: 0,
        height: 0,
    })

    useLayoutEffect(() => {
        setSize(getSize())
        const resize = () => setSize(getSize())
        window.addEventListener("resize", resize)
        return () => window.removeEventListener("resize", resize)
    }, [])

    return size
}

export default useWindowSize
