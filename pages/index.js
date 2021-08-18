import Head from "next/head";

export default function Home() {
  return (
    <div className="w-full h-screen font-body">
      <Head>
        <title>Open In New Tab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full flex items-center justify-center">
        <div className=" flex flex-col items-center space-y-8 ">
          <div className="w-44 -mr-3">
            <img src="/ointrealsvg.svg" alt="ointlogo" />
          </div>
          <button className="bg-black px-6 py-3 text-white">buy now</button>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
