import animateScrollTo from "animated-scroll-to"
import useScrollByBlock from "@hooks/useScrollByBlock"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { maxBlockIndex } from "@redux/actions/scroll"
import { currentBlockIndexSelector } from "@redux/selectors/scroll"
import { timeout } from "@utils"

interface HorizontalScrollProps {
    children: React.ReactNode
}

export const scrollSmooth = (to: number) => {
    const animationTime = document.documentElement.clientWidth < 768 ? 500 : 700
    const speed = (animationTime / document.documentElement.clientWidth) * 1000
    animateScrollTo([to, null], {
        elementToScroll: document.body,
        cancelOnUserAction: false,
        speed: speed,
        easing: (t) => t * t * (3 - 2 * t),
    })
}

const FIRST_ANIMATION_TIME = 6000

const HorizontalScroll: React.FunctionComponent<HorizontalScrollProps> = ({
    children,
}) => {
    const { next, prev, scrollValue } = useScrollByBlock()
    const currentBlockIndex = useSelector(currentBlockIndexSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(maxBlockIndex(React.Children.count(children) - 1))
    }, [])

    useEffect(() => {
        scrollSmooth(scrollValue)
    }, [scrollValue])

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
        timeout(FIRST_ANIMATION_TIME).then(() => {
            document.addEventListener("wheel", handleScroll)
            document.addEventListener("touchstart", handleTouch)
            document.addEventListener("touchmove", handleTouchMove)
            document.addEventListener("touchend", handleTouchEnd)
        })
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
