// var server = require('./server');
// var ds = server.dataSources.mysql;
//
// var lbTables = ['user', 'book'];
// ds.autoupdate( lbTables, function(er) {
//   if (er) throw er;
//   console.log('Loopback tables [' - lbTables - '] created in ', ds.adapter.name);
//   ds.disconnect();
// });

if(process.env.NODE_ENV != "dev"){
  module.exports = function (app) {
    app.dataSources.mysql.autoupdate();
    console.log("Performed autoupdate.");
  }
}
