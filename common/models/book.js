'use strict';

module.exports = function(Book) {
  Book.byTitle = function(title, cb){
    let response;
    cb(null,response);
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
        arg: 'books',
        type: 'array'
      }
    }
  );
};
