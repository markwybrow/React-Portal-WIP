import './header-styles.css';

import {
  Button,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler
} from 'reactstrap';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <header className="header">
        <Navbar className="navbar navbar-expand-lg navbar-dark">
          <NavbarBrand
            className="navbar-brand cBrandingLogo"
            href="https://www.clueylearning.com.au"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <Collapse
            isOpen={this.state.isOpen}
            className="collapse navbar-collapse"
            id="navbarColor01"
          >
            <Nav className="navbar-nav mr-auto">
              <NavItem className="nav-item">
                <Link className="nav-link" to="home">
                  HOME 
                </Link>
              </NavItem>
              <NavItem className="nav-item">
                <Link className="nav-link" to="schedule">
                  SCHEDULE
                </Link>
              </NavItem>
              <NavItem className="nav-item">
                <Link className="nav-link" to="courses">
                  COURSES
                </Link>
              </NavItem>
              <NavItem className="nav-item">
                <Link className="nav-link" to="sessions">
                  SESSIONS
                </Link>
              </NavItem>
              <NavItem className="nav-item">
                <Link className="nav-link" to="support">
                  SUPPORT
                </Link>
              </NavItem>
              <NavItem className="nav-item">
                <Link className="nav-link" to="calendar">
                  CALENDAR
                </Link>
              </NavItem>
            </Nav>

            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
