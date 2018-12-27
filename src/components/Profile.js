import React, { Component } from "react";
import "./Profile.css";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      itemArray: [],
      open: false
    }
  }

  handleClick = event => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };


  render() {
    return (
      <div className="Profile container">

         
      
        <Navbar fluid >
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
          
          <Snackbar
          // style={Snackbar}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            backgroundColor: '#fff',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Note archived</span>}
          
          action={[
            // <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
            //   UNDO
            // </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
            <div>
            <TextField
            id="outlined-simple-start-adornment"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            label="With outlined TextField"
            InputProps={{
              startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
            }}
          /></div>
          ]}
        />
        
      </div>
    );
  }


}


export default withRouter(connect(null)(Profile));