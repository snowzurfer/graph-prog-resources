import React from 'react';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';

import { Links } from '../api/links';
import Res from '../ui/Res';

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
      Meteor.subscribe(Links.pubs.allPublic);

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
    return this.state.links.map((link) => {
      return <Res key={link.url} l={link} />
    });
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
