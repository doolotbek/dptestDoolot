import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import {history} from "./App";

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
      history.push("/chat")
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
      <div className="Login">
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