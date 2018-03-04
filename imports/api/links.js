import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Links = new Mongo.Collection('links');

export const linkSchema = new SimpleSchema({
  label: {
    type: String,
    max: 100
  },
  link: {
    type: String,
    regEx: SimpleSchema.RegEx.Url
  },
  notes: {
    type: String,
    optional: true,
    max: 250
  }
});
