if(process.env.NODE_ENV == "dev"){

  module.exports = function(app) {
    app.dataSources.db.automigrate('user', function(err) {
      if (err) throw err;

      app.models.User.create([
        {
          fullName: 'Bob Bobinson',
          gender: "male",
          age: 34,
          email: "bob@example.com",
          phone: "(555) 123-4567",
          username: "lilbob"
        }
      ], function(err, mockUsers) {
        if (err) throw err;

        console.log('Models created: \n', mockUsers);
      });
    });
  };
}
