import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import NotFound from "./NotFound";


class App extends Component {

	render() {
		return (
			<div className="App container">
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
							<LinkContainer to="/chat">
							<NavItem>Chat</NavItem>
							</LinkContainer>
							<LinkContainer to="/login">
								<NavItem>Login</NavItem>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Routes />
				<NotFound />
			</div>
		);
	}
}

export default App;