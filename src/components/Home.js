import React, { Component } from "react";
import "./Home.css";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";



class Home extends Component {
  render() {
    return (
      
      <div className="Home container">
      
        <Navbar fluid collapseOnSelect>
					<Navbar.Header >
						<Navbar.Brand>
							<Link to="/">Menu</Link>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<LinkContainer to="/register">
								<NavItem>Signup</NavItem>
							</LinkContainer>
							<LinkContainer to="/login">
								<NavItem>Login</NavItem>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			
      </div>
    );
  }
}

export default withRouter(connect(null)(Home));