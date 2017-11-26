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
        },
        {
          fullName: 'Rob John',
          gender: "male",
          age: 21,
          email: "evil@example.com",
          phone: "(555) 144-4666",
          username: "evilmonster"
        },
        {
          fullName: 'Batman',
          gender: "male",
          age: 35,
          email: "batman@example.com",
          phone: "(123) 123-1237",
          username: "batman"
        },
        {
          fullName: 'Alice Doe',
          gender: "female",
          age: 12,
          email: "aldoe@example.com",
          phone: "(555) 122-2227",
          username: "aldoe"
        },
        {
          fullName: 'Alicia Poe',
          gender: "male",
          age: 13,
          email: "apoe@example.com",
          phone: "(545) 567-1234",
          username: "bobNotAliciaISwear"
        },
      ], function(err, mockUsers) {
        if (err) throw err;

        console.log('Models created: \n', mockUsers);
      });
    });
  };
}
