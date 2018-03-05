import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import moment from 'moment';
import numeral from 'numeral';

export const Links = new Mongo.Collection('links');

Links.linkTypes = [
  'book',
  'video',
  'video-playlist',
  'podcast',
  'slides',
  'article',
  'tutorial',
  'repo',
  'talk',
  'None'
];

// Define the public fields of links
Links.publicFields = {
  label: 1,
  url: 1,
  notes: 1,
  upvotes: 1,
  dateUpdated: 1,
  type: 1
};

// Add publications to the Link object collection for easy retrieval
Links.pubs = {
  allPublic: 'links.allPublic'
};

// Add method names to links object
Links.methods = {
  insertNewLink: 'links.insertNewLink'
};

// Only create the publication when we're on the server
if (Meteor.isServer) {
  Meteor.publish(Links.pubs.allPublic, function() {
    return Links.find({}, { fields: Links.publicFields });
  });
}

// Methods to insert links
export const insertNewLink = new ValidatedMethod({
  name: Links.methods.insertNewLink,
  validate({label, url, notes, type}) {
    const schema = new SimpleSchema({
      label: {
        type: String,
        max: 100
      },
      url: {
        type: String,
        regEx: SimpleSchema.RegEx.Url
      },
      notes: {
        type: String,
        optional: true,
        max: 250
      },
      type: {
        type: String,
        optional: true,
        allowedValues: Links.publicFields
      }
    }, { requiredByDefault: true });

    // This will throw automatically if there are problems
    schema.validate({label, url, notes});

    // Check if there already are entries with the same URL
    const isLinkAlreadyPresent = !!Links.find({url: {$eq: url}}).count();
    if (isLinkAlreadyPresent) {
      throw new ValidationError([
        {
          name: 'url',
          type: 'already-present',
          message: 'The URL submitted is already present.'
        }
      ]);
    }
  },

  run({label, url, notes, type}) {
    Links.insert({
      label: label,
      url: url,
      notes: notes,
      upvotes: 1,
      dateCreation: moment().format('ll'),
      dateUpdated: moment().format('ll'),
      type: type
    });
  }
});
