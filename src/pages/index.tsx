import Head from "next/head";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Al-Matsurat Online</title>
                <meta
                    name="description"
                    content="Website Al-Matsurat Online - Dzikir Pagi dan Petang"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Al-Matsurat</h1>
        </div>
    );
}
