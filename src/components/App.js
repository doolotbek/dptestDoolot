import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";
// import { LinkContainer } from "react-router-bootstrap";
import NotFound from "./NotFound";
import { Router,Route, Switch  } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import createHistory from "history/createBrowserHistory";
export const history = createHistory();


class App extends Component {

	render() {
		return (
			<div className="App container">
			<Router history={history}>
				<Switch>
					<Route exact path="/" render={() => <Home />} />
					<Route exact path="/login" render={() => <Login/>} />
					<Route exact path="/register" render={() => <Register />} /> 
					<Route exact path="/profile" render={() => <Profile />}/> 
					{/* <Route exact path="/" render={() => <Logout />}/>  */}
					<NotFound />				
				</Switch>
				</Router>
          
				
			</div>
		);
	}
}	

export default withRouter(connect(null)(App));