'use strict';

/**
 * UserSport.js
 *
 * @description :: This model describes an User who loves sport and earn money.
 */

module.exports = {

  attributes: {

    salary: {
      type: 'INTEGER',
      required: true
    },

    // userBase: {
    //     model: 'user'
    // },
    userSportBase: {
        model: 'UserSport'
    }

  },

  beforeCreate: function (values, cb) {

    if(values.firstname && values.sport)  //sport user is created
    {
      UserSport.create({firstname: values.firstname, sport: values.sport}, function(err, usersport){
        delete values.firstname;
        delete values.sport;
        values.usersport = usersport.id;
        cb();
      });
    }
    else
    {
      cb();
    }
  }
};
