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
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';



const styles = {
  don:{
  // width: 400,
   position: "absolute",
   height: 500, 
  },
  icon: {
    width: 15,
    height: 52,
    margin: 4,
  },

  root: {
    padding: '2px 4px',
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    width: 300,
    top: '218px',
    left: 2

  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },

  divider: {
    width: 1,
    height: 2,
    margin: 4,
    
  },
  
};

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

  handleClose = event => {
    this.setState({ open: false });
  };


  render() {
    const { classes } = this.props;

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
          style={{ flexGrow: 0,width: 300, minHeight: 500, backgroundColor:"#F0F9FF" }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          open={this.state.open}
          onClose={this.handleClose}
          action={[
            <IconButton 
              key="close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon style = {{position:"absolute", bottom:227, left:50, color: '#E6E6E6' }}/>
            </IconButton>,

            <Paper className={classes.root} elevation={1}>
            <IconButton className={classes.iconButton} aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <InputBase className={classes.input} placeholder="type something..." />
            <IconButton className={classes.iconButton} aria-label="Search">
              <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} />
            <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
              <DirectionsIcon />
            </IconButton>
            </Paper>
          ]}
          >

             </Snackbar>
        
      </div>
    );
  }


}


export default withStyles(styles) (withRouter(connect(null)(Profile)));