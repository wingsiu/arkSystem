/**
 *
 * NotFoundPage
 * This is the component that will show when you have a 404
 */

import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";


function Contents(props) {
const { classes, ...rest } = props;

    return (
    <div className={classes.container}>
    <h3 className={classes.subtitle}>
      <p>The page you're looking for {window.location.pathname}.</p>
    </h3>
    </div>
  );
}

export default withStyles(componentsStyle)(Contents);
