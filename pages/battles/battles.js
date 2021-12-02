import React from 'react';

const battles = {
  "battles":[
    {
      "player1":{
        "name":"Thomas",
        "pokemons":[
          "Togepi",
          "Togepi"
        ]
      },
      "player2":{
        "name":"Daniel",
        "pokemons":[
          "Pikachu",
          "Pikachu"
        ]
      }
    },
    {
      "player1":{
        "name":"Larissa",
        "pokemons":[
          "Evoli",
          "Evoli"
        ]
      },
      "player2":{
        "name":"Thomas",
        "pokemons":[
          "Pikachu",
          "Pikachu"
        ]
      }
    }
  ]
}

export default function Battle () {
  return battles.battles.map((battle, index) => {
    return <div key={index} className={"grid grid-cols-2 gap-4 my-8"}>
      <div>
        {battle.player1.name}
      </div>
      <div>
        {battle.player2.name}
      </div>
      <div>
        {battle.player1.pokemons.map((e, index) => <span key={index}>{e} </span>)}
      </div>
      <div>
        {battle.player2.pokemons.map((e, index) => <span key={index}>{e} </span>)}
      </div>
    </div>
  })
}
