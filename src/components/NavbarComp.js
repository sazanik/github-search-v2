import React, {useState} from "react";
import {Navbar, Container, Nav, Form, FormControl} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {useAlert} from "../context/alert/AlertState";
import {useGithub} from "../context/github/GithubState";


export const NavbarComp = () => {
  const [value, setValue] = useState('')
  const {show, hide} = useAlert()
  const {search} = useGithub()

  const onSubmit = e => {
    if (e.key !== 'Enter') return

    if (value.trim()) {
      hide()
      search(value.trim())
      console.log('Request on server')
    } else show("Enter user's nickname", 'warning')
  }

  return (
    <Navbar bg='dark' variant='dark' expand="sm">
      <Container>

        <Form
          onSubmit={e => e.preventDefault()}
          className="d-flex">
          <FormControl
            className='rounded-0 me-1'
            type="search"
            placeholder="Search GitHub user"
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyPress={onSubmit}
          />
          {/*<Button className='rounded-0' variant="primary">Search</Button>*/}
        </Form>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
