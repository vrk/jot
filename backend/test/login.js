const assert = require('assert');
const request = require('supertest');

const server = require('../server');

describe('Account Router', function() {
  describe('/api/login/', function() {
    it('Verify users api', function(done) {
      request(server)
        .get('/api/login')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          var expected = { success: true, message: 'login requested' };
          assert.deepEqual(res.body, expected);
          done(err);
        });
    });
  });
});

