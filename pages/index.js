import Head from 'next/head'
import Battle from "./battles/battles";
import AddBattle from "./action/addBattle";
import {useState} from 'react';
import {useUser} from "@auth0/nextjs-auth0";


export default function Home() {
  const { user, error, isLoading } = useUser();
  const battlesExample = {
    "battles":[
      {
        "player1":{
          "player":"Thomas",
          "pokemons":[
            {"identifier":"Togepi"},
            {"identifier":"Togepi"},
            {"identifier":"Togepi"},
            {"identifier":"Togepi"},
            {"identifier":"Togepi"},
            {"identifier":"Togepi"}
          ],
          "won": false
        },
        "player2":{
          "player":"Daniel",
          "pokemons":[
            {"identifier":"Pikachu"},
            {"identifier":"Pikachu"},
            {"identifier":"Pikachu"},
            {"identifier":"Pikachu"},
            {"identifier":"Pikachu"},
            {"identifier":"Pikachu"}
          ],
          "won": false
        }
      },
      {
        "player1":{
          "player":"Larissa",
          "pokemons":[
            {"identifier":"Evoli"},
            {"identifier":"Evoli"},
            {"identifier":"Evoli"},
            {"identifier":"Evoli"},
            {"identifier":"Evoli"},
            {"identifier":"Evoli"}
          ],
          "won": false
        },
        "player2":{
          "player":"Thomas",
          "pokemons":[
            {"identifier":"Pikachu"},
            {"identifier":"Pikachu"},
            {"identifier":"Pikachu"},
            {"identifier":"Pikachu"},
            {"identifier":"Pikachu"},
            {"identifier":"Pikachu"}
          ],
          "won": false
        }
      }
    ]
  }

  function addBattle(battle) {
    let newBattleDoc = {player1: {}, player2:{}}
    let battleCopy = {...battles};
    battleCopy.battles.push(setValuesOfBattle(newBattleDoc, battle))
    setBattles(battleCopy);
  }

  function setValuesOfBattle(newDoc, battle) {

    //newDoc.player1.player = battle[0].player;
    newDoc.player1.player = user.name;
    newDoc.player2.player = battle[1].player;

    newDoc.player1.pokemons = battle[0].pokemons;
    newDoc.player2.pokemons = battle[1].pokemons;

    newDoc.player1.won = battle[0].won;
    newDoc.player2.won = battle[1].won;
    return newDoc;
  }
  const [battles, setBattles] = useState(battlesExample)
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
          <AddBattle addBattle={addBattle}/>
          <a href="/api/auth/logout">Logout</a>
          </>
        }
        {!user && <>
            <a href="/api/auth/login">Login</a>
          </>
        }
      </main>

      <footer >

      </footer>
    </div>
  )
}
