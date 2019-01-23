import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Nav, Navbar, NavItem } from "react-bootstrap";
import "./Login.css";
import axios from 'axios';
import { withRouter } from "react-router";
import { connect } from "react-redux";
import {history} from "./App";
import { Link } from "react-router-dom";  
import { LinkContainer } from "react-router-bootstrap";
import {performerActions} from "../_actions/performerActions";

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

  handleSubmit = e => {
    e.preventDefault();
    let data = {
      username: this.state.email,
      password: this.state.password
    }
    console.log(data)

    axios.post("/api/users/login", { data
   })
   .then(response => { 
    console.log("respose",response) 
     if(response.data.status === true){
      console.log("resposes",response) 
     this.onLoginSuccess(response);
    }
    else {
      alert( "password or email is error  "  );
    }
   })
   .catch(function(error){ 
   console.log("error",error)
   });
  };

  onLoginSuccess = response => {
    console.log("this", this);
    console.log("data", response.data);
    this.props.login(response.data.performer)
    this.props.history.push("/profile")
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
        <form >
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
            onClick={this.handleSubmit}
          >
            Login
            </Button>
            
        </form>
      </div>
    );
  }
} 

function mapDispatchToProps(dispatch) {
  return {
    login: function(data) {
      dispatch(performerActions.login(data));
    }
  };
}


export default withRouter(connect(null, mapDispatchToProps)(Login));