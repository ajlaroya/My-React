import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Quiet Kids Club</title>
        <meta name="description" content="apparel for the introvert" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <Navbar />
        <h1 className="font-polysans text-5xl tracking-tight mt-5">
          <a href="/">Quiet Kids Club</a>
        </h1>

      </main>

      <footer className="">
      </footer>
    </div>
  )
}
