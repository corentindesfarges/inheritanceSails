'use strict';

/**
 * UserSportController
 *
 * @description :: Server-side logic for managing Usersports
 */

module.exports = {

	add: function (req, result) {
		UserSport.create(req.allParams(), function(err, res){
			result.send(200);
		});
  },

	getBySport: function (req, result) {
    UserSport.find({sport: req.param('sport')}).exec(function(err, res){
			res.forEach(function(user){
				User.findOne({id: user.user}, function(err, u){
					console.log(u.firstname + " - " + user.sport);
				});
			});
			result.send(200);
		});
  },

  get: function (req, result) {
    UserSport.find(req.allParams(), function(err, res){
			res.forEach(function(user){
				User.findOne({id: user.user}, function(err, u){
					console.log(u.firstname + " est un sportif : " + user.sport);
				});
			});
			result.send(200);
    });
  }

};
