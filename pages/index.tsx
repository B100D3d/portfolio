import MainBlock from "@components/MainBlock/MainBlock"
import Header from "@components/Header/Header"
import Logo from "@components/Logo/Logo"
import Head from "@components/Head/Head"
import WorksBlock from "@components/WorksBlock/WorksBlock"
import HorizontalScroll from "@components/HorizontalScroll/HorizontalScroll"

const MainPage = () => {
    return (
        <>
            <Head>
                <title>devourer</title>
            </Head>
            <Logo />
            <Header />
            <HorizontalScroll>
                <MainBlock id="main-block" />
                <WorksBlock id="works-block" />
                <WorksBlock id="about-block" /> {/*For Test*/}
            </HorizontalScroll>
        </>
    )
}
export default MainPage
