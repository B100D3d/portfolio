import { useCallback, useEffect, useState } from "react"
import { random } from "@/utils"

const getRandomQuote = (quotes: Array<Quote>) => {
    return quotes[random(quotes.length)]
}

const useQuote = (interval: number) => {
    const [quote, setQuote] = useState<Quote>()

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
        title: <span>Title</span>,
        text: <span>Aaaa</span>,
    },
    {
        key: "dwdfwdf",
        title: <span>Title 2</span>,
        text: <span>Aaaa 2</span>,
    },
]
