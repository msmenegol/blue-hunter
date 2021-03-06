'use strict';

module.exports = function(User) {
  User.byName = function(name, cb){
    let pattern = new RegExp('.*'+name+'.*', "i");

    User.find({where: {fullName: {regexp: pattern} } }, function(err, users){
      let response = users;
      cb(null,response);
    });
  }


  User.remoteMethod(
    'byName', {
      http: {
        path: '/by-name/:name',
        verb: 'get'
      },
      accepts: {
        arg: 'name',
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
