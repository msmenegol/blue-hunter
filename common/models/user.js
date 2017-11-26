'use strict';

module.exports = function(User) {
  User.byName = function(cb){
    let response;
  }
  cb(null,response);

  User.remoteMethod(
    'byName', {
      http: {
        path: '/by-name',
        verb: 'get'
      },
      accepts: {
        arg: 'name',
        type: 'string',
        http:{source: 'query'
      }
      returns:{
        arg: 'users',
        type: 'array'
      }
    }
  );
};
