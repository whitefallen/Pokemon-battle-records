import React from 'react';
import {Col, Row} from "react-bootstrap";
import Image from "next/image";
import {GiCrossedSwords} from "react-icons/gi";


export default function Battle ({battles}) {
  if(battles === null) return null;
  return battles.map((battle, index) => {
    return <div key={index} >
      <Row>
        <Col>
          <Row>
            <Col>
              {battle.player1.player}
            </Col>
            <Col>
              Won: {`${battle.player1.won}`}
            </Col>
          </Row>
        </Col>
        <Col md={"1"}>

        </Col>
        <Col>
          <Row>
            <Col>
              {battle.player2.player}
            </Col>
            <Col>
              Won: {`${battle.player2.won}`}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            {battle.player1.pokemons.map((e, index) => <Col key={index}>
              <Image
                src={`/pk_sprites/sprites/pokemon/${e.id}.png`}
                width={"200px"}
                height={"200px"}
                alt={`${e.id}.png`}
              />
            </Col>)}
          </Row>
        </Col>
        <Col md={"auto"}>
          <GiCrossedSwords size={100}/>
        </Col>
        <Col>
          <Row>
            {battle.player2.pokemons.map((e, index) => <Col key={index}>
              <Image
                src={`/pk_sprites/sprites/pokemon/${e.id}.png`}
                width={"200px"}
                height={"200px"}
                alt={`${e.id}.png`}
              />
            </Col>)}
          </Row>
        </Col>
      </Row>
    </div>
  })
}
