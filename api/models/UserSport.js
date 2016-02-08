'use strict';

/**
 * UserSport.js
 *
 * @description :: This model describes an User who loves sport.
 */

module.exports = {

  attributes: {

    sport: {
      type: 'STRING',
      required: true
    },

    userBase: {
        model: 'user'
    }

  },

  beforeCreate: function (values, cb) {

    if(values.firstname)  //basic user is created
    {
      User.create({firstname: values.firstname}, function(err, user){
        delete values.firstname;
        values.user = user.id;
        cb();
      });
    }
    else
    {
      cb();
    }
  }
};
