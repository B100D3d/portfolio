import Head from "next/head"
import MainBlock from "@/components/MainBlock/MainBlock"

const MainPage = () => {
    return (
        <>
            <Head>
                <title>devourer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainBlock />
        </>
    )
}

export default MainPage
