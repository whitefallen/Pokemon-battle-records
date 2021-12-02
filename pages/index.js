import Head from 'next/head'
import Battle from "./battles/battles";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PokeManagement</title>
        <meta name="description" content="Pokemon App that lets you keep track of your battles, and your teams" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Battle/>
      </main>

      <footer >

      </footer>
    </div>
  )
}
