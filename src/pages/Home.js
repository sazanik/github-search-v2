import React from "react";
import {Container} from "react-bootstrap";
import {Card} from "../components/Card";


export const Home = () => {
  const cards = new Array(20)
    .fill('')
    .map((_, i) => i)
  console.log(cards)

  return (
    <div className="Home">

      <Container>
        <h1>Home page</h1>
        <div className="row">
          {cards.map(card => (
            <div className="col-sm-4 mb-4" key={card}>
              <Card/>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
