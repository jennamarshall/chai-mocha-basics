var expect = require('chai').expect;
var chai = require('chai'), chaiHttp = require('chai-http');

chai.use(chaiHttp);

  describe('GET', () => {
	it('fails, as expected', function(done) { // <= Pass in done callback
	  chai.request('http://httpbin.org/')
	  .get('/')
	  .end(function(err, res) {
	    expect(res).to.have.status(200);
	    done();                               // <= Call done to signal callback end
  });
}) ;
	it('succeeds silently!', function() {   // <= No done callback
	  chai.request('http://httpbin.org/')
	  .get('/')
	  .end(function(err, res) {
	    expect(res).to.have.status(200);    // <= Test completes before this runs
	  });
}) ;
  });

