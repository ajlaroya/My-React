import Head from 'next/head'
import Featured from '../components/Featured';

import Landing from '../components/Landing';
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="font-avenir flex flex-col w-full min-h-screen overflow-x-hidden">
      <Head>
        <title>arvoblooms</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌺</text></svg>"></link>
      </Head>

      <Navbar />
      <Landing />
      <Featured />
    </div>
  );
}
