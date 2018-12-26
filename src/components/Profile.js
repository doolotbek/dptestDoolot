import React, { Component } from "react";
import "./Profile.css";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      itemArray: [],
      popover: false
    }
  }

  handleClick = event => {
    this.setState({
      popover: true
    });
  };

  handleClose = () => {
    this.setState({
      popover: false,
    });
  };


  render() {
    return (
      <div className="Profile container">

         
      
        <Navbar fluid collapseOnSelect>
        <Navbar.Header > <h3>Profile</h3> </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                  <NavItem> <button onClick= {this.handleClick}  >Messenger</button></NavItem>
                  
                
                <LinkContainer to="/">
                  <NavItem>Logout</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <p>A simple note taking app</p>
          <Popover style={{    position: "relative", bottom: "320px",width: "150px", height: "600px"}} 
              placement="bottom" open={this.state.popover} onClose={this.handleClose} 
                  anchorOrigin={{
                    vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}>
                    <Typography >The content of the Popover.</Typography>
                  </Popover>
        
      </div>
    );
  }


}


export default withRouter(connect(null)(Profile));