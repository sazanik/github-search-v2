import React from "react";
import {Container, Spinner} from "react-bootstrap";
import {Card} from "../components/Card";
import {useGithub} from "../context/github/GithubState";


export const Home = () => {
  const {users, loading} = useGithub()

  return (
    <div className="Home">

      <Container>
        <h1>Home page</h1>
        <div className="row">
          {loading
            ? <Spinner animation="border" className='ms-3'/>
            : users.map(user => (
              <div className="col-sm-4 mb-4" key={user.id}>
                <Card user={user}/>
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  )
}

