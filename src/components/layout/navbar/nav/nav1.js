import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Nav, Navbar, Container } from "reactstrap"
import Navitem from "./navitem"
import Logo from "../../../../images/logo.webp"

const Nav1 = props => {
  return (
    <Fragment>
      <Navbar className="navbar-transparent navbar-light" expand="md">
        <Container>
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <Nav className="ml-auto" navbar>
            <Navitem name="Tags" url="tags" />
            <Navitem name="Contact" url="contact" />
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  )
}

export default Nav1
