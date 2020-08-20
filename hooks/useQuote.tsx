import { useCallback, useEffect, useState } from "react"
import { random } from "@/utils"

const getRandomQuote = (quotes: Array<Quote>) => {
    return quotes[random(quotes.length)]
}

const useQuote = (interval: number) => {
    const [quote, setQuote] = useState<Quote>(QUOTES[0])

    const handleQuote = useCallback(() => {
        setQuote((prevQuote) => {
            const quotesExceptCurrent = QUOTES.filter(
                (quote) => quote !== prevQuote
            )
            return getRandomQuote(quotesExceptCurrent)
        })
    }, [quote])

    useEffect(() => {
        setQuote(getRandomQuote(QUOTES))
        const id = setInterval(handleQuote, interval)
        return () => clearInterval(id)
    }, [])

    return quote
}

export default useQuote

interface Quote {
    key: string
    title: JSX.Element
    text: JSX.Element
}

const QUOTES: Array<Quote> = [
    {
        key: "ASDewedf",
        title: <span style={{ color: "#F7F272" }}>Albus Dumbledore</span>,
        text: (
            <span>
                It takes a great deal of bravery to stand up to our{" "}
                <span style={{ color: "#FF0000" }}>enemies</span>, but just as
                much to stand up to our{" "}
                <span style={{ color: "#A854A5" }}>friends</span>.
            </span>
        ),
    },
    {
        key: "dwdfwdf",
        title: <span style={{ color: "#535353" }}>Sirius Black</span>,
        text: (
            <span>
                If you want to know what a man’s like, take a good look at how
                he treats his{" "}
                <span style={{ color: "#17F1D7" }}>inferiors</span>, not his{" "}
                <span style={{ color: "#F85C50" }}>equals</span>.
            </span>
        ),
    },
    {
        key: "dsm92j",
        title: (
            <span>
                Dan Brown. <span style={{ color: "#B40A1B" }}>Inferno</span>
            </span>
        ),
        text: (
            <span>
                Nothing is more creative... nor destructive... than a brilliant{" "}
                <span style={{ color: "#00848C", textTransform: "uppercase" }}>
                    mind
                </span>{" "}
                with a <span style={{ color: "#FF905A" }}>purpose</span>.
            </span>
        ),
    },
]
