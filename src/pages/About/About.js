import React from "react";
import {Container} from "react-bootstrap";

export const About = () => {
  return (
    <Container>
      <div className="jumbotron">
        <h1 className="display-4">GitHub Search</h1>
        <p className="lead">Version 2.0</p>
        <hr className="my-4"/>
        <p>App works on React with Hooks and Routing.</p>
      </div>
    </Container>
  )
}
