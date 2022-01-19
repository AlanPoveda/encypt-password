import type { NextPage } from "next";
import Head from "next/head";
import { InputPassword } from "../components/InputPassword";


const Home: NextPage = () => {
    return (
     <>
            <Head>
                <title>Encrypt your password 🔒</title>
                <meta name="title" content="Encrypt your password 🔒" />
                <meta
                    name="description"
                    content="Encrypt your password, make the your password the most strong possible."
                />

                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://encypt-password.vercel.app/"
                />
                <meta property="og:title" content="Encrypt your password 🔒" />
                <meta
                    property="og:description"
                    content="Encrypt your password, make the your password the most strong possible."
                />
                <meta property="og:image" content="" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://encypt-password.vercel.app/"
                />
                <meta
                    property="twitter:title"
                    content="Encrypt your password 🔒"
                />
                <meta
                    property="twitter:description"
                    content="Encrypt your password, make the your password the most strong possible."
                />
                <meta property="twitter:image" content="" />   
            </Head>
            
            
            <InputPassword />
            </>
    );
};

export default Home;
