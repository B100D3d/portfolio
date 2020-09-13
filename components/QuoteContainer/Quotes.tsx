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
    {
        key: "7nKJndKJSN",
        title: <span style={{ color: "#ccd8d8" }}>Geralt of Rivia</span>,
        text: (
            <span>
                <span style={{ color: "#e62430" }}>Evil</span> is{" "}
                <span style={{ color: "#e62430" }}>Evil</span>. Lesser, greater,
                middling, makes no difference. The degree is arbitrary, the
                definitions blurred. If I'm to choose between one{" "}
                <span style={{ color: "#e62430" }}>Evil</span> and another, I'd
                rather{" "}
                <span style={{ color: "#5689a0", textTransform: "uppercase" }}>
                    not choose at all
                </span>
            </span>
        ),
    },
    {
        key: "Kiu2enf92ue",
        title: (
            <span>
                <span style={{ color: "#b47633" }}>
                    The Fellowship of the Ring
                </span>
                , J.R.R. Tolkein
            </span>
        ),
        text: (
            <span>
                All we have to decide is what to do with the{" "}
                <span style={{ color: "#4A69FF", textTransform: "uppercase" }}>
                    time
                </span>{" "}
                that is given us.
            </span>
        ),
    },
]

export default QUOTES
