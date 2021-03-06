import { AppProps } from "next/app"
import "styles/globals.sass"
import { Provider } from "react-redux"
import store from "@redux/store"

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
