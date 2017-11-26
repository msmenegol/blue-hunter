'use strict'

let expect = require('chai').expect;
let supertest = require('supertest');
let api = supertest('http://localhost:3000/api');

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


});
