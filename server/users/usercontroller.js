var Q = require('q');
var jwt = require('jwt-simple');
var User = require('./usermodel.js');
var config = require('../config/config')


// Promisify a few mongoose methods with the `q` promise library
var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);

module.exports = {
  signin: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    findUser({username: username})
      .then(function (user) {
        //if no user found, then usernone: true is sent back to Auth.signin in services.js
        if (!user) {
          res.json({usernone: true});
        } else {
          return user.comparePasswords(password)
            .then(function (foundUser) {
              if (foundUser) {
                var token = jwt.encode(user, config.secrets.jwt);
                res.json({token: token});
              } else {
                return next(new Error('No user'));
              }
            });
        }
      })
      .fail(function (error) {
        next(error);
      });
  },
  //used to create new user
  signup: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;

    // check to see if user already exists
    findUser({username: username})
      .then(function (user) {
        if (user) {
          res.json({duplicateUser: true});
        }
        //make sure email is not already in use
      findUser({email: email})
        .then(function (email) {
          if (email) {
            res.json({duplicateEmail: true})
          }
        })
      })
        //if both checks above pass, create the new user in the database
      .then(function() {
        return createUser({
            username: username,
            password: password,
            email: email,
            points: 0
          })
      })
      // and send them a token
      .then(function () {
        // create token to send back for auth
        var token = jwt.encode(username, config.secrets.jwt);
        res.json({token: token});
      })
      .fail(function (error) {
        next(error);
      });
  },

  checkAuth: function (req, res, next) {
    // checking to see if the user is authenticated
    // grab the token in the header is any
    // then decode the token, which we end up being the user object
    // check to see if that user exists in the database
    var token = req.headers['x-access-token'];
    if (!token) {
      next(new Error('No token'));
    } else {
      var user = jwt.decode(token, config.secrets.jwt);
      findUser({username: user.username})
        .then(function (foundUser) {
          if (foundUser) {
            res.send(200);
          } else {
            res.send(401);
          }
        })
        .fail(function (error) {
          next(error);
        });
    }
  }
};