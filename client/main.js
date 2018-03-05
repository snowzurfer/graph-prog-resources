import { Meteor } from 'meteor/meteor';
import ReactDOM  from 'react-dom';
import { Tracker } from 'meteor/tracker';

import { routes } from '../imports/routes/routes';
import { Links } from '../imports/api/links';

Tracker.autorun(() => {
  const links = Links.find().fetch();
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
