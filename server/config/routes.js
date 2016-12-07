var commentsController = require('../comments/commentcontroller.js');
var usersController = require('../users/usercontroller.js');


module.exports = function(app, express) {
  app.post('/api/signup', usersController.signup);
  app.post('/api/signin', usersController.signin);
};

