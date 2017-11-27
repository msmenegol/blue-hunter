'use strict'

let expect = require('chai').expect;
let supertest = require('supertest');
let api = supertest('http://localhost:3000');

describe('User', function(){
  it('should get all users with \'b\' in the name', function(done){
    api.get('/user/by-name/b')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res){
        if (err) {
          return done(err);
        }
        let users = res.body.users;

        //i should be getting more than one for this test
        expect(Array.isArray(users)).to.be.true;
        expect(users.length>0).to.be.true;
        expect(users.some(user => !user.fullName.toLowerCase().includes("b"))).to.be.false;
        return done();
      });
  });

  it('should get all users with \'alic\' in the name', function(done){
    api.get('/user/by-name/alic')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res){
        if (err) {
          return done(err);
        }
        let users = res.body.users;

        expect(Array.isArray(users)).to.be.true;
        expect(users.length>0).to.be.true;
        expect(users.some(user => !user.fullName.toLowerCase().includes("alic"))).to.be.false;
        return done();
      });
  });
});
