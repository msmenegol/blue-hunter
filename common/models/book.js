'use strict';

function searchForAny(model, field, text){
  let pattern = new RegExp('.*'+text+'.*', "i");
  model.find({where: {field: {like: pattern} } }, function(err, result){
    return result;
  });
}

module.exports = function(Book) {
  Book.byTitle = function(title, cb){
    cd(null,searchForAny(Book, title, title));
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

  Book.byAuthor = function(author, cb){
    cd(null,searchForAny(Book, author, "i"));
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
        arg: 'books',
        type: 'array'
      }
    }
  );
};
