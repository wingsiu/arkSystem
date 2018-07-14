/**
 *
 * HomePage
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import auth from '../../utils/auth';
import Header from '../../components/Header';

import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Jumbotron, Container
} from 'reactstrap';

import './styles.scss';

class HomePage extends React.Component {
    
  
  render() {
    return (
      <div >
      <Header/>

        <div style={{ marginTop: '15%' }}>
        <h1>You're now logged in!!!</h1>
        <div style={{ marginTop: '50px' }}>
          <Button
            primary
            onClick={() => {
              auth.clearAppStorage();
              this.props.history.push('/auth/login');
            }}
          >
            Logout
          </Button>
        </div>
        <div>
          <Link to="/products">
            See all products
          </Link>
        </div>
      </div>
     </div>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default HomePage;
