'use strict'

let expect = require('chai').expect;
let supertest = require('supertest');
let api = supertest('http://localhost:3000');

describe('User', function(){
  it('should get all users', function(done){
    api.get('/user')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if(err) {
          return done(err);
        }
        let users = res.body;

        expect(users.length).to.be.above(1);
        done();
      });
  });

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
        let users = res.body;

        expect(Array.isArray(users)).to.be.true;
        for(i=0;i<users.length;i++){
          expect(users[i].fullName.toLowerCase().includes("alic")).to.be.true;
        }
      });
  });
});
