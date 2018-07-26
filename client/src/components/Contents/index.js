/**
 *
 * NotFoundPage
 * This is the component that will show when you have a 404
 */

import React from 'react';

function Contents(props) {
  return (
    <div>
      <p>The page you're looking for {window.location.pathname}.</p>
    </div>
  );
}

export default Contents;
