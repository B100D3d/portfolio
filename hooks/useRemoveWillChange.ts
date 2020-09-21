import { useEffect } from "react"

type useRemoveWillChangeHook = <T extends HTMLElement>(
    element: T,
    willChangeClassName: string,
    event?: keyof GlobalEventHandlersEventMap
) => void

const useRemoveWillChange: useRemoveWillChangeHook = (
    element,
    willChangeClassName,
    event = "transitionend"
) => {
    const handleTransitionEnd = () => {
        element.classList.remove(willChangeClassName)
        element.removeEventListener(event, handleTransitionEnd)
    }

    useEffect(() => {
        if (element) {
            element.addEventListener(event, handleTransitionEnd)
            return () => element.removeEventListener(event, handleTransitionEnd)
        }
    }, [element])
}

export default useRemoveWillChange
