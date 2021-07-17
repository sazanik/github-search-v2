import React from "react";
import {Container, Spinner} from "react-bootstrap";
import {Card} from "../components/Card";
import {useGithub} from "../context/github/GithubState";


export const Home = () => {
  const {users, loading} = useGithub()

  return (
    <div className="Home">

      <Container>
        <div className="row mt-4">
          {loading
            ? <Spinner animation="border" className='ms-3'/>
            : users.map(user => (
              <div className="col-sm-2 mb-4" key={user.id}>
                <Card user={user}/>
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  )
}

