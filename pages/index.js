import Head from "next/head";

import Feed from "../components/Feed";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";

import { getProviders, getSession, useSession } from "next-auth/react";

export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession();

  if (!session) return <Login providers={providers} />;

  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black min-h-screen flex max-width-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  );
  const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  );

  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}
