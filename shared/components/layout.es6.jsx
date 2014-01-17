/** @jsx React.DOM */

import React from 'react';
import Main from 'components/main';

export default React.createClass({
  render: function () {
    return (
      <html data-props={JSON.stringify(this.props)}>

        <head>
          <title>React</title>
          <link href='/styles/app.css' rel='stylesheet' />
          <script src='/require.js' data-main='app.js'></script>
        </head>

        <body>
          {this.transferPropsTo(<Main />)}
        </body>
      </html>
    );
  }
});
