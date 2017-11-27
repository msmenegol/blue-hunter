'use strict'

let expect = require('chai').expect;
let supertest = require('supertest');
let api = supertest('http://localhost:3000');

describe('Book - by Author', function(){
  it('should get all books with \'i\' in the authors name', function(done){
    api.get('/book/by-author/i')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res){
        if (err) {
          return done(err);
        }
        let books = res.body.books;

        //i should be getting more than one for this test
        expect(Array.isArray(books)).to.be.true;
        expect(books.length>0);
        expect(books.some(book => !book.author.toLowerCase().includes("i"))).to.be.false;
        return done();
      });
  });

  it('should get all books with \'Mel\' in the authors name', function(done){
    api.get('/book/by-author/mel')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res){
        if (err) {
          return done(err);
        }
        let books = res.body.books;

        //i should be getting more than one for this test
        expect(Array.isArray(books)).to.be.true;
        expect(books.length>0);
        expect(books.some(book => !book.author.toLowerCase().includes("mel"))).to.be.false;
        return done();
      });
  });
});
