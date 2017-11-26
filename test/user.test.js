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

  it('should get all users with \'b\' in the name', function(done){
    api.get('/user/by-name/b')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res){
        if (err) {
          return done(err);
        }
        let users = res.body;

        //i should be getting more than one for this test
        expect(Array.isArray(users)).to.be.true;
        expect(
          for(i=0;i<users.length;i++){
            //if any name does not contain "b"
            if(!users[i].fullName.toLowerCase().includes("b")){
              return false;
            }
          }
          //if all names contained "b"
          return true;
        ).to.be.true;
      });
  });

  it('should get all users with \'Alic\' in the name', function(done){
    api.get('/user/by-name/alic')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res){
        if (err) {
          return done(err);
        }
        let users = res.body;

        expect(Array.isArray(users)).to.be.true;
        expect(
          for(i=0;i<users.length;i++){
            if(!users[i].fullName.toLowerCase().includes("alic")){
              return false;
            }
          }
          return true;
        ).to.be.true;
      });
  });
});
