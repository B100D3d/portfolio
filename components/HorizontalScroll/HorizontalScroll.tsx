import useScrollByBlock from "@hooks/useScrollByBlock"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { maxBlockIndex } from "@redux/actions/scroll"
import { currentBlockIndexSelector } from "@redux/selectors/scroll"
import { scroll, scrollSmooth } from "@utils"
import useWindowSize from "@hooks/useWindowSize"

interface HorizontalScrollProps {
    children: React.ReactNode
}

const HorizontalScroll: React.FunctionComponent<HorizontalScrollProps> = ({
    children,
}) => {
    const windowSize = useWindowSize()
    const { next, prev, scrollValue } = useScrollByBlock()
    const currentBlockIndex = useSelector(currentBlockIndexSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(maxBlockIndex(React.Children.count(children) - 1))
    }, [])

    useEffect(() => {
        scrollSmooth(scrollValue)
    }, [currentBlockIndex])

    useEffect(() => {
        scroll(scrollValue)
    }, [windowSize])

    useEffect(() => {
        const touch = { x: 0, y: 0 }
        let delta = 0
        const handleScroll = (e: WheelEvent) => {
            if (e.deltaX > 0 || e.deltaY > 0) {
                next()
            } else {
                prev()
            }
        }
        const handleTouch = (e: TouchEvent) => {
            touch.x = e.touches[0].pageX
            touch.y = e.touches[0].pageY
        }
        const handleTouchMove = (e: TouchEvent) => {
            if (
                (e.touches[0].pageX < touch.x &&
                    touch.x - e.touches[0].pageX > 50) ||
                (e.touches[0].pageY < touch.y &&
                    touch.y - e.touches[0].pageY > 50)
            ) {
                delta = 1
            }
            if (
                (e.touches[0].pageX > touch.x &&
                    e.touches[0].pageX - touch.x > 50) ||
                (e.touches[0].pageY > touch.y &&
                    e.touches[0].pageY - touch.y > 50)
            ) {
                delta = -1
            }
        }
        const handleTouchEnd = () => {
            if (delta === 1) next()
            if (delta === -1) prev()
            delta = 0
        }
        document.addEventListener("wheel", handleScroll)
        document.addEventListener("touchstart", handleTouch)
        document.addEventListener("touchmove", handleTouchMove)
        document.addEventListener("touchend", handleTouchEnd)
        return () => {
            document.removeEventListener("wheel", handleScroll)
            document.removeEventListener("touchstart", handleTouch)
            document.removeEventListener("touchmove", handleTouchMove)
            document.removeEventListener("touchend", handleTouchEnd)
        }
    }, [])

    return (
        <>
            {React.Children.map(children, (child, i) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        animate: i === currentBlockIndex,
                    })
                }
            })}
        </>
    )
}

export default HorizontalScroll
