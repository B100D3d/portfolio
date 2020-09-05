import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import MainBlock from "@components/MainBlock/MainBlock"
import Header from "@components/Header/Header"
import Logo from "@components/Logo/Logo"
import Head from "@components/Head/Head"
import WorksBlock from "@components/WorksBlock/WorksBlock"
import HorizontalScroll from "@components/HorizontalScroll/HorizontalScroll"
import { detectMobile } from "@utils"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { pageLoaded, setMobile } from "@redux/actions/main"
import AboutBlock from "@components/AboutBlock/AboutBlock"

export const getServerSideProps: GetServerSideProps = async (context) => {
    const isMobile = detectMobile(context.req.headers["user-agent"])
    return {
        props: {
            isMobile,
        },
    }
}

type MainPageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const MainPage: React.FunctionComponent<MainPageProps> = ({ isMobile }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setMobile(isMobile))
        dispatch(pageLoaded())
    }, [])

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
                <AboutBlock id="about-block" />
            </HorizontalScroll>
        </>
    )
}
export default MainPage
