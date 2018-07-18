/**
 *
 * ProductsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link }  from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_PRODUCTS } from '../../queries';

import Table from '../../components/Table';
// Utils

import './styles.scss';

class ItemPage extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    let requestURL = 'http://localhost:3001/api/en/102';
    fetch(requestURL)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
    
  onClick = (id) => {
    this.props.history.push(`/product/${id}`);
  }
  

  render() {
    return (
      <div/>  
    );
  }
}

ItemPage.defaultProps = {};

ItemPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default ItemPage;
