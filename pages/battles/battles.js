import React from 'react';
import {Col, Row} from "react-bootstrap";


export default function Battle ({battles}) {
  return battles.battles.map((battle, index) => {
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
            {battle.player1.pokemons.map((e, index) => <Col key={index}>{e.identifier} </Col>)}
          </Row>
        </Col>
        <Col>
          <Row>
            {battle.player2.pokemons.map((e, index) => <Col key={index}>{e.identifier} </Col>)}
          </Row>
        </Col>
      </Row>
    </div>
  })
}
