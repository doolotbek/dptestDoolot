import React, { Component } from "react";
import "./Chat.css";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Chat extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="Chat container">
      
        <Navbar fluid collapseOnSelect>
        <Navbar.Header > <h3>Chat</h3> </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <LinkContainer to="/messenger">
                  <NavItem>Messenger</NavItem>
                </LinkContainer>
                <LinkContainer to="/Home">
                  <NavItem>Logout</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <p>A simple note taking app</p>
        
      </div>
    );
  }
}


export default withRouter(connect(null)(Chat));