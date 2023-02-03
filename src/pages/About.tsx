import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const About: NextPage = () => {
    const hello = api.example.hello.useQuery({ text: "from tRPC" });
    const dogImages = api.example.fetchDogImages.useQuery({ text: "from tRPC" });

    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
                <div>About</div>
            </main>
        </>
    );
};

export default About;