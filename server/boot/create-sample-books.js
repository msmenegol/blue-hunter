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
        {
          title: 'Moby Dick',
          author: "@hMelville",
          yearPublished: 1851,
          price: "$15.50",
          rating: "4/5"
        },
        {
          title: 'Guide Me',
          author: "@mBob",
          yearPublished: 2010,
          price: "$40.40",
          rating: "1/5"
        },
        {
          title: 'Life Guidance Galore',
          author: "@pRobot",
          yearPublished: 192038,
          price: "$42.42",
          rating: "5/5"
        },
        {
          title: 'I, Robot',
          author: "@iAsimov",
          yearPublished: 1950,
          price: "$20,00",
          rating: "5/5"
        }
      ], function(err, mockBooks) {
        if (err) throw err;

        console.log('Models created: \n', mockBooks);
      });
    });
  };
}
