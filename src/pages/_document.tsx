import Document, { Html, Head, Main, NextScript } from "next/document";
import { GoogleAd } from "../components/GoogleAdsComponent";

export default class App extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <GoogleAd />
                    <script
                        async
                        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
                        crossOrigin="anonymous"
                    />

                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />

                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto:wght@400;700;900&display=swap"
                        rel="stylesheet"
                    />

                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
