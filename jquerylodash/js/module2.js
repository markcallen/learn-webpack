var _ = require('lodash');

// from https://www.mockaroo.com/

var people = [{
  "id": 1,
  "first_name": "Tammy",
  "last_name": "Hall",
  "email": "thall0@marriott.com",
  "gender": "Female",
  "ip_address": "239.47.184.28"
}, {
  "id": 2,
  "first_name": "Gary",
  "last_name": "Murray",
  "email": "gmurray1@chicagotribune.com",
  "gender": "Male",
  "ip_address": "50.31.116.196"
}, {
  "id": 3,
  "first_name": "Larry",
  "last_name": "Clark",
  "email": "lclark2@storify.com",
  "gender": "Male",
  "ip_address": "244.149.125.143"
}, {
  "id": 4,
  "first_name": "Charles",
  "last_name": "Marshall",
  "email": "cmarshall3@soundcloud.com",
  "gender": "Male",
  "ip_address": "75.252.245.103"
}, {
  "id": 5,
  "first_name": "Tammy",
  "last_name": "Lee",
  "email": "tlee4@shinystat.com",
  "gender": "Female",
  "ip_address": "225.52.102.193"
}, {
  "id": 6,
  "first_name": "Bonnie",
  "last_name": "Webb",
  "email": "bwebb5@smh.com.au",
  "gender": "Female",
  "ip_address": "79.37.145.79"
}, {
  "id": 7,
  "first_name": "Janet",
  "last_name": "Ramos",
  "email": "jramos6@networksolutions.com",
  "gender": "Female",
  "ip_address": "209.135.145.179"
}, {
  "id": 8,
  "first_name": "Emily",
  "last_name": "Boyd",
  "email": "eboyd7@issuu.com",
  "gender": "Female",
  "ip_address": "178.56.251.105"
}, {
  "id": 9,
  "first_name": "Norma",
  "last_name": "Stephens",
  "email": "nstephens8@godaddy.com",
  "gender": "Female",
  "ip_address": "103.230.14.71"
}, {
  "id": 10,
  "first_name": "Annie",
  "last_name": "Burke",
  "email": "aburke9@youku.com",
  "gender": "Female",
  "ip_address": "157.75.124.115"
}];

var femaleCount = _.filter(people, {gender: "Female"}).length;

alert(femaleCount + " females!");
