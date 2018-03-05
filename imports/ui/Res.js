import React from 'react';
import moment from 'moment';

export default class Res extends React.Component {
  render() {
    return (
      <div>
        <p>
          {this.props.l.label}, 
          {this.props.l.url}, 
          {this.props.l.notes},
          {this.props.l.dateUpdated},
          {this.props.l.upvotes},
        </p>
      </div>
    );
  }
}
