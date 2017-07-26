var expect = require('chai').expect;
var chai = require('chai'), chaiHttp = require('chai-http');

chai.use(chaiHttp);

  describe('POST', () => {
	it('fails, as expected', function(done) { // <= Pass in done callback
	  chai.request('https://jsonblob.com')
	  .post('/api/jsonBlob')
	  .field('content', 'blba')
	  .end(function(err, res) {
	    expect(res).to.have.status(200);
	    done();                               // <= Call done to signal callback end
  });
}) ;
	it('succeeds silently!', function() {   // <= No done callback
	  chai.request('https://jsonblob.com')
	  .post('/api/jsonBlob')
	  .field('content', 'blba')
	  .end(function(err, res) {
	    expect(res).to.have.status(200);    // <= Test completes before this runs
	  });
}) ;
  });

