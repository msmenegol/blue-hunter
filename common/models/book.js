'use strict';

module.exports = function(Book) {
  Book.byTitle = function(title, cb){
    let pattern = new RegExp('.*'+title+'.*', "i");

    Book.find({where: {title: {regexp: pattern} } }, function(err, books){
      let response = books;
      cb(null,response);
    });
  }

  Book.remoteMethod(
    'byTitle', {
      http: {
        path: '/by-title/:title',
        verb: 'get'
      },
      accepts: {
        arg: 'title',
        type: 'string',
        required: true
      },
      returns: {
        type: 'array',
        root: true
      }
    }
  );

  Book.byAuthor = function(author, cb){
    let pattern = new RegExp('.*'+author+'.*', "i");

    Book.find({where: {author: {regexp: pattern} } }, function(err, books){
      let response = books;
      cb(null,response);
    });
  }

  Book.remoteMethod(
    'byAuthor', {
      http: {
        path: '/by-author/:author',
        verb: 'get'
      },
      accepts: {
        arg: 'author',
        type: 'string',
        required: true
      },
      returns: {
        type: 'array',
        root: true
      }
    }
  );
};
