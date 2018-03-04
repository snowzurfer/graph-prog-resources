import { Meteor } from 'meteor/meteor';
//import SimpleSchema from 'simpl-schema';

import '../imports/api/links';

Meteor.startup(() => {
  // code to run on server at startup
  //

  // Re-throw possible errors as meteor errors so that we can display them on
  // the client
  //try {
    //linkSchema.validate({
      //label: 'tes',
      //link: 'http://www.tacklapp.com'
    //});
  //}
  //catch(e) {
    //throw new Meteor.Error(400, e.message);
  //}

});
