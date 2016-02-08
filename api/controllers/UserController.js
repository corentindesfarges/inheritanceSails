'use strict';

/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 */

module.exports = {

  add: function (req, result) {
		User.create(req.allParams(), function(err, res){
			result.send(200);
		});
  },

  get: function (req, result) {
    User.find(req.allParams(), function(err, res){
      res.forEach(function(user){
				console.log(user.firstname + " est un utilisateur du site.");
			});
			result.send(200);
    });
  }

};
