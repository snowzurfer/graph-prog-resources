import React from 'react';

export default class NotFound extends React.Component {
  render() {
    return <p>No match for <code>{this.props.location.pathname}</code></p>;
  }
}
