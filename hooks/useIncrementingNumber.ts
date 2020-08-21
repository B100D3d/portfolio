import { useEffect, useState } from "react"

interface useIncrementingNumberProps {
    interval: number
    min?: number
    mod?: number
}

type useIncrementingNumberHook = (props: useIncrementingNumberProps) => number

const useIncrementingNumber: useIncrementingNumberHook = ({
    interval,
    min = 0,
    mod = 1,
}) => {
    const [number, setNumber] = useState(min)

    useEffect(() => {
        const increment = () =>
            setNumber((prevNumber) => (prevNumber + 1) % mod)
        const id = setInterval(increment, interval)
        return () => clearInterval(id)
    }, [interval])

    return number
}

export default useIncrementingNumber
