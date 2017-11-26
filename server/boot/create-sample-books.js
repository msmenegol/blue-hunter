if(process.env.NODE_ENV == "dev"){

  module.exports = function(app) {
    app.dataSources.db.automigrate('book', function(err) {
      if (err) throw err;

      app.models.Book.create([
        {
          title: '1984',
          author: "@gOrwell",
          yearPublished: 1948,
          price: "$12.50",
          rating: "4/5"
        },
      ], function(err, mockBooks) {
        if (err) throw err;

        console.log('Models created: \n', mockBooks);
      });
    });
  };
}
