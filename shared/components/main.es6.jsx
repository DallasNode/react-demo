/** @jsx React.DOM */

import React from 'react';

export default React.createClass({
  componentDidMount: function () {
    this.intervalId = setInterval(this.forceUpdate.bind(this));
  },

  componentWillUnmount: function () {
    clearInterval(this.intervalId);
  },

  render: function () {
    return (
      <div id='main'>
        <div className='description'>The server has been alive for</div>
        <span className='ms'>{Date.now() - this.props.bornAt}</span>
        <span className='unit'>ms</span>
      </div>
    );
  }
});
