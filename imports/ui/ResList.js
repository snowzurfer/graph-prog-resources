import React from 'react';
import { Tracker } from 'meteor/tracker';

import { Links } from '../api/links';

export default class ResList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: []
    };
  }

  componentDidMount() {
    console.log('Comp didmount');
    this.linksTracker = Tracker.autorun(() => {
      const links = Links.find().fetch();
      this.setState({ 
        links: links
      });
    });
  }

  componentWillUnmount() {
    console.log('Comp willunmount');
    // Stops tracker from tracking data so that it does not run the component
    // if the component is not being shown
    this.linksTracker.stop();
  }

  renderRefListItems() {
    const links = this.state.links.map((link) => {
      return <p key={link.url}>{link.label}</p>
    });
    return links;
  }

  render() {
    return (
      <div>
        <p>Resources list</p>
        <div>
          {this.renderRefListItems()}
        </div>
      </div>
    );
  }
}
