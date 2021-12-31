import Pokemon from '../../data/pokemon.json';
import {Button, Col, FormControl, InputGroup, Row} from "react-bootstrap";
import {Typeahead} from "react-bootstrap-typeahead";
import React from 'react';
import {useState} from 'react';
import {useUser} from "@auth0/nextjs-auth0";
import { useRouter } from 'next/router'


export default function AddBattle () {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const [formData, setFormData] = useState([
    {
      'player': 'Player1',
      'pokemons': [
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      'won': false
    },
    {
      'player': 'Player2',
      'pokemons': [
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      'won': false
    }
  ])

  function handleOnChange(ele, PkmKey, ObjKey) {
    let formObj = [...formData];
    if(ele[0]) {
      formObj[ObjKey].pokemons[PkmKey] = ele[0];
    } else {
      formObj[ObjKey].pokemons[PkmKey] = {};
    }
    setFormData(formObj);
  }

  function handleOnChangePlayerName(ele, ObjKey) {
    let inputObj = [...formData];
    if(ele) {
      inputObj[ObjKey].player = ele;
    } else {
      inputObj[ObjKey].player = `Player${ObjKey}`;
    }
    setFormData(inputObj);
  }
  async function saveBattleToDB(newDoc) {
    await fetch('/api/addBattles', {
      method: 'POST',
      body: JSON.stringify(newDoc)
    }).then(() => {
        router.push('/');
      }
    )
  }

  function addBattle(battle) {
    let newBattleDoc = {player1: {}, player2:{}}
    let newDoc = setValuesOfBattle(newBattleDoc, battle);
    saveBattleToDB(newDoc).then(r => console.log("Saved"));
  }

  function setValuesOfBattle(newDoc, battle) {

    //newDoc.player1.player = battle[0].player;
    newDoc.player1.player = battle[0].player;
    newDoc.player2.player = battle[1].player;

    newDoc.player1.pokemons = battle[0].pokemons;
    newDoc.player2.pokemons = battle[1].pokemons;

    newDoc.player1.won = battle[0].won;
    newDoc.player2.won = battle[1].won;
    // Set CreatedBy
    newDoc.createdBy = user.sub;
    return newDoc;
  }
  if (!user) return <div> No User Loaded</div>;
  return (
    user && (<><Row>
      {formData.map((player,index) => {
        return <Col key={index}><Row>
          <Col>
            {player.player}
          </Col>
          <Col>
            <InputGroup className={"mb-3"}>
              <FormControl
                placeholder={"PlayerName"}
                aria-label={"PlayerName"}
                value={player.player}
                onChange={(input) => {
                  handleOnChangePlayerName(input.target.value, index);
                }}
              />
              <InputGroup.Checkbox aria-label="Won" title={"Won"}/>
            </InputGroup>
          </Col>
        </Row>
          {player.pokemons.map((pkm, indexPkm) => {
            return <Row key={indexPkm}><Col>
              Pokemon #{indexPkm+1}:
            </Col>
              <Col>
                <Typeahead
                  id={"PkmSelect_"+index+"_"+indexPkm}
                  onChange={(selected) => {
                    handleOnChange(selected, indexPkm, index);
                  }}
                  labelKey={"identifier"}
                  options={Pokemon}
                />
              </Col>
            </Row>
          })}
        </Col>
      })}
    </Row>
    <Row>
      <Col>
        <Button variant="dark" onClick={(e) => addBattle(formData)}>Add Battle</Button>
      </Col>
    </Row></>)
  );
}
