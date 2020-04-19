import React, { Fragment, useState } from "react"
import { Link } from "gatsby"
import window from "global"
import { Nav, Navbar, Collapse, NavbarToggler, Container } from "reactstrap"
import Navitem from "./navitem"
import Logo from "../../../../images/logo.webp"

const Nav1 = (props) => {

    //Nacbar Toggler
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    //Nacbar Color on Scroll
    window.onscroll = () => {
        const scrollNav = document.querySelector("nav")
        const scrollMe = window.scrollY
        if( scrollMe >= 100 ) {
            scrollNav.classList.add("scroll")
        } else {
            scrollNav.classList.remove("scroll")
        } 
    }

    return (
        <Fragment>
            <Navbar className="navbar-transparent fixed-top navbar-light" expand="md">
                <Container>
                    <Link className='navbar-brand' to='/'><img src={Logo} alt="logo"/></Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <Navitem name='About' url='about' />
                            <Navitem name='Services' url='services' />
                            <Navitem name='Contact' url='contact' />
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default Nav1
