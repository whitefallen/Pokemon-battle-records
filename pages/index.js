import Head from 'next/head'
import Battle from "./battles/battles";
import AddBattle from "./action/addBattle";
import {useState, useEffect} from 'react';
import {useUser} from "@auth0/nextjs-auth0";
import {Nav, FormControl, InputGroup, Row} from "react-bootstrap";

export default function Home() {
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/getBattles');
      const data = await res.json();
      setBattles(data);
      return data;
    }
    fetchData().then(r => console.log("fetched"));

  }, [])

  const [battles, setBattles] = useState(null)
  return (
    <div>
      <Head>
        <title>PokeManagement</title>
        <meta name="description" content="Pokemon App that lets you keep track of your battles, and your teams" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {user && <>
          <Battle battles={battles}/>
          <Nav.Link href={"/action/addBattle"}>
            New Battle
          </Nav.Link>
          <Nav.Link href="/api/auth/logout">
            Logout
          </Nav.Link>
          </>
        }
        {!user && <>
            <a href="/api/auth/login">Login</a>
          </>
        }
      </main>

      <footer>

      </footer>
    </div>
  )
}
