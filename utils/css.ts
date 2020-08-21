export const registerCSSColorProperty = (
    name: string,
    initialValue: string
): boolean => {
    const hasBrowserSupport =
        typeof window !== "undefined"
            ? typeof window.CSS.registerProperty === "function"
            : false
    const prefersReducedMotion =
        typeof window === "undefined"
            ? { matches: false }
            : window.matchMedia("(prefers-reduced-motion: no-preference)")
    const isEnabled = hasBrowserSupport && prefersReducedMotion.matches

    if (isEnabled) {
        try {
            CSS.registerProperty({
                name,
                initialValue,
                syntax: "<color>",
                inherits: false,
            })
        } catch {}
    }
    return isEnabled
}
