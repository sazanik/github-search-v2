import React, {useEffect} from "react";
import {Container, Spinner} from "react-bootstrap";
import {useGithub} from "../context/github/GithubState";
import {Link} from "react-router-dom";

export const Profile = ({match}) => {
  const {getUser, getRepos, loading, user, repos} = useGithub()
  const nameUrl = match.params.name

  useEffect(() => {
    getUser(nameUrl)
    getRepos(nameUrl)
  }, [])

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    following, public_repos,
    public_gists
  } = user


  return (
    <Container>
      {loading
        ? <Spinner animation="border" className='m-3'/>
        :
        <>
          <Link className='btn btn-link mt-3 mb-3' to='/'>{'<<to Home'}</Link>
          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-5 text-center">
                  <img
                    src={avatar_url}
                    alt={name}
                    style={{width: '250px'}}
                  />
                  <h1>{name}</h1>
                  {location && <p>Location: {location}</p>}
                </div>
                <div className="col">
                  {
                    bio &&
                    <>
                      <h3>Summary</h3>
                      <p>{bio}</p>
                    </>
                  }
                  <a
                    href={html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark p-1 mb-2"
                  >Open GitHub</a>
                  <ul>
                    {login && <li>
                      <strong>Username: </strong> {login}
                    </li>}

                    {company && <li>
                      <strong>Company: </strong> {company}
                    </li>}

                    {blog && <li>
                      <strong>Website: </strong> {blog}
                    </li>}
                  </ul>

                  <div className="badge alert-primary rounded-0">Followers: {followers}</div>
                  <div className="badge alert-success rounded-0">Following: {following}</div>
                  <div className="badge alert-info rounded-0">Repos: {public_repos}</div>
                  <div className="badge alert-dark rounded-0">Gists: {public_gists}</div>
                </div>
              </div>
            </div>
          </div>
          <Repos/>
        </>
      }

    </Container>
  )
}
