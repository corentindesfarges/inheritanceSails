'use strict';

/**
 * UserSportProController
 *
 * @description :: Server-side logic for managing Usersportproes
 */

module.exports = {

	add: function (req, result) {
		UserSportPro.create(req.allParams(), function(err, res){
			result.send(200);
		});
  },

	getBySport: function (req, result) {
    UserSportPro.find().exec(function(err, sportifsPro){
			sportifsPro.forEach(function(sportifPro){
				UserSport.findOne({id: sportifPro.usersport}, function(err, usp){
					if(usp.sport == req.param('sport'))
					{
						User.findOne({id: usp.user}, function(err, user){
							console.log(user.firstname + " est un sportif professionnel (" + usp.sport + ") et gagne " + sportifPro.salary + "€");
						});
					}
				});
			});
			result.send(200);
		});
  },

  get: function (req, result) {
    UserSportPro.find(req.allParams(), function(err, res){
			res.forEach(function(sportif){
				UserSport.findOne({id: sportif.usersport}, function(err, usp){
					User.findOne({id: usp.user}, function(err, user){
						console.log(user.firstname + " est un sportif professionnel (" + usp.sport + ") et gagne " + sportif.salary + "€");
					});
				});
			});
			result.send(200);
    });
  }

};
