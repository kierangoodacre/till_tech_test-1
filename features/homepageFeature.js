var expect = require('chai').expect;
var webdriverio = require('webdriverio');

describe('Till Page Tests', function() {

  var client = {};

  before(function(done) {
    client = webdriverio.remote({ desiredCapabilities: { browserName: 'chrome'}});
    client.init(done)
  });

  after(function(done) {
    client.end(done)
  });

  it('Homepage Title Displays',function(done) {
    client
      .url('http://localhost:3000')
      .getText('h1', function(err, text) {
        expect(err).to.not.be.true;
        expect(text).to.eql('Hello Makers');
      })
      .call(done);
  });

});
