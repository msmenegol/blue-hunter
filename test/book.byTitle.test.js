'use strict'

let expect = require('chai').expect;
let supertest = require('supertest');
let api = supertest('http://localhost:3000');

describe('Book', function(){
  it('should get all books with \'m\' in the name', function(done){
    api.get('/book/by-title/m')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res){
        if (err) {
          return done(err);
        }
        let books = res.body.books;

        //i should be getting more than one for this test
        expect(Array.isArray(books)).to.be.true;
        expect(books.length>0).to.be.true;
        expect(books.some(book => !book.title.toLowerCase().includes("m"))).to.be.false;
        return done();
      });
  });

  it('should get all books with \'Guid\' in the name', function(done){
    api.get('/book/by-title/guid')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res){
        if (err) {
          return done(err);
        }
        let books = res.body.books;

        //i should be getting more than one for this test
        expect(Array.isArray(books)).to.be.true;
        expect(books.length>0).to.be.true;
        expect(books.some(book => !book.title.toLowerCase().includes("guid"))).to.be.false;
        return done();
      });
  });
});
