/* @flow */

const { MongoClient } = require('mongodb');
var assert = require('assert');


export function getDatabase() {
  var url = 'mongodb://localhost:27017/jot-test';

  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, db) => {
      assert.equal(null, err);
      console.log('Connected to db successfully.');
      resolve(db);
    });
  });
}

