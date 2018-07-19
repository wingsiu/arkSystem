/**
 *
 *
 * App
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import AuthPage from '../../containers/AuthPage';
import ConnectPage from '../../containers/ConnectPage';
import EditPage from '../../containers/EditPage';
import HomePage from '../../containers/HomePage';
import NotFoundPage from '../../containers/NotFoundPage';
import ProductDetailsPage from '../../containers/ProductDetailsPage';
import ProductsPage from '../../containers/ProductsPage';
import ItemPage from '../../containers/ItemPage';


// This component ios HoC that prevents the user from accessing a route if he's not logged in
import PrivateRoute from '../../containers/PrivateRoute';

// Design
//import './styles.css';

 

class App extends Component {
     constructor(props) {
    super(props);
    
    this.state = {
      isLoading : true,
      topMenu : {},
      sideMenu : {},
      contents :{},
    };
    }  
  
componentDidMount() {
    console.log("App props:",window.location.pathname);
    let requestURL = 'http://localhost:3001/en'+window.location.pathname;
    fetch(requestURL)
      .then(response => response.json())
      .then(data => {this.setState({topMenu:data.topMenu,
                                    sideMenu:data.sideMenu,
                                  contents: data.contents});
    this.setState({isLoading : false});
          
    }); 
 } 

    
  render() {
   if (!this.state.isLoading){
    return (
      <Router>
        <div className="App">
          <Switch>
            {/* A user can't go to the HomePage if is not authenticated */}
            <Route path="/auth/:authType/:id?" component={AuthPage} />
            <Route path="/" render={(props) => (
  <HomePage {...props} menu={this.state.topMenu} />
        )}/>
            <PrivateRoute exact path="/item" component={ItemPage} />            
        
            <PrivateRoute exact path="/products" component={ProductsPage} />
            <PrivateRoute exact path="/product/:id" component={ProductDetailsPage} />
            <PrivateRoute path="/form/:contentType/:id" component={EditPage} />
            <Route exact path="/connect/:provider" component={ConnectPage} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
   } else return <p>Loading ...</p>;
  }
}

export default App;
