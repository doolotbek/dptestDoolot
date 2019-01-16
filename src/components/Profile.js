import React, { Component } from "react";
import "./Profile.css";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import axios from 'axios';
// import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import {performerActions} from "../_actions/performerActions"



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
    width: 295,
    top: '218px',
    // left: ,
    right: 3

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
      open: false,
      text: "",
      logout: ""
    }
  }

  validataeFrom() {
    return this.state.text.length > 0 && this.state.search.length > 0;
  }

  handleClick = () => {
    this.setState({ open: true });
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }
  // handLogout = () => {
  //   let data {
  //     email: 
  //   }
  // }

  sendMessage = event => {
    event.preventDefault();

    let data = {
      text: this.state.text,
    }
     axios.post("/api/messenger", { data
     })
    .then(function(response){ 
      if(response.data.status === true){


        
     
    }
    // .catch(function(error){ 
    // console.log("error",error)
    console.log(response)
    });

    
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };


  render() {
    const { classes } = this.props;

    return (
      <div className="Profile container">

         
      
        <Navbar fluid >
        <Navbar.Header > <h3>Profile</h3> </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                  <NavItem > <button onClick= {this.handleClick}  >Messenger</button></NavItem>
                  
                
                <LinkContainer to="/">
                  <NavItem onClick={this.handLogout}>Logout</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>          
          <Snackbar
          style={{ flexGrow: 0, width: 300, minHeight: 500, backgroundColor:"#F0F9FF" }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
           open={this.state.open}
          action={[
            <IconButton>
              <CloseIcon onClick={this.handleClose} style = {{position:"absolute", bottom:227, left:15 , color:'#000' }}/>
            </IconButton>,

            <Paper className={classes.root} elevation={1}>
            <IconButton className={classes.iconButton} aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <InputBase className={classes.input} placeholder="type something..." 
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            />
            {/* <IconButton className={classes.iconButton} aria-label="Search">
              <SearchIcon />
            </IconButton> */}
            <Divider className={classes.divider} />
            <IconButton onClick={this.sendMessage} color="primary" className={classes.iconButton} aria-label="Directions">
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

const mapStateToProps = state => {
  return {
    // messages: state.messageReducer.messages,
    // user: state.userReducer.user,
    // all_users: state.userReducer.all_users
  };
};
function mapDispatchToProps(dispatch) {
  return {
    // getAllMessages: function(messages) {
    //   dispatch(messageActions.getAllMessages(messages));
    // },
    allUsers: function(all_users) {
      dispatch(performerActions.allUsers(all_users));
    }
  };
}




export default withStyles(styles) (withRouter(connect(mapStateToProps, mapDispatchToProps )(Profile))); 