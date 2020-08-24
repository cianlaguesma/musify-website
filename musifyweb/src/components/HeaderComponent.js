import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <>
        <div>
          <Navbar dark expand="md">
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/icon.png"
                height="40"
                width="40"
                alt="Musify"
                id="logo"
              />
              <span id="logoname"> Musify!</span>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav id="navbar-items" className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/download">
                    Download
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <div id="darkBack"></div>
        <img className="background" src="assets/images/background2.jpg" />
      </>
    );
  }
}

export default Header;
