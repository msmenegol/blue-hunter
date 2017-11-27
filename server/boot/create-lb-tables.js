if(process.env.NODE_ENV != "dev"){
  module.exports = function (app) {
    app.dataSources.mysql.autoupdate();
    console.log("Performed autoupdate.");
  }
}
