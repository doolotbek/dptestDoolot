import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios'
// import blogPastActions from "./actions/blogPostActions";
import "./Register.css";

import "./Home.css";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

 class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      
    };

  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 3;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    var data = { 
      username: this.state.email,
      password: this.state.password,
      id: this.state.id
    }
    console.log(data)

    axios.post("/api/users/register", { data
   })
   .then(function(response){ 
    console.log("respose",response)    
   })
   .catch(function(error){ 
   console.log("error",error)
   });

  }

  render() {
    return (
      <div className="register container">


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
          <Button
            style ={ this.validateForm ? {backgroundColor:  "#F7FAFC"} : null}
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            
          >
            Register
          </Button>
        </form>
      </div>
    );
  }
}


export default withRouter(connect(null)(Register));

