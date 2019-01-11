import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Nav, Navbar, NavItem } from "react-bootstrap";
import "./Login.css";
import axios from 'axios';
import { withRouter } from "react-router";
import { connect } from "react-redux";
import {history} from "./App";
import { Link } from "react-router-dom";  
import { LinkContainer } from "react-router-bootstrap";


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
        password: ""
      };
    }
    

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
    
  }
 
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    
  }

  handleSubmit = event => {
    event.preventDefault();
 
    let data = {
      username: this.state.email,
      password: this.state.password
    }
    console.log(data)

    axios.post("/api/users/login", { data
   })
   .then(function(response){ 
     if(response.data.status === true){
    //  <Redirect to="/chat" />
      history.push("/profile")
    }
    else {
      alert(<h1> "lets try " </h1> );
    }
    console.log("respose",response)   
   })
   .catch(function(error){ 
   console.log("error",error)
   });
  
   

  }

  render() {
    return (
      <div className="Login container">

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
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel> 
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button style = {{backgroundColor: "#F7FAFC"}}
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
            </Button>
            
        </form>
      </div>
    );
  }
}


export default withRouter(connect(null)(Login));