var mobileRouter = require('./mobileRouter');
var clothesRouter = require('./clothesRouter');
var sportsRouter =require('./sportsRouter');

module.exports = function(app){


        mobileRouter(app);
        clothesRouter(app);
         sportsRouter(app);
}