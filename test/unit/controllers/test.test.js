'use strict';

var data = require('../../datatest.js');
var assert = require('assert');
var request = require('supertest');
var agent;

describe('TEST', function() {

  before(function(done) {
    agent = request.agent(sails.hooks.http.app);
    done();
  });

  describe('add tests', function() {
    it('add dancer 1', function (done) {
      agent
      .post('/userSport')
      .send({ firstname: 'meiko', sport: 'dance' })
      .expect(200, done);
    });
    it('add dancer 2', function (done) {
      agent
      .post('/userSport')
      .send({ firstname: 'lucie', sport: 'dance' })
      .expect(200, done);
    });
    it('add footballer 1', function (done) {
      agent
      .post('/userSport')
      .send({ firstname: 'coco', sport: 'football' })
      .expect(200, done);
    });
    it('add footballer pro 1', function (done) {
      agent
      .post('/userSportPro')
      .send({ firstname: 'Zinedine', sport: 'football', salary: 1000000 })
      .expect(200, done);
    });
    it('add footballer pro 2', function (done) {
      agent
      .post('/userSportPro')
      .send({ firstname: 'Steeve', sport: 'football', salary: 500000 })
      .expect(200, done);
    });
    it('add dancer pro', function (done) {
      agent
      .post('/userSportPro')
      .send({ firstname: 'Brian', sport: 'dance', salary: 1000 })
      .expect(200, done);
    });
    it('add tennisman pro', function (done) {
      agent
      .post('/userSportPro')
      .send({ firstname: 'Roger', sport: 'tennis', salary: 90000 })
      .expect(200, done);
    });
    it('add basic guy', function (done) {
      agent
      .post('/user')
      .send({ firstname: 'neuneu' })
      .expect(200, done);
    });
  });

  describe('get tests', function() {
    it('get all dancers', function (done) {
      agent
      .get('/userSport/dance')
      .expect(200, done);
    });
    it('get all footballers', function (done) {
      agent
      .get('/userSport/football')
      .expect(200, done);
    });
    it('get all footballers pro', function (done) {
      agent
      .get('/userSportPro/football')
      .expect(200, done);
    });
  });

  describe('get tests 2 (basic users)', function() {
    it('get all users', function (done) {
      agent
      .get('/user')
      .expect(200, done);
    });
  });

  describe('get tests (sportifs)', function() {
    it('get all sportives', function (done) {
      agent
      .get('/userSport')
      .expect(200, done);
    });
  });

  describe('get tests (sportifs professionnels)', function() {
    it('get all professionnal sportives', function (done) {
      agent
      .get('/userSportPro')
      .expect(200, done);
    });
  });
});
